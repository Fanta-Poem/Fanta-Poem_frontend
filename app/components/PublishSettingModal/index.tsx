"use client";

import { useState } from "react";
import * as S from "./style";

interface PublishSettingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (isPublic: boolean) => void;
  onBack: () => void;
}

export default function PublishSettingModal({
  isOpen,
  onClose,
  onSubmit,
  onBack,
}: PublishSettingModalProps) {
  const [selectedOption, setSelectedOption] = useState<
    "public" | "private" | null
  >(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onSubmit(selectedOption === "public");
      onClose();
    }
  };

  const handleClose = () => {
    setSelectedOption(null);
    onClose();
  };

  const handleBack = () => {
    setSelectedOption(null);
    onBack();
  };

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.Header>
          <S.IconContainer>
            <S.KeyIcon src="/3d/key.svg" alt="공개 설정" />
          </S.IconContainer>
          <S.TitleSection>
            <S.Title>당신의 시를 공유하시겠습니까?</S.Title>
            <S.Subtitle>
              다른 탐험가와 감상을 나누거나 개인적으로 간직하세요
            </S.Subtitle>
          </S.TitleSection>
        </S.Header>

        <S.OptionsContainer>
          <S.OptionCard
            selected={selectedOption === "public"}
            onClick={() => setSelectedOption("public")}
          >
            <S.OptionHeader>
              <S.OptionIconContainer selected={selectedOption === "public"}>
                <S.OptionIcon src="/3d/crystal_ball.svg" alt="공유서재" />
              </S.OptionIconContainer>
              <S.OptionTextSection>
                <S.OptionTitle>공유서재</S.OptionTitle>
                <S.OptionSubtitle>
                  다른 독자들과 감상을 공유합니다
                </S.OptionSubtitle>
              </S.OptionTextSection>
            </S.OptionHeader>
            <S.BenefitsList>
              <S.BenefitItem selected={selectedOption === "public"}>
                <S.Dot selected={selectedOption === "public"} />
                <S.BenefitText>비슷한 취향의 독자들과 소통</S.BenefitText>
              </S.BenefitItem>
              <S.BenefitItem selected={selectedOption === "public"}>
                <S.Dot selected={selectedOption === "public"} />
                <S.BenefitText>
                  당신의 시적 감상이 다른 이에게 영감을
                </S.BenefitText>
              </S.BenefitItem>
              <S.BenefitItem selected={selectedOption === "public"}>
                <S.Dot selected={selectedOption === "public"} />
                <S.BenefitText>작품에 대한 다양한 관점 발견</S.BenefitText>
              </S.BenefitItem>
            </S.BenefitsList>
          </S.OptionCard>

          <S.OptionCard
            selected={selectedOption === "private"}
            onClick={() => setSelectedOption("private")}
          >
            <S.OptionHeader>
              <S.OptionIconContainer selected={selectedOption === "private"}>
                <S.OptionIcon src="/3d/shield.svg" alt="비밀서재" />
              </S.OptionIconContainer>
              <S.OptionTextSection>
                <S.OptionTitle>비밀서재</S.OptionTitle>
                <S.OptionSubtitle>
                  오직 나만을 위한 개인적인 기록
                </S.OptionSubtitle>
              </S.OptionTextSection>
            </S.OptionHeader>
            <S.BenefitsList>
              <S.BenefitItem selected={selectedOption === "private"}>
                <S.Dot selected={selectedOption === "private"} />
                <S.BenefitText>나만의 문학적 여정 기록</S.BenefitText>
              </S.BenefitItem>
              <S.BenefitItem selected={selectedOption === "private"}>
                <S.Dot selected={selectedOption === "private"} />
                <S.BenefitText>솔직하고 진솔한 감상 작성 가능</S.BenefitText>
              </S.BenefitItem>
              <S.BenefitItem selected={selectedOption === "private"}>
                <S.Dot selected={selectedOption === "private"} />
                <S.BenefitText>언제든지 공개 설정으로 변경 가능</S.BenefitText>
              </S.BenefitItem>
            </S.BenefitsList>
          </S.OptionCard>
        </S.OptionsContainer>

        <S.ActionButtons>
          <S.PrimaryButton
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            작성완료
          </S.PrimaryButton>
          <S.SecondaryButton onClick={handleBack}>뒤로가기</S.SecondaryButton>
        </S.ActionButtons>
      </S.ModalContainer>
    </S.Overlay>
  );
}
