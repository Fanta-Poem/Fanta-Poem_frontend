"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
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

const fetchBookByISBN = async (isbn: string): Promise<Book> => {
  const response = await fetch(`/api/books/${isbn}`);

  if (!response.ok) {
    throw new Error("Failed to fetch book");
  }

  return response.json();
};

export default function WritePage() {
  const params = useParams();
  const isbn = params.isbn as string;

  const [review, setReview] = useState("");
  const [poem, setPoem] = useState("");

  const { data: book, isLoading } = useQuery({
    queryKey: ["book", isbn],
    queryFn: () => fetchBookByISBN(isbn),
    enabled: !!isbn,
  });

  const handleSubmit = () => {
    console.log("Review:", review);
    console.log("Poem:", poem);
    // TODO: API 호출하여 저장
  };

  if (isLoading) {
    return (
      <S.WriteContainer>
        <S.WriteInner>
          <BackButton />
          <S.LoadingMessage>로딩 중...</S.LoadingMessage>
        </S.WriteInner>
      </S.WriteContainer>
    );
  }

  if (!book) {
    return (
      <S.WriteContainer>
        <S.WriteInner>
          <BackButton />
          <S.ErrorMessage>책 정보를 불러올 수 없습니다.</S.ErrorMessage>
        </S.WriteInner>
      </S.WriteContainer>
    );
  }

  return (
    <S.WriteContainer>
      <S.WriteInner>
        <BackButton />

        <S.ContentWrapper>
          <S.LeftSection>
            <S.BookInfoCard>
              <S.BookCover
                src={book.thumbnail || "/book-sample.svg"}
                alt={book.title}
                onError={(e) => {
                  e.currentTarget.src = "/book-sample.svg";
                }}
              />
              <S.BookDetails>
                <S.BookTitle>{book.title}</S.BookTitle>
                <S.BookMeta>{book.authors.join(", ")} 저자(글)</S.BookMeta>
                <S.BookMeta>
                  {book.publisher} ·{" "}
                  {new Date(book.datetime).toLocaleDateString("ko-KR")}
                </S.BookMeta>
                <S.ReadingPeriod>
                  읽은 날짜
                  <br />
                  2024년 12월 09일 ~ 2025년 12월 09일
                </S.ReadingPeriod>
              </S.BookDetails>
            </S.BookInfoCard>

            <S.SectionTitle>감상문</S.SectionTitle>
            <S.ReviewTextarea
              placeholder="인상 깊었던 장면과 책에 대한 감상문을 자유롭게 작성하세요"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </S.LeftSection>

          <S.RightSection>
            <S.SectionTitle>판타시</S.SectionTitle>
            <S.PoemTextarea
              placeholder={`제목을 입력해주세요

탐험가이름

여기에 이렇게 글을
작성해주세요

여기에
이렇게 글을
작성해주세요

여기에
이렇게 글을
작성해주세요`}
              value={poem}
              onChange={(e) => setPoem(e.target.value)}
            />
            <S.ButtonWrapper>
              <Button onClick={handleSubmit}>작성완료</Button>
            </S.ButtonWrapper>
          </S.RightSection>
        </S.ContentWrapper>
      </S.WriteInner>
    </S.WriteContainer>
  );
}
