"use client";

import { useState } from "react";
import * as S from "./style";

interface StartDateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (startDate: string) => void;
}

export default function StartDateModal({
  isOpen,
  onClose,
  onSubmit,
}: StartDateModalProps) {
  const [startDate, setStartDate] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (startDate) {
      onSubmit(startDate);
      setStartDate("");
      onClose();
    }
  };

  const handleClose = () => {
    setStartDate("");
    onClose();
  };

  return (
    <S.ModalOverlay onClick={handleClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalTitle>독서 시작 날짜</S.ModalTitle>
        <S.ModalDescription>
          책을 읽기 시작한 날짜를 선택해주세요
        </S.ModalDescription>

        <S.DateSection>
          <S.DateLabel>시작 날짜</S.DateLabel>
          <S.DateInput
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
          />
        </S.DateSection>

        <S.ButtonGroup>
          <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
          <S.SubmitButton onClick={handleSubmit} disabled={!startDate}>
            등록
          </S.SubmitButton>
        </S.ButtonGroup>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
