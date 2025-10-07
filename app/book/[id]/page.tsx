"use client";

import { useState } from "react";
import BackButton from "@/app/components/BackButton";
import CommentCard from "@/app/components/CommentCard";
import Dropdown from "@/app/components/Dropdown";
import BookCard from "@/app/components/BookCard";
import * as S from "./style";

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
  const [sortBy, setSortBy] = useState("likes");
  return (
    <S.BookDetailContainer>
      <S.BookDetailInner>
        <BackButton />

        <S.BookDetailSection>
          <BookCard
            thumbnail="/semplePoster.png"
            title="[국내도서] 체인소 맨 5"
            subtitle="(학산 코믹스 HC 9241)"
            authors={["Tatsuki Fujimoto"]}
            publisher="학산문화사"
            publishDate="2025년 03월 25일"
            price="5,400 원"
            rating={3.5}
            reviewCount={4}
            variant="detail"
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
    </S.BookDetailContainer>
  );
}
