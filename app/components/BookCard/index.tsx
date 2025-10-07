"use client";

import * as S from "./style";
import Button from "@/app/components/Button";
import OutlineButton from "@/app/components/OutlineButton";

export interface BookCardProps {
  thumbnail: string;
  title: string;
  subtitle?: string;
  authors: string[];
  translators?: string[];
  publisher: string;
  publishDate: string;
  price: string;
  rating?: number;
  reviewCount?: number;
  variant?: "search" | "detail";
  onClick?: () => void;
}

export default function BookCard({
  thumbnail,
  title,
  subtitle,
  authors,
  translators = [],
  publisher,
  publishDate,
  price,
  rating = 0,
  reviewCount = 0,
  variant = "search",
  onClick,
}: BookCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/book-sample.jpg";
  };

  if (variant === "detail") {
    return (
      <S.DetailBookCard>
        <S.DetailBookCardInner>
          <S.DetailBookCoverImage
            src={thumbnail}
            alt={title}
            onError={handleImageError}
          />
          <S.DetailBookInfoRow>
            <S.DetailBookInfoInner>
              <S.DetailBookDetails>
                <S.DetailBookTitle>{title}</S.DetailBookTitle>
                {subtitle && (
                  <S.DetailBookSubtitle>{subtitle}</S.DetailBookSubtitle>
                )}
                <S.DetailBookAuthorRow>
                  <p>{authors.join(", ")}</p>
                  <p>저자(글)</p>
                </S.DetailBookAuthorRow>
                <S.DetailBookPublisherRow>
                  <p>{publisher}</p>
                  <p>•</p>
                  <p>{publishDate}</p>
                </S.DetailBookPublisherRow>
                <S.DetailBookPrice>{price}</S.DetailBookPrice>
                <S.DetailBookRatingRow>
                  <S.DetailTrophyIcon>
                    <img src="/trophy/trophy_filled.svg" alt="trophy" />
                  </S.DetailTrophyIcon>
                  <S.DetailRatingText>
                    {rating.toFixed(1)} / 5
                  </S.DetailRatingText>
                  <S.DetailReviewCount>({reviewCount})</S.DetailReviewCount>
                </S.DetailBookRatingRow>
              </S.DetailBookDetails>
              <S.DetailBookActions>
                <S.SecondaryButton>
                  <p>읽는 중 표시</p>
                </S.SecondaryButton>
                <S.PrimaryButton>
                  <p>바로 시 쓰기</p>
                </S.PrimaryButton>
              </S.DetailBookActions>
            </S.DetailBookInfoInner>
          </S.DetailBookInfoRow>
        </S.DetailBookCardInner>
      </S.DetailBookCard>
    );
  }

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <S.SearchBookCard onClick={onClick}>
      <S.BookImage src={thumbnail} alt={title} onError={handleImageError} />
      <S.BookInfo>
        <S.BookTitle>{title}</S.BookTitle>
        {subtitle && <S.BookSubtitle>{subtitle}</S.BookSubtitle>}
        <S.BookMeta>
          <S.MetaText>
            {authors.join(", ")}
            {translators.length > 0 && ` · ${translators.join(", ")}`}
          </S.MetaText>
          <S.MetaText>
            {publisher} · {publishDate}
          </S.MetaText>
          <S.MetaText>{price}</S.MetaText>
        </S.BookMeta>
        <S.RatingSection>
          <S.TrophyIcon
            src="/trophy/trophy_filled.svg"
            alt="트로피"
            width={20}
            height={20}
          />
          <S.RatingText>{rating.toFixed(1)} / 5</S.RatingText>
          <S.ReviewCount>({reviewCount})</S.ReviewCount>
        </S.RatingSection>
      </S.BookInfo>
      <S.BookActions onClick={handleButtonClick}>
        <OutlineButton type="button">읽는 중 표시</OutlineButton>
        <Button type="button">바로 시 쓰기</Button>
      </S.BookActions>
    </S.SearchBookCard>
  );
}
