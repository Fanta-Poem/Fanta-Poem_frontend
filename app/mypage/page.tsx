"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import * as S from "./style";

interface Book {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
}

const mockReadBooks: Book[] = [
  { id: "1", title: "절창", author: "구병모", thumbnail: "/book-sample-1.png" },
  {
    id: "2",
    title: "홍학의 자리",
    author: "정해연",
    thumbnail: "/book-sample-2.png",
  },
  { id: "3", title: "절창", author: "구병모", thumbnail: "/book-sample-1.png" },
  {
    id: "4",
    title: "홍학의 자리",
    author: "정해연",
    thumbnail: "/book-sample-2.png",
  },
  { id: "5", title: "절창", author: "구병모", thumbnail: "/book-sample-1.png" },
  {
    id: "6",
    title: "홍학의 자리",
    author: "정해연",
    thumbnail: "/book-sample-2.png",
  },
];

const mockReadingBooks: Book[] = [
  { id: "7", title: "절창", author: "구병모", thumbnail: "/book-sample-1.png" },
  {
    id: "8",
    title: "홍학의 자리",
    author: "정해연",
    thumbnail: "/book-sample-2.png",
  },
  { id: "9", title: "절창", author: "구병모", thumbnail: "/book-sample-1.png" },
  {
    id: "10",
    title: "홍학의 자리",
    author: "정해연",
    thumbnail: "/book-sample-2.png",
  },
];

export default function MyPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const totalReadCount = 326;
  const readBooksCount = 322;
  const readingBooksCount = 4;

  const handleSearch = () => {
    // MyPage에서는 검색어로 필터링만 수행 (페이지 이동 없음)
  };

  // 검색어로 책 필터링
  const filterBooks = (books: Book[]) => {
    if (!searchQuery.trim()) return books;

    const query = searchQuery.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  };

  const filteredReadBooks = filterBooks(mockReadBooks);
  const filteredReadingBooks = filterBooks(mockReadingBooks);

  return (
    <S.MyPageContainer>
      <S.MyPageInner>
        <BackButton />

        <S.HeaderSection>
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
              <S.CategoryCount>{readBooksCount}권</S.CategoryCount>
            </S.CategoryHeader>
            <S.BookGrid>
              {filteredReadBooks.map((book) => (
                <S.BookItem key={book.id}>
                  <S.BookThumbnail src={book.thumbnail} alt={book.title} />
                  <S.BookInfo>
                    <S.BookTitle>{book.title}</S.BookTitle>
                    <S.BookAuthor>{book.author}</S.BookAuthor>
                  </S.BookInfo>
                </S.BookItem>
              ))}
              <S.AddBookItem>
                <S.AddBookPlaceholder>+</S.AddBookPlaceholder>
              </S.AddBookItem>
            </S.BookGrid>
          </S.BookCategory>

          <S.BookCategory>
            <S.CategoryHeader>
              <S.CategoryTitle>읽고 있는 이야기</S.CategoryTitle>
              <S.CategoryCount>{readingBooksCount}권</S.CategoryCount>
            </S.CategoryHeader>
            <S.BookGrid>
              {filteredReadingBooks.map((book) => (
                <S.BookItem key={book.id}>
                  <S.BookThumbnail src={book.thumbnail} alt={book.title} />
                  <S.BookInfo>
                    <S.BookTitle>{book.title}</S.BookTitle>
                    <S.BookAuthor>{book.author}</S.BookAuthor>
                  </S.BookInfo>
                </S.BookItem>
              ))}
            </S.BookGrid>
          </S.BookCategory>
        </S.BooksSection>
      </S.MyPageInner>
    </S.MyPageContainer>
  );
}
