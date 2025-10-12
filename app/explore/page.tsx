"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../components/BackButton";
import * as S from "./style";

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
  authors: string[];
  thumbnail: string;
}

interface User {
  id: string;
  nickname: string;
}

interface PoemWithDetails extends Poem {
  book?: Book;
  user?: User;
}

// 공개된 시 목록 가져오기
const fetchPublicPoems = async (): Promise<Poem[]> => {
  const response = await fetch("/api/explore");
  if (!response.ok) {
    throw new Error("Failed to fetch public poems");
  }
  const result = await response.json();
  return result.data || [];
};

// 책 정보 가져오기
const fetchBookInfo = async (isbn: string): Promise<Book | null> => {
  try {
    const response = await fetch(`/api/books/${isbn}`);
    if (!response.ok) return null;
    const book = await response.json();
    return {
      isbn: book.isbn,
      title: book.title,
      authors: book.authors,
      thumbnail: book.thumbnail,
    };
  } catch (error) {
    console.error(`Failed to fetch book ${isbn}:`, error);
    return null;
  }
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

export default function ExplorePage() {
  const router = useRouter();
  const [poemsWithDetails, setPoemsWithDetails] = useState<PoemWithDetails[]>(
    []
  );

  // 공개된 시 목록 가져오기
  const { data: poems, isLoading } = useQuery({
    queryKey: ["publicPoems"],
    queryFn: fetchPublicPoems,
  });

  // 시에 대한 책과 사용자 정보 가져오기
  useEffect(() => {
    if (!poems || poems.length === 0) {
      setPoemsWithDetails([]);
      return;
    }

    const fetchAllDetails = async () => {
      const poemsPromises = poems.map(async (poem) => {
        const [book, user] = await Promise.all([
          fetchBookInfo(poem.isbn),
          fetchUserInfo(poem.user_id),
        ]);

        return {
          ...poem,
          book: book || undefined,
          user: user || undefined,
        };
      });

      const results = await Promise.all(poemsPromises);
      setPoemsWithDetails(results);
    };

    fetchAllDetails();
  }, [poems]);

  const handlePoemClick = (poem: PoemWithDetails) => {
    const cleanIsbn = poem.isbn.split(" ")[0].split("%")[0].trim();
    router.push(`/poem/${poem.user_id}/${cleanIsbn}`);
  };

  if (isLoading) {
    return (
      <S.ExploreContainer>
        <S.ExploreInner>
          <BackButton />
          <S.LoadingMessage>로딩 중...</S.LoadingMessage>
        </S.ExploreInner>
      </S.ExploreContainer>
    );
  }

  return (
    <S.ExploreContainer>
      <S.ExploreInner>
        <BackButton />

        <S.HeaderSection>
          <S.Title>탐색</S.Title>
          <S.Subtitle>다른 탐험가들의 시를 감상해보세요</S.Subtitle>
        </S.HeaderSection>

        <S.PoemsSection>
          {poemsWithDetails.length === 0 ? (
            <S.EmptyMessage>아직 공유된 시가 없습니다.</S.EmptyMessage>
          ) : (
            <S.PoemGrid>
              {poemsWithDetails.map((poem) => (
                <S.PoemCard
                  key={`${poem.user_id}-${poem.isbn}`}
                  onClick={() => handlePoemClick(poem)}
                >
                  {poem.book && (
                    <S.BookCover
                      src={poem.book.thumbnail || "/book-sample.svg"}
                      alt={poem.book.title}
                      onError={(e) => {
                        e.currentTarget.src = "/book-sample.svg";
                      }}
                    />
                  )}
                  <S.PoemInfo>
                    <S.PoemTitle>{poem.poem_title}</S.PoemTitle>
                    {poem.book && (
                      <S.BookTitle>{poem.book.title}</S.BookTitle>
                    )}
                    <S.PoemMeta>
                      <S.AuthorName>
                        {poem.user?.nickname || "익명"}
                      </S.AuthorName>
                      <S.DateText>
                        {new Date(poem.created_at).toLocaleDateString("ko-KR")}
                      </S.DateText>
                    </S.PoemMeta>
                  </S.PoemInfo>
                </S.PoemCard>
              ))}
            </S.PoemGrid>
          )}
        </S.PoemsSection>
      </S.ExploreInner>
    </S.ExploreContainer>
  );
}
