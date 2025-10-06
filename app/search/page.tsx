"use client";

import { useState } from "react";
import * as S from "./style";
import { ChevronDown } from "lucide-react";
import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import BackButton from "../components/BackButton";
import Image from "next/image";

const mockBookData = [
  {
    id: 1,
    title: "[국내도서] 제인소 앤 5",
    subtitle: "(원본 코믹스 MC 92권)",
    author: "Tatsuki Fujimoto · 김민경",
    publisher: "학산문화사",
    publishDate: "2025년 05월 25일",
    pages: "5,400 원",
    rating: 3.5,
    reviews: 4,
    image: "/book-sample.jpg",
  },
  {
    id: 2,
    title: "[국내도서] 제인소 앤 5",
    subtitle: "(원본 코믹스 MC 92권)",
    author: "Tatsuki Fujimoto · 김민경",
    publisher: "학산문화사",
    publishDate: "2025년 05월 25일",
    pages: "5,400 원",
    rating: 3.5,
    reviews: 4,
    image: "/book-sample.jpg",
  },
  {
    id: 3,
    title: "[국내도서] 제인소 앤 5",
    subtitle: "(원본 코믹스 MC 92권)",
    author: "Tatsuki Fujimoto · 김민경",
    publisher: "학산문화사",
    publishDate: "2025년 05월 25일",
    pages: "5,400 원",
    rating: 3.5,
    reviews: 4,
    image: "/book-sample.jpg",
  },
  {
    id: 4,
    title: "[국내도서] 제인소 앤 5",
    subtitle: "(원본 코믹스 MC 92권)",
    author: "Tatsuki Fujimoto · 김민경",
    publisher: "학산문화사",
    publishDate: "2025년 05월 25일",
    pages: "5,400 원",
    rating: 3.5,
    reviews: 4,
    image: "/book-sample.jpg",
  },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("고구마");
  const [sortBy, setSortBy] = useState("트로피순");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = () => {
    console.log("Search:", searchQuery);
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <S.SearchIcon
              src="/icons/search.svg"
              alt="검색"
              onClick={handleSearch}
            />
          </S.SearchBar>

          <S.ResultsSection>
            <S.ResultsHeader>
              <S.ResultsCount>
                '<S.Highlight>{searchQuery}</S.Highlight>' 에 대한 945개의
                이야기
              </S.ResultsCount>
              <S.SortDropdown>
                <S.SortText>{sortBy}</S.SortText>
                <ChevronDown size={16} color="var(--light-primary)" />
              </S.SortDropdown>
            </S.ResultsHeader>

            <S.BookList>
              {mockBookData.map((book) => (
                <S.BookCard key={book.id}>
                  <S.BookImage src={book.image} alt={book.title} />
                  <S.BookInfo>
                    <S.BookTitle>{book.title}</S.BookTitle>
                    <S.BookSubtitle>{book.subtitle}</S.BookSubtitle>
                    <S.BookMeta>
                      <S.MetaText>{book.author}</S.MetaText>
                      <S.MetaText>
                        {book.publisher} · {book.publishDate}
                      </S.MetaText>
                      <S.MetaText>{book.pages}</S.MetaText>
                    </S.BookMeta>
                    <S.RatingSection>
                      <S.TrophyIcon
                        src="/trophy/trophy_filled.svg"
                        alt="트로피"
                        width={20}
                        height={20}
                      />
                      <S.RatingText>{book.rating} / 5</S.RatingText>
                      <S.ReviewCount>({book.reviews})</S.ReviewCount>
                    </S.RatingSection>
                  </S.BookInfo>
                  <S.BookActions>
                    <Button type="button">읽는 중 표시</Button>
                    <OutlineButton type="button">바로 시 쓰기</OutlineButton>
                  </S.BookActions>
                </S.BookCard>
              ))}
            </S.BookList>

            <S.Pagination>
              {[1, 2, 3, 4, 5].map((page) => (
                <S.PageNumber
                  key={page}
                  active={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </S.PageNumber>
              ))}
              <S.PageNumber>...</S.PageNumber>
            </S.Pagination>
          </S.ResultsSection>
        </S.SearchSection>
      </S.SearchInner>
    </S.SearchContainer>
  );
}
