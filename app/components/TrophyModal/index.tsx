"use client";

import { useState } from "react";
import * as S from "./style";

interface TrophyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
}

const TROPHY_MESSAGES = [
  { text: "1개의 트로피", subtext: "시작이 반이에요!" },
  { text: "2개의 트로피", subtext: "괜찮은 작품이네요" },
  { text: "3개의 트로피", subtext: "꽤 좋은 작품입니다" },
  { text: "4개의 트로피", subtext: "오, 이거 레어템인데요?" },
  { text: "5개의 트로피", subtext: "전설의 작품입니다!" },
];

export default function TrophyModal({
  isOpen,
  onClose,
  onSubmit,
}: TrophyModalProps) {
  const [selectedRating, setSelectedRating] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (selectedRating > 0) {
      onSubmit(selectedRating);
      onClose();
    }
  };

  const message = selectedRating > 0 ? TROPHY_MESSAGES[selectedRating - 1] : null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.IconContainer>
            <S.TrophyMainIcon src="/trophy-main.png" alt="트로피" />
          </S.IconContainer>
          <S.TitleSection>
            <S.Title>이야기에 트로피를 선사하세요</S.Title>
            <S.Subtitle>이 작품, 몇 등급 아이템인가요?</S.Subtitle>
          </S.TitleSection>
        </S.Header>

        <S.RatingSection>
          <S.RatingTitle>트로피 등급</S.RatingTitle>
          <S.TrophyStars>
            {[1, 2, 3, 4, 5].map((rating) => (
              <S.TrophyIcon
                key={rating}
                src={
                  rating <= selectedRating
                    ? "/trophy-active.png"
                    : "/trophy-inactive.png"
                }
                alt={`트로피 ${rating}`}
                onClick={() => setSelectedRating(rating)}
                active={rating <= selectedRating}
              />
            ))}
          </S.TrophyStars>
          {message && (
            <S.RatingText>
              <S.RatingMainText>{message.text}</S.RatingMainText>
              <S.RatingSubText>{message.subtext}</S.RatingSubText>
            </S.RatingText>
          )}
        </S.RatingSection>

        <S.ActionButtons>
          <S.PrimaryButton onClick={handleSubmit} disabled={selectedRating === 0}>
            다음으로
          </S.PrimaryButton>
          <S.SecondaryButton onClick={onClose}>취소하기</S.SecondaryButton>
        </S.ActionButtons>
      </S.ModalContainer>
    </S.Overlay>
  );
}
