"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BackButton from "@/app/components/BackButton";
import CommentCard from "@/app/components/CommentCard";
import Dropdown from "@/app/components/Dropdown";
import BookCard from "@/app/components/BookCard";
import Button from "@/app/components/Button";
import ReadingDateModal from "@/app/components/ReadingDateModal";
import * as S from "./style";

interface Book {
  isbn: string;
  title: string;
  contents: string;
  url: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  datetime: string;
}

interface Poem {
  isbn: string;
  user_id: string;
  start_date: string;
  end_date: string;
  review: string | null;
  poem_title: string;
  poem_content: string;
  rating: number;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

interface User {
  id: string;
  nickname: string;
}

interface PoemWithUser extends Poem {
  user?: User;
  likeCount?: number;
  isLiked?: boolean;
}

const fetchBookByISBN = async (identifier: string): Promise<Book> => {
  // URL 인코딩된 제목인 경우 디코딩하여 제목으로 검색
  const decodedIdentifier = decodeURIComponent(identifier);

  // ISBN 형식인지 확인 (숫자만 포함, 10자 이상)
  const isISBN = /^\d{10,}$/.test(identifier.replace(/[\s-]/g, ""));

  if (isISBN) {
    const response = await fetch(`/api/books/${identifier}`);
    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }
    return response.json();
  } else {
    // 제목으로 검색
    const response = await fetch(
      `/api/books/search?query=${encodeURIComponent(decodedIdentifier)}&size=1`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }
    const data = await response.json();
    if (data.documents && data.documents.length > 0) {
      return data.documents[0];
    }
    throw new Error("Book not found");
  }
};

// 특정 ISBN의 공개된 시들 가져오기
const fetchPoemsByISBN = async (isbn: string): Promise<Poem[]> => {
  const response = await fetch(`/api/poems/by-isbn/${isbn}`);
  if (!response.ok) {
    throw new Error("Failed to fetch poems");
  }
  const result = await response.json();
  return result.data || [];
};

// 사용자 정보 가져오기
const fetchUserInfo = async (userId: string): Promise<User | null> => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) return null;
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch user ${userId}:`, error);
    return null;
  }
};

// 좋아요 정보 가져오기
const fetchLikeInfo = async (
  userId: string,
  isbn: string
): Promise<{ likeCount: number; isLiked: boolean }> => {
  try {
    const response = await fetch(`/api/poems/${userId}/${isbn}/likes`);
    if (!response.ok) return { likeCount: 0, isLiked: false };
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch likes:`, error);
    return { likeCount: 0, isLiked: false };
  }
};

const sortOptions = [
  { value: "likes", label: "좋아요 순" },
  { value: "latest", label: "최신순" },
  { value: "oldest", label: "오래된 순" },
];

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const identifier = params.id as string;
  const [sortBy, setSortBy] = useState("latest");
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedISBN, setSelectedISBN] = useState<string | null>(null);
  const [poemsWithDetails, setPoemsWithDetails] = useState<PoemWithUser[]>([]);

  const {
    data: book,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["book", identifier],
    queryFn: () => fetchBookByISBN(identifier),
    enabled: !!identifier,
    staleTime: 1000 * 60 * 5, // 캐시된 데이터는 5분간 유지
  });

  // 해당 ISBN의 공개된 시들 가져오기
  const { data: poems, isLoading: poemsLoading } = useQuery({
    queryKey: ["poemsByISBN", book?.isbn],
    queryFn: () => {
      // ISBN 정리: 첫 번째 ISBN만 사용, 공백과 % 제거
      const cleanIsbn = book!.isbn.split(" ")[0].split("%")[0].trim();
      // console.log("🔍 Fetching poems for ISBN:", cleanIsbn);
      return fetchPoemsByISBN(cleanIsbn);
    },
    enabled: !!book?.isbn,
  });

  // 시에 대한 사용자 및 좋아요 정보 가져오기
  useEffect(() => {
    if (!poems || poems.length === 0) {
      setPoemsWithDetails([]);
      return;
    }

    const fetchAllDetails = async () => {
      const poemsPromises = poems.map(async (poem) => {
        const [user, likeInfo] = await Promise.all([
          fetchUserInfo(poem.user_id),
          fetchLikeInfo(poem.user_id, poem.isbn),
        ]);

        return {
          ...poem,
          user: user || undefined,
          likeCount: likeInfo.likeCount,
          isLiked: likeInfo.isLiked,
        };
      });

      const results = await Promise.all(poemsPromises);
      setPoemsWithDetails(results);
    };

    fetchAllDetails();
  }, [poems]);

  // 정렬 로직
  const sortedPoems = [...poemsWithDetails].sort((a, b) => {
    switch (sortBy) {
      case "likes":
        return (b.likeCount || 0) - (a.likeCount || 0);
      case "latest":
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      case "oldest":
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      default:
        return 0;
    }
  });

  // 시간 차이 계산 함수
  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffInMs = now.getTime() - past.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "오늘";
    if (diffInDays === 1) return "어제";
    if (diffInDays < 7) return `${diffInDays}일 전`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}주 전`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)}개월 전`;
    return `${Math.floor(diffInDays / 365)}년 전`;
  };

  if (isLoading) {
    return (
      <S.BookDetailContainer>
        <S.BookDetailInner>
          <BackButton />
          <S.LoadingMessage>로딩 중...</S.LoadingMessage>
        </S.BookDetailInner>
      </S.BookDetailContainer>
    );
  }

  if (error || !book) {
    return (
      <S.BookDetailContainer>
        <S.BookDetailInner>
          <BackButton />
          <S.ErrorContainer>
            <S.ErrorMessage>책 정보를 불러올 수 없습니다.</S.ErrorMessage>
            <S.ErrorDescription>
              이 책의 상세 정보를 찾을 수 없습니다. 다른 책을 검색해보세요.
            </S.ErrorDescription>
            <S.ErrorButtonGroup>
              <Button type="button" onClick={() => router.back()}>
                이전 페이지로
              </Button>
              <Button type="button" onClick={() => router.push("/search")}>
                검색 페이지로
              </Button>
            </S.ErrorButtonGroup>
          </S.ErrorContainer>
        </S.BookDetailInner>
      </S.BookDetailContainer>
    );
  }

  return (
    <S.BookDetailContainer>
      <S.BookDetailInner>
        <BackButton />

        <S.BookDetailSection>
          <BookCard
            thumbnail={book.thumbnail || "/book-sample.svg"}
            title={book.title}
            subtitle={book.contents}
            authors={book.authors}
            translators={book.translators}
            publisher={book.publisher}
            publishDate={new Date(book.datetime).toLocaleDateString("ko-KR")}
            price={
              book.sale_price > 0
                ? `${book.sale_price.toLocaleString()} 원`
                : book.price > 0
                ? `${book.price.toLocaleString()} 원`
                : "가격 정보 없음"
            }
            rating={0}
            reviewCount={0}
            variant="search"
            isbn={book.isbn}
            onWriteClick={() => {
              const firstISBN = book.isbn?.split(" ")[0].trim();
              if (firstISBN && firstISBN.length >= 10) {
                setSelectedISBN(firstISBN);
                setIsDateModalOpen(true);
              }
            }}
          />
        </S.BookDetailSection>

        <S.PoetryCommentsContainer>
          <S.CommentsHeader>
            <S.CommentsHeaderInner>
              <S.CommentsTitle>
                총 {sortedPoems.length}개의 여행자의 기록
              </S.CommentsTitle>
              <Dropdown
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
                width="160px"
              />
            </S.CommentsHeaderInner>
            <S.Separator />
          </S.CommentsHeader>

          <S.CommentsList>
            {poemsLoading ? (
              <div
                style={{ textAlign: "center", padding: "2rem", color: "#888" }}
              >
                로딩 중...
              </div>
            ) : sortedPoems.length === 0 ? (
              <div
                style={{ textAlign: "center", padding: "2rem", color: "#888" }}
              >
                아직 작성된 시가 없습니다. 첫 번째 여행자가 되어보세요!
              </div>
            ) : (
              sortedPoems.map((poem) => {
                // 시의 첫 4줄 추출
                const poemLines = poem.poem_content
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .slice(0, 4);

                // 마지막에 "..." 추가
                if (
                  poem.poem_content
                    .split("\n")
                    .filter((line) => line.trim() !== "").length > 4
                ) {
                  poemLines.push("...");
                }

                return (
                  <CommentCard
                    key={`${poem.user_id}-${poem.isbn}`}
                    username={poem.user?.nickname || "익명"}
                    timeAgo={getTimeAgo(poem.created_at)}
                    rating={poem.rating}
                    poemLines={poemLines}
                    poemQuote={poem.review || ""}
                    likeCount={poem.likeCount || 0}
                    isLiked={poem.isLiked || false}
                    onClick={() => {
                      const cleanIsbn = poem.isbn
                        .split(" ")[0]
                        .split("%")[0]
                        .trim();
                      router.push(`/poem/${poem.user_id}/${cleanIsbn}`);
                    }}
                  />
                );
              })
            )}
          </S.CommentsList>

          {sortedPoems.length > 0 && sortedPoems.length >= 10 && (
            <S.LoadMoreButton>
              <p>더 많은 기록 보기</p>
            </S.LoadMoreButton>
          )}
        </S.PoetryCommentsContainer>
      </S.BookDetailInner>

      <ReadingDateModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        onSubmit={(startDate: string, endDate: string) => {
          if (selectedISBN) {
            router.push(
              `/write/${selectedISBN}?startDate=${startDate}&endDate=${endDate}`
            );
          }
        }}
      />
    </S.BookDetailContainer>
  );
}
