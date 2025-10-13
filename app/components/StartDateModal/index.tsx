"use client";

import { useState, useEffect } from "react";
import { isValid as isValidDate } from "date-fns";
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
  const [startDateInput, setStartDateInput] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStartDateInput("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatInputValue = (value: string): string => {
    // 숫자만 추출
    const numbers = value.replace(/[^\d]/g, "");

    if (numbers.length <= 4) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `${numbers.slice(0, 4)}.${numbers.slice(4)}`;
    } else {
      return `${numbers.slice(0, 4)}.${numbers.slice(4, 6)}.${numbers.slice(
        6,
        8
      )}`;
    }
  };

  const parseToISODate = (dateStr: string): string | null => {
    // yyyy.MM.dd 형식을 yyyy-MM-dd로 변환
    const cleanDate = dateStr.replace(/\./g, "");
    if (cleanDate.length !== 8) return null;

    const year = parseInt(cleanDate.slice(0, 4), 10);
    const month = parseInt(cleanDate.slice(4, 6), 10);
    const day = parseInt(cleanDate.slice(6, 8), 10);

    // 기본 범위 검사
    if (year < 1900 || year > 2100) return null;
    if (month < 1 || month > 12) return null;
    if (day < 1 || day > 31) return null;

    // Date 객체로 실제 날짜 유효성 검사
    const parsedDate = new Date(year, month - 1, day);

    // Date 객체가 입력값과 실제로 일치하는지 확인
    if (
      parsedDate.getFullYear() !== year ||
      parsedDate.getMonth() !== month - 1 ||
      parsedDate.getDate() !== day
    ) {
      return null;
    }

    if (!isValidDate(parsedDate)) {
      return null;
    }

    const isoDate = `${year}-${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return isoDate;
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInputValue(e.target.value);
    setStartDateInput(formatted);
  };

  const handleSubmit = () => {
    const startISO = parseToISODate(startDateInput);

    if (startISO) {
      onSubmit(startISO);
      onClose();
    }
  };

  const handleClose = () => {
    setStartDateInput("");
    onClose();
  };

  const startISO = parseToISODate(startDateInput);
  const isValid = !!startISO;

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.Header>
          <S.IconContainer>
            <S.CalendarIcon src="/3d/moon.svg" alt="달" />
          </S.IconContainer>
          <S.TitleSection>
            <S.Title>독서 시작 날짜</S.Title>
            <S.Subtitle>책을 읽기 시작한 날짜를 입력해주세요</S.Subtitle>
          </S.TitleSection>
        </S.Header>

        <S.DateSection>
          <S.DateInputGroup>
            <S.DateLabel>시작 날짜</S.DateLabel>
            <S.DateInput
              type="text"
              value={startDateInput}
              onChange={handleStartDateChange}
              placeholder="년.월.일 (예: 2025.10.12)"
              maxLength={10}
            />
          </S.DateInputGroup>

          {isValid && (
            <S.DateInfo>
              <S.DateText>{startDateInput}</S.DateText>
              <S.InfoText>새로운 독서 여정을 시작합니다!</S.InfoText>
            </S.DateInfo>
          )}
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
