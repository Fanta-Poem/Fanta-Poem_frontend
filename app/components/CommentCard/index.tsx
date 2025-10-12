"use client";

import UserRating from "@/app/components/UserRating";
import * as S from "./style";
import { Heart, Share } from "lucide-react";

interface CommentCardProps {
  username: string;
  timeAgo: string;
  rating: number;
  poemLines: string[];
  poemQuote: string;
  likeCount: number;
  isLiked?: boolean;
  onClick?: () => void;
}

export default function CommentCard({
  username,
  timeAgo,
  rating,
  poemLines,
  poemQuote,
  likeCount,
  isLiked = false,
  onClick,
}: CommentCardProps) {
  return (
    <S.CommentCard onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <S.UserInfoLeft>
        <S.UserDetails>
          <S.Username>{username}</S.Username>
          <S.TimeAgo>{timeAgo}</S.TimeAgo>
        </S.UserDetails>
        <UserRating rating={rating} />
      </S.UserInfoLeft>
      <S.PoemContent>
        <S.PoemLines>
          {poemLines.map((line, index) => (
            <p
              key={index}
              className={index === poemLines.length - 1 ? "more" : ""}
            >
              {line}
            </p>
          ))}
        </S.PoemLines>
        <S.PoemQuote>
          <p>{poemQuote}</p>
        </S.PoemQuote>
        <S.InteractionBar>
          <S.LeftActions>
            <S.LikeButton>
              <Heart
                size={18}
                color={isLiked ? "var(--primary)" : "#888888"}
                fill={isLiked ? "var(--primary)" : "none"}
              />
              <p>{likeCount}</p>
            </S.LikeButton>
            <S.ShareButton>
              <Share size={18} color="#888888" />
              <p>공유</p>
            </S.ShareButton>
          </S.LeftActions>
        </S.InteractionBar>
      </S.PoemContent>
    </S.CommentCard>
  );
}
