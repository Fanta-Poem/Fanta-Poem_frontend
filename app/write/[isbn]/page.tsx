"use client";

import { useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
import TrophyModal from "@/app/components/TrophyModal";
import PublishSettingModal from "@/app/components/PublishSettingModal";
import * as S from "./style";

interface Book {
  isbn: string;
  title: string;
  contents: string;
  url: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  datetime: string;
}

const fetchBookByISBN = async (isbn: string): Promise<Book> => {
  const response = await fetch(`/api/books/${isbn}`);

  if (!response.ok) {
    throw new Error("Failed to fetch book");
  }

  return response.json();
};

export default function WritePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isbn = params.isbn as string;
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const [review, setReview] = useState("");
  const [poemTitle, setPoemTitle] = useState("");
  const [poemContent, setPoemContent] = useState("");
  const [isTrophyModalOpen, setIsTrophyModalOpen] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [publishSettings, setPublishSettings] = useState<{
    trophyRating: number;
    isPublic: boolean;
  }>({
    trophyRating: 0,
    isPublic: false,
  });

  const { data: book, isLoading } = useQuery({
    queryKey: ["book", isbn],
    queryFn: () => fetchBookByISBN(isbn),
    enabled: !!isbn,
  });

  const handlePoemChange = (text: string) => {
    const firstLineBreak = text.indexOf("\n");

    let title = "";
    let content = "";

    if (firstLineBreak === -1) {
      title = text;
      content = "";
    } else {
      title = text.substring(0, firstLineBreak);
      content = text.substring(firstLineBreak + 1);
    }

    // console.log("Title:", title);
    // console.log("Content:", content);

    setPoemTitle(title);
    setPoemContent(content);
  };

  const isPoemValid = poemTitle.trim() !== "" && poemContent.trim() !== "";

  const handleSubmit = () => {
    if (isPoemValid) {
      setIsTrophyModalOpen(true);
    }
  };

  const handleTrophySubmit = (rating: number) => {
    setPublishSettings((prev) => ({ ...prev, trophyRating: rating }));
    setIsTrophyModalOpen(false);
    setIsPublishModalOpen(true);
  };

  const handlePublishSubmit = async (isPublic: boolean) => {
    const finalSettings = {
      ...publishSettings,
      isPublic,
    };
    setPublishSettings(finalSettings);

    // 날짜 정보가 없으면 저장하지 않음
    if (!startDate || !endDate) {
      // alert("독서 날짜 정보가 없습니다.");
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch("/api/poems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isbn,
          startDate,
          endDate,
          review: review.trim() || null,
          poemTitle: poemTitle.trim(),
          poemContent: poemContent.trim(),
          rating: finalSettings.trophyRating,
          isPublic: finalSettings.isPublic,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "시 저장에 실패했습니다");
      }

      // 성공 시 마이페이지나 책 상세 페이지로 이동
      // alert(data.message || "시가 성공적으로 저장되었습니다!");
      router.push(`/book/${isbn}`);
    } catch (error) {
      // console.error("시 저장 오류:", error);
      // alert(
      //   error instanceof Error ? error.message : "시 저장 중 오류가 발생했습니다"
      // );
    } finally {
      setIsSaving(false);
      setIsPublishModalOpen(false);
    }
  };

  if (isLoading) {
    return (
      <S.WriteContainer>
        <S.WriteInner>
          <BackButton />
          <S.LoadingMessage>로딩 중...</S.LoadingMessage>
        </S.WriteInner>
      </S.WriteContainer>
    );
  }

  if (!book) {
    return (
      <S.WriteContainer>
        <S.WriteInner>
          <BackButton />
          <S.ErrorMessage>책 정보를 불러올 수 없습니다.</S.ErrorMessage>
        </S.WriteInner>
      </S.WriteContainer>
    );
  }

  return (
    <S.WriteContainer>
      <S.WriteInner>
        <BackButton />

        <S.ContentWrapper>
          <S.LeftSection>
            <S.BookInfoCard>
              <S.BookCover
                src={book.thumbnail || "/book-sample.svg"}
                alt={book.title}
                onError={(e) => {
                  e.currentTarget.src = "/book-sample.svg";
                }}
              />
              <S.BookDetails>
                <S.BookTitle>{book.title}</S.BookTitle>
                <S.BookMeta>{book.authors.join(", ")} 저자(글)</S.BookMeta>
                <S.BookMeta>
                  {book.publisher} ·{" "}
                  {new Date(book.datetime).toLocaleDateString("ko-KR")}
                </S.BookMeta>
                <S.ReadingPeriod>
                  읽은 날짜
                  <br />
                  {startDate && endDate
                    ? `${new Date(startDate).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })} ~ ${new Date(endDate).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}`
                    : "날짜 정보 없음"}
                </S.ReadingPeriod>
              </S.BookDetails>
            </S.BookInfoCard>

            <S.SectionTitle>감상문</S.SectionTitle>
            <S.ReviewTextarea
              placeholder="인상 깊었던 장면과 책에 대한 감상문을 자유롭게 작성하세요"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </S.LeftSection>

          <S.RightSection>
            <S.SectionTitle>
              판타시<S.RequiredMark>*</S.RequiredMark>
            </S.SectionTitle>
            <S.PoemContainer>
              <S.PoemEditor
                contentEditable
                suppressContentEditableWarning
                onInput={(e: React.FormEvent<HTMLDivElement>) =>
                  handlePoemChange(e.currentTarget.innerText || "")
                }
                data-placeholder={
                  poemTitle || poemContent
                    ? ""
                    : "제목을 입력해주세요\n\n여기에 이렇게 글을\n작성해주세요\n\n여기에\n이렇게 글을\n작성해주세요\n\n여기에\n이렇게 글을\n작성해주세요"
                }
              />
            </S.PoemContainer>
            <S.ButtonWrapper>
              <Button
                onClick={handleSubmit}
                disabled={!isPoemValid || isSaving}
              >
                {isSaving ? "저장 중..." : "작성완료"}
              </Button>
            </S.ButtonWrapper>
          </S.RightSection>
        </S.ContentWrapper>
      </S.WriteInner>

      <TrophyModal
        isOpen={isTrophyModalOpen}
        onClose={() => setIsTrophyModalOpen(false)}
        onSubmit={handleTrophySubmit}
        initialRating={publishSettings.trophyRating}
        onCancel={() => {
          setPublishSettings({
            trophyRating: 0,
            isPublic: false,
          });
        }}
      />

      <PublishSettingModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        onSubmit={handlePublishSubmit}
        onBack={() => {
          setIsPublishModalOpen(false);
          setIsTrophyModalOpen(true);
        }}
      />
    </S.WriteContainer>
  );
}
