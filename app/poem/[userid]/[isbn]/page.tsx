"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BackButton from "@/app/components/BackButton";
import * as S from "./style";
import { Heart } from "lucide-react";

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

interface Book {
  isbn: string;
  title: string;
  contents: string;
  authors: string[];
  publisher: string;
  translators: string[];
  thumbnail: string;
  datetime: string;
}

interface User {
  id: string;
  nickname: string;
}

// Poem 데이터 가져오기
const fetchPoem = async (userid: string, isbn: string): Promise<Poem> => {
  const response = await fetch(`/api/poems/${userid}/${isbn}`);
  if (!response.ok) {
    throw new Error("Failed to fetch poem");
  }
  const result = await response.json();
  return result.data;
};

// 책 정보 가져오기
const fetchBookInfo = async (isbn: string): Promise<Book> => {
  const response = await fetch(`/api/books/${isbn}`);
  if (!response.ok) {
    throw new Error("Failed to fetch book");
  }
  return response.json();
};

// 사용자 정보 가져오기
const fetchUser = async (userId: string): Promise<User> => {
  const response = await fetch(`/api/users/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  const result = await response.json();
  return result.data;
};

export default function PoemDetailPage() {
  const params = useParams();
  const userid = params.userid as string;
  const rawIsbn = params.isbn as string;

  // ISBN 정리: 공백으로 구분된 경우 첫 번째 값만, % 이후는 제거
  const cleanIsbn = rawIsbn.split(' ')[0].split('%')[0].trim();

  // Poem 데이터 가져오기 (정리된 ISBN 사용)
  const {
    data: poem,
    isLoading: poemLoading,
    error: poemError,
  } = useQuery({
    queryKey: ["poem", userid, cleanIsbn],
    queryFn: () => fetchPoem(userid, cleanIsbn),
    enabled: !!userid && !!cleanIsbn,
  });

  // 책 정보 가져오기 (정리된 ISBN 사용)
  const {
    data: book,
    isLoading: bookLoading,
    error: bookError,
  } = useQuery({
    queryKey: ["book", cleanIsbn],
    queryFn: () => fetchBookInfo(cleanIsbn),
    enabled: !!cleanIsbn,
  });

  // 사용자 정보 가져오기
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useQuery({
    queryKey: ["user", userid],
    queryFn: () => fetchUser(userid),
    enabled: !!userid,
  });

  if (poemLoading || bookLoading || userLoading) {
    return (
      <S.PageContainer>
        <S.PageInner>
          <BackButton />
          <div style={{ textAlign: "center", padding: "2rem", color: "#fff" }}>
            로딩 중...
          </div>
        </S.PageInner>
      </S.PageContainer>
    );
  }

  if (poemError || bookError || userError || !poem || !book || !user) {
    return (
      <S.PageContainer>
        <S.PageInner>
          <BackButton />
          <div style={{ textAlign: "center", padding: "2rem", color: "#fff" }}>
            시 또는 책 정보를 불러올 수 없습니다.
          </div>
        </S.PageInner>
      </S.PageContainer>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // 실제 데이터 매핑
  const bookData = {
    coverImage: book.thumbnail || "/book-sample.svg",
    title: book.title,
    author: book.authors.join(", "),
    authorRole: "저자(글)",
    series: book.contents ? `(${book.contents.substring(0, 50)}...)` : "",
    publisher: book.publisher,
    publishDate: new Date(book.datetime).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readStartDate: formatDate(poem.start_date),
    readEndDate: formatDate(poem.end_date),
    trophies: poem.rating,
    status: poem.is_public ? "공개" : "비공개",
    likes: 0, // TODO: 좋아요 기능 구현 시 추가
    review: poem.review || "",
    poem: {
      title: poem.poem_title,
      author: user.nickname,
      content: poem.poem_content,
    },
  };

  return (
    <S.PageContainer>
      <S.PageInner>
        <BackButton />

        <S.ContentWrapper>
          {/* Left Section - Book Details */}
          <S.LeftSection>
            <S.BookSection>
              <S.BookCover src={bookData.coverImage} alt={bookData.title} />

              <S.BookInfoWrapper>
                <S.BookMetaSection>
                  <S.BookTitle>{bookData.title}</S.BookTitle>
                  <S.AuthorInfo>
                    <S.AuthorName>{bookData.author}</S.AuthorName>
                    <S.AuthorRole>{bookData.authorRole}</S.AuthorRole>
                  </S.AuthorInfo>
                  <S.Series>{bookData.series}</S.Series>
                  <S.PublishInfo>
                    <S.Publisher>{bookData.publisher}</S.Publisher>
                    <S.Separator>•</S.Separator>
                    <S.PublishDate>{bookData.publishDate}</S.PublishDate>
                  </S.PublishInfo>
                </S.BookMetaSection>

                <S.ReadDateSection>
                  <S.SectionLabel>읽은 날짜</S.SectionLabel>
                  <S.DateWrapper>
                    <S.DateText>{bookData.readStartDate} ~</S.DateText>
                    <S.DateText>{bookData.readEndDate}</S.DateText>
                  </S.DateWrapper>
                </S.ReadDateSection>

                <S.BottomInfoWrapper>
                  <S.TrophySection>
                    <S.SectionLabel>내가 준 트로피</S.SectionLabel>
                    <S.TrophyWrapper>
                      {[1, 2, 3, 4, 5].map((index) => (
                        <S.TrophyIcon
                          key={index}
                          src={
                            index <= bookData.trophies
                              ? "/trophy/trophy_filled.svg"
                              : "/trophy/trophy_unfilled.svg"
                          }
                          alt="trophy"
                        />
                      ))}
                    </S.TrophyWrapper>
                  </S.TrophySection>

                  <S.StatusLikesWrapper>
                    <S.StatusSection>
                      <S.SectionLabel>상태</S.SectionLabel>
                      <S.StatusText>{bookData.status}</S.StatusText>
                    </S.StatusSection>

                    <S.LikesSection>
                      <S.SectionLabel>좋아요</S.SectionLabel>
                      <S.LikeButton>
                        <Heart size={18} color="#888888" />
                        <S.LikeCount>{bookData.likes}</S.LikeCount>
                      </S.LikeButton>
                    </S.LikesSection>
                  </S.StatusLikesWrapper>
                </S.BottomInfoWrapper>
              </S.BookInfoWrapper>
            </S.BookSection>

            {bookData.review && (
              <S.ReviewSection>
                <S.ReviewTitle>감상문</S.ReviewTitle>
                <S.ReviewContent>{bookData.review}</S.ReviewContent>
              </S.ReviewSection>
            )}
          </S.LeftSection>

          {/* Right Section - Poem */}
          <S.RightSection>
            <S.PoemSectionTitle>판타시</S.PoemSectionTitle>
            <S.PoemCard>
              <S.PoemContentWrapper>
                <S.PoemHeader>
                  <S.PoemTitle>{bookData.poem.title}</S.PoemTitle>
                  {bookData.poem.author && (
                    <S.PoemAuthor>{bookData.poem.author}</S.PoemAuthor>
                  )}
                </S.PoemHeader>
                <S.PoemTextWrapper>
                  {bookData.poem.content.split("\n").map((line, index) => (
                    <S.PoemLine key={index}>{line || "\u00A0"}</S.PoemLine>
                  ))}
                </S.PoemTextWrapper>
              </S.PoemContentWrapper>
            </S.PoemCard>
          </S.RightSection>
        </S.ContentWrapper>
      </S.PageInner>
    </S.PageContainer>
  );
}
