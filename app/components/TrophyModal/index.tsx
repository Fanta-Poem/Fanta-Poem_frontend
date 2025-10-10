"use client";

import { useState } from "react";
import * as S from "./style";

interface TrophyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
}

const TROPHY_MESSAGES = [
  { text: "1개의 트로피", subtext: "흠... 이건 회색 아이템", value: 1 },
  { text: "2개의 트로피", subtext: "상점에서 팔기엔 애매한 물건", value: 2 },
  { text: "3개의 트로피", subtext: "모험가 표준 장비 정도?", value: 3 },
  { text: "4개의 트로피", subtext: "오, 이거 레어템인데요?", value: 4 },
  { text: "5개의 트로피", subtext: "이건... 전설 등급 아이템입니다", value: 5 },
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
      setSelectedRating(0);
      onClose();
    }
  };

  const handleClose = () => {
    setSelectedRating(0);
    onClose();
  };

  const message =
    selectedRating > 0 ? TROPHY_MESSAGES[selectedRating - 1] : null;

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.Header>
          <S.IconContainer>
            <S.TrophyMainIcon src="/3d/trophy.svg" alt="트로피" />
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
                    ? "/3d/trophy.svg"
                    : "/3d/trophy_unfilled.svg"
                }
                alt={`트로피 ${rating}`}
                onClick={() => setSelectedRating(rating)}
                active={rating <= selectedRating}
              />
            ))}
          </S.TrophyStars>
          <S.RatingText>
            {message ? (
              <>
                <S.RatingMainText>{message.text}</S.RatingMainText>
                <S.RatingSubText>{message.subtext}</S.RatingSubText>
              </>
            ) : (
              <>
                <S.RatingMainText>그래서, 이 책은.</S.RatingMainText>
                <S.RatingSubText>당신의 판결을 보여주세요.</S.RatingSubText>
              </>
            )}
          </S.RatingText>
        </S.RatingSection>

        <S.ActionButtons>
          <S.PrimaryButton
            onClick={handleSubmit}
            disabled={selectedRating === 0}
          >
            다음으로
          </S.PrimaryButton>
          <S.SecondaryButton onClick={handleClose}>취소하기</S.SecondaryButton>
        </S.ActionButtons>
      </S.ModalContainer>
    </S.Overlay>
  );
}
