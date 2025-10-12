"use client";

import * as S from "./style";

interface ReadingBookActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewDetail: () => void;
  onWritePoem: () => void;
  bookTitle: string;
}

export default function ReadingBookActionModal({
  isOpen,
  onClose,
  onViewDetail,
  onWritePoem,
  bookTitle,
}: ReadingBookActionModalProps) {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalTitle>{bookTitle}</S.ModalTitle>
        <S.ModalDescription>
          어떤 작업을 하시겠습니까?
        </S.ModalDescription>

        <S.ButtonGroup>
          <S.PrimaryButton onClick={onViewDetail}>
            책 디테일 페이지 가기
          </S.PrimaryButton>
          <S.SecondaryButton onClick={onWritePoem}>
            감상문 남기기
          </S.SecondaryButton>
        </S.ButtonGroup>

        <S.CancelButton onClick={onClose}>취소</S.CancelButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
