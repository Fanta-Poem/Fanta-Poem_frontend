"use client";

import { useState, useEffect } from "react";
import { format, parse, isValid as isValidDate } from "date-fns";
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
  const [startDateInput, setStartDateInput] = useState("");
  const [endDateInput, setEndDateInput] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStartDateInput("");
      setEndDateInput("");
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
    // (예: 2월 31일 입력 시 3월 3일로 변환되므로 이를 감지)
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

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInputValue(e.target.value);
    setEndDateInput(formatted);
  };

  const handleSubmit = () => {
    const startISO = parseToISODate(startDateInput);
    const endISO = parseToISODate(endDateInput);

    if (startISO && endISO && startISO <= endISO) {
      onSubmit(startISO, endISO);
      onClose();
    }
  };

  const handleClose = () => {
    setStartDateInput("");
    setEndDateInput("");
    onClose();
  };

  const startISO = parseToISODate(startDateInput);
  const endISO = parseToISODate(endDateInput);
  const isValid = startISO && endISO && startISO <= endISO;

  const calculateDaysDifference = (start: string, end: string): number => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

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
              type="text"
              value={startDateInput}
              onChange={handleStartDateChange}
              placeholder="년.월.일 (예: 2025.10.12)"
              maxLength={10}
            />
          </S.DateInputGroup>

          <S.DateInputGroup>
            <S.DateLabel>다 읽은 날</S.DateLabel>
            <S.DateInput
              type="text"
              value={endDateInput}
              onChange={handleEndDateChange}
              placeholder="년.월.일 (예: 2025.10.12)"
              maxLength={10}
            />
          </S.DateInputGroup>

          {isValid && startISO && endISO && (
            <S.ReadingPeriodInfo>
              <S.DateRangeText>
                {startDateInput} ~ {endDateInput}
              </S.DateRangeText>
              <S.DurationText>
                총 {calculateDaysDifference(startISO, endISO)}일 동안의
                여정이였군요!
              </S.DurationText>
            </S.ReadingPeriodInfo>
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
