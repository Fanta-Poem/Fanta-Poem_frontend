import styled from "@emotion/styled";

interface UserRatingProps {
  rating: number; // 1~5 사이의 값 (0.5 단위 가능)
}

const FULL_ICON = "/trophy/trophy_filled.svg";
const HALF_ICON = "/trophy/trophy_filled.svg";
const EMPTY_ICON = "/trophy/trophy_unfilled.svg";

export default function UserRating({ rating }: UserRatingProps) {
  const getRatingIcons = () => {
    const icons = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // 채워진 트로피
    for (let i = 0; i < fullStars; i++) {
      icons.push({ key: `full-${i}`, src: FULL_ICON });
    }

    // 반 트로피
    if (hasHalfStar) {
      icons.push({ key: "half", src: HALF_ICON });
    }

    // 빈 트로피
    for (let i = 0; i < emptyStars; i++) {
      icons.push({ key: `empty-${i}`, src: EMPTY_ICON });
    }

    return icons;
  };

  return (
    <RatingContainer>
      {getRatingIcons().map((icon) => (
        <RatingIcon key={icon.key}>
          <img src={icon.src} alt="rating" />
        </RatingIcon>
      ))}
    </RatingContainer>
  );
}

const RatingContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

const RatingIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
