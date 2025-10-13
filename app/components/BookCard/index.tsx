"use client";

import { useQuery } from "@tanstack/react-query";
import * as S from "./style";
import Button from "@/app/components/Button";
import OutlineButton from "@/app/components/OutlineButton";

// ISBN으로 평균 평점 가져오기
const fetchAverageRating = async (
  isbn: string
): Promise<{ averageRating: number; reviewCount: number }> => {
  try {
    const cleanIsbn = isbn.split(" ")[0].split("%")[0].trim();
    const response = await fetch(`/api/books/${cleanIsbn}/rating`);
    if (!response.ok) {
      return { averageRating: 0, reviewCount: 0 };
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Failed to fetch rating:", error);
    return { averageRating: 0, reviewCount: 0 };
  }
};

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
  isbn?: string;
  onWriteClick?: () => void;
  onReadingClick?: () => void;
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
  rating: ratingProp = 0,
  reviewCount: reviewCountProp = 0,
  variant = "search",
  onClick,
  isbn,
  onWriteClick,
  onReadingClick,
}: BookCardProps) {
  // ISBN으로 평균 평점 가져오기
  const { data: ratingData } = useQuery({
    queryKey: ["bookRating", isbn],
    queryFn: () => fetchAverageRating(isbn!),
    enabled: !!isbn && hasValidISBN(isbn),
    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
  });

  // prop으로 전달된 값이 있으면 그것을 우선, 없으면 fetch한 값 사용
  const rating = ratingProp > 0 ? ratingProp : ratingData?.averageRating || 0;
  const reviewCount =
    reviewCountProp > 0 ? reviewCountProp : ratingData?.reviewCount || 0;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/book-sample.svg";
  };

  // ISBN 유효성 검사
  function hasValidISBN(isbnValue?: string) {
    if (!isbnValue || !isbnValue.trim()) return false;
    const firstISBN = isbnValue.split(" ")[0].trim();
    return firstISBN.length >= 10;
  }

  const isISBNValid = hasValidISBN(isbn);

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
        {isISBNValid ? (
          <>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <OutlineButton type="button" onClick={onReadingClick}>
                읽는 중 표시
              </OutlineButton>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Button type="button" onClick={onWriteClick}>
                바로 시 쓰기
              </Button>
            </div>
          </>
        ) : (
          <S.UnsupportedMessage>
            현재는 지원하지 않는 책입니다.
          </S.UnsupportedMessage>
        )}
      </S.BookActions>
    </S.SearchBookCard>
  );
}
