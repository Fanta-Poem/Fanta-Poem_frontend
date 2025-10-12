"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
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

interface BookWithPoem extends Book {
  poem: Poem;
}

// Poems 데이터 가져오기
const fetchUserPoems = async (): Promise<Poem[]> => {
  const response = await fetch("/api/poems");
  if (!response.ok) {
    throw new Error("Failed to fetch poems");
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

export default function MyPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [booksWithPoems, setBooksWithPoems] = useState<BookWithPoem[]>([]);

  const userName = session?.user?.name || "사용자";

  // Poems 데이터 가져오기
  const { data: poems, isLoading: poemsLoading } = useQuery({
    queryKey: ["userPoems"],
    queryFn: fetchUserPoems,
    enabled: !!session,
  });

  // Poems에 대응하는 책 정보 가져오기
  useEffect(() => {
    if (!poems || poems.length === 0) {
      setBooksWithPoems([]);
      return;
    }

    const fetchAllBooks = async () => {
      const booksPromises = poems.map(async (poem) => {
        const book = await fetchBookInfo(poem.isbn);
        if (!book) return null;
        return { ...book, poem };
      });

      const results = await Promise.all(booksPromises);
      const validBooks = results.filter(
        (book): book is BookWithPoem => book !== null
      );
      setBooksWithPoems(validBooks);
    };

    fetchAllBooks();
  }, [poems]);

  const totalReadCount = poems?.length || 0;

  const handleSearch = () => {
    // MyPage에서는 검색어로 필터링만 수행 (페이지 이동 없음)
  };

  // 검색어로 책 필터링
  const filterBooks = (books: BookWithPoem[]) => {
    if (!searchQuery.trim()) return books;

    const query = searchQuery.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.authors.some((author) => author.toLowerCase().includes(query))
    );
  };

  const filteredReadBooks = filterBooks(booksWithPoems);

  if (poemsLoading) {
    return (
      <S.MyPageContainer>
        <S.MyPageInner>
          <BackButton />
          <div style={{ textAlign: "center", padding: "2rem" }}>
            로딩 중...
          </div>
        </S.MyPageInner>
      </S.MyPageContainer>
    );
  }

  return (
    <S.MyPageContainer>
      <S.MyPageInner>
        <BackButton />

        <S.HeaderSection>
          <S.Greeting>안녕하세요, {userName}님!</S.Greeting>
          <S.TitleSection>
            <S.Title>현재</S.Title>
            <S.TitleHighlight>{totalReadCount}</S.TitleHighlight>
            <S.Title>권의 이야기를 읽었어요</S.Title>
          </S.TitleSection>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            placeholder="이야기 검색"
          />
        </S.HeaderSection>

        <S.BooksSection>
          <S.BookCategory>
            <S.CategoryHeader>
              <S.CategoryTitle>이때동안 읽은 이야기</S.CategoryTitle>
              <S.CategoryCount>{filteredReadBooks.length}권</S.CategoryCount>
            </S.CategoryHeader>
            <S.BookGrid>
              {filteredReadBooks.length === 0 ? (
                <div
                  style={{
                    gridColumn: "1 / -1",
                    textAlign: "center",
                    padding: "2rem",
                    color: "#a0a0a0",
                  }}
                >
                  아직 읽은 책이 없습니다. 첫 번째 이야기를 시작해보세요!
                </div>
              ) : (
                <>
                  {filteredReadBooks.map((bookWithPoem) => (
                    <S.BookItem
                      key={bookWithPoem.isbn}
                      onClick={() =>
                        router.push(`/book/${bookWithPoem.isbn}`)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <S.BookThumbnail
                        src={bookWithPoem.thumbnail || "/book-sample.svg"}
                        alt={bookWithPoem.title}
                        onError={(e) => {
                          e.currentTarget.src = "/book-sample.svg";
                        }}
                      />
                      <S.BookInfo>
                        <S.BookTitle>{bookWithPoem.title}</S.BookTitle>
                        <S.BookAuthor>
                          {bookWithPoem.authors.join(", ")}
                        </S.BookAuthor>
                      </S.BookInfo>
                    </S.BookItem>
                  ))}
                  <S.AddBookItem onClick={() => router.push("/search")}>
                    <S.AddBookPlaceholder>+</S.AddBookPlaceholder>
                  </S.AddBookItem>
                </>
              )}
            </S.BookGrid>
          </S.BookCategory>
        </S.BooksSection>
      </S.MyPageInner>
    </S.MyPageContainer>
  );
}
