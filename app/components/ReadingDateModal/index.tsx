"use client";

import { useState, useEffect } from "react";
import * as S from "./style";

interface ReadingDateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (startDate: string, endDate: string) => void;
}

export default function ReadingDateModal({
  isOpen,
  onClose,
  onSubmit,
}: ReadingDateModalProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStartDate("");
      setEndDate("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (startDate && endDate) {
      onSubmit(startDate, endDate);
      onClose();
    }
  };

  const handleClose = () => {
    setStartDate("");
    setEndDate("");
    onClose();
  };

  const isValid = startDate && endDate && startDate <= endDate;

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.Header>
          <S.IconContainer>
            <S.CalendarIcon src="/3d/moon.svg" alt="달" />
          </S.IconContainer>
          <S.TitleSection>
            <S.Title>독서 기간을 입력해주세요</S.Title>
            <S.Subtitle>책을 읽은 날짜를 기록하세요</S.Subtitle>
          </S.TitleSection>
        </S.Header>

        <S.DateSection>
          <S.DateInputGroup>
            <S.DateLabel>읽기 시작한 날</S.DateLabel>
            <S.DateInput
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
            />
          </S.DateInputGroup>

          <S.DateInputGroup>
            <S.DateLabel>다 읽은 날</S.DateLabel>
            <S.DateInput
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate || undefined}
              max={new Date().toISOString().split("T")[0]}
            />
          </S.DateInputGroup>
        </S.DateSection>

        <S.ActionButtons>
          <S.PrimaryButton onClick={handleSubmit} disabled={!isValid}>
            다음으로
          </S.PrimaryButton>
          <S.SecondaryButton onClick={handleClose}>취소하기</S.SecondaryButton>
        </S.ActionButtons>
      </S.ModalContainer>
    </S.Overlay>
  );
}
