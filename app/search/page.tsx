"use client";

import { useState } from "react";
import * as S from "./style";
import BackButton from "../components/BackButton";
import Dropdown from "../components/Dropdown";
import BookCard from "../components/BookCard";
import { useQuery } from "@tanstack/react-query";
import LoadingNotFound from "./LoadingNotFound";

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

interface SearchResponse {
  meta: {
    total_count: number;
    pageable_count: number;
    is_end: boolean;
  };
  documents: Book[];
}

const fetchBooks = async (
  query: string,
  page: number,
  sort: string
): Promise<SearchResponse> => {
  const response = await fetch(
    `/api/books/search?query=${encodeURIComponent(
      query
    )}&page=${page}&size=10&sort=${sort}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

const sortOptions = [
  { value: "accuracy", label: "정확도순" },
  { value: "latest", label: "최신순" },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("accuracy");

  const { data, isLoading } = useQuery({
    queryKey: ["books", searchQuery, currentPage, sortBy],
    queryFn: () => fetchBooks(searchQuery, currentPage, sortBy),
    enabled: !!searchQuery.trim(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  const books = data?.documents || [];
  const totalCount = data?.meta.total_count || 0;

  const handleSearch = () => {
    if (inputValue.trim()) {
      setSearchQuery(inputValue);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <S.SearchContainer>
      <S.SearchInner>
        <BackButton />

        <S.SearchSection>
          <S.SearchBar>
            <S.SearchInput
              type="text"
              placeholder="이야기 검색"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <S.SearchIcon
              src="/icons/search.svg"
              alt="검색"
              onClick={handleSearch}
            />
          </S.SearchBar>

          {searchQuery && (
            <S.ResultsSection>
              <S.ResultsHeader>
                <S.ResultsCount>
                  '<S.Highlight>{searchQuery}</S.Highlight>' 에 대한{" "}
                  {totalCount.toLocaleString()}개의 이야기
                </S.ResultsCount>
                <Dropdown
                  options={sortOptions}
                  value={sortBy}
                  onChange={handleSortChange}
                  width="120px"
                />
              </S.ResultsHeader>

              {isLoading ? (
                <S.LoadingMessage>로딩 중...</S.LoadingMessage>
              ) : books.length > 0 ? (
                <>
                  <S.BookList>
                    {books.map((book) => (
                      <BookCard
                        key={book.isbn}
                        thumbnail={book.thumbnail || "/book-sample.jpg"}
                        title={book.title}
                        subtitle={book.contents}
                        authors={book.authors}
                        translators={book.translators}
                        publisher={book.publisher}
                        publishDate={new Date(book.datetime).toLocaleDateString(
                          "ko-KR"
                        )}
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
                      />
                    ))}
                  </S.BookList>

                  <S.Pagination>
                    {currentPage > 2 && (
                      <>
                        <S.PageNumber onClick={() => handlePageChange(1)}>
                          1
                        </S.PageNumber>
                        <S.PageNumber>...</S.PageNumber>
                      </>
                    )}
                    {currentPage > 1 && (
                      <S.PageNumber
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        {currentPage - 1}
                      </S.PageNumber>
                    )}
                    <S.PageNumber active>{currentPage}</S.PageNumber>
                    {!isLoading && books.length === 10 && (
                      <>
                        <S.PageNumber
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          {currentPage + 1}
                        </S.PageNumber>
                        <S.PageNumber>...</S.PageNumber>
                      </>
                    )}
                  </S.Pagination>
                </>
              ) : (
                <LoadingNotFound />
              )}
            </S.ResultsSection>
          )}
        </S.SearchSection>
      </S.SearchInner>
    </S.SearchContainer>
  );
}
