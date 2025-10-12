"use client";

import { useState } from "react";
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

const fetchBookByISBN = async (identifier: string): Promise<Book> => {
  // URL 인코딩된 제목인 경우 디코딩하여 제목으로 검색
  const decodedIdentifier = decodeURIComponent(identifier);

  // ISBN 형식인지 확인 (숫자만 포함, 10자 이상)
  const isISBN = /^\d{10,}$/.test(identifier.replace(/[\s-]/g, ''));

  if (isISBN) {
    const response = await fetch(`/api/books/${identifier}`);
    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }
    return response.json();
  } else {
    // 제목으로 검색
    const response = await fetch(`/api/books/search?query=${encodeURIComponent(decodedIdentifier)}&size=1`);
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

const mockComments = [
  {
    id: 1,
    username: "이감상",
    timeAgo: "1주 전",
    rating: 3.5,
    poemLines: [
      "책장을 넘기는 손끝에서",
      "새로운 세상이 펼쳐지고",
      "작가의 혼이 내 영혼과 만나네",
      "...",
    ],
    poemQuote:
      "만약 도시가 살아있고, 모래 바람을 통해 당신에게 속삭인다면 어떨 것 같나요? 엘리아나 로웬의 소설 <속삭이는 모래의 도시>는 바로 그 신비로운 질문에서 시작합니다. 이 책은 사막의 심장부에서 해가 뜰 때 나타났다가 해가 지면 사라지는 전설의 도시, '카이람'에 대한 이야기입니다.",
    likeCount: 12,
    isLiked: false,
  },
  {
    id: 2,
    username: "이감상",
    timeAgo: "1주 전",
    rating: 3.5,
    poemLines: [
      "책장을 넘기는 손끝에서",
      "새로운 세상이 펼쳐지고",
      "작가의 혼이 내 영혼과 만나네",
      "...",
    ],
    poemQuote:
      "만약 도시가 살아있고, 모래 바람을 통해 당신에게 속삭인다면 어떨 것 같나요? 엘리아나 로웬의 소설 <속삭이는 모래의 도시>는 바로 그 신비로운 질문에서 시작합니다. 이 책은 사막의 심장부에서 해가 뜰 때 나타났다가 해가 지면 사라지는 전설의 도시, '카이람'에 대한 이야기입니다.",
    likeCount: 12,
    isLiked: true,
  },
];

const sortOptions = [
  { value: "likes", label: "좋아요 순" },
  { value: "latest", label: "최신순" },
  { value: "oldest", label: "오래된 순" },
];

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const identifier = params.id as string;
  const [sortBy, setSortBy] = useState("likes");
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedISBN, setSelectedISBN] = useState<string | null>(null);

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
              <S.CommentsTitle>총 8개의 여행자의 기록</S.CommentsTitle>
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
            {mockComments.map((comment) => (
              <CommentCard
                key={comment.id}
                username={comment.username}
                timeAgo={comment.timeAgo}
                rating={comment.rating}
                poemLines={comment.poemLines}
                poemQuote={comment.poemQuote}
                likeCount={comment.likeCount}
                isLiked={comment.isLiked}
              />
            ))}
          </S.CommentsList>

          <S.LoadMoreButton>
            <p>더 많은 기록 보기</p>
          </S.LoadMoreButton>
        </S.PoetryCommentsContainer>
      </S.BookDetailInner>

      <ReadingDateModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        onSubmit={(startDate: string, endDate: string) => {
          if (selectedISBN) {
            router.push(`/write/${selectedISBN}?startDate=${startDate}&endDate=${endDate}`);
          }
        }}
      />
    </S.BookDetailContainer>
  );
}
