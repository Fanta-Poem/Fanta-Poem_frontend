"use client";

import { useState, useEffect } from "react";
import * as S from "./style";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";
import { menuData } from "./data";

export default function MenuContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animationKey, setAnimationKey] = useState(0);

  // URL에서 탭 읽어오기 및 초기 URL 설정
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      const index = menuData.findIndex((menu) => menu.slug === tab);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    } else {
      // tab 파라미터가 없으면 기본값(library)으로 URL 업데이트
      router.replace("/menu?tab=library", { scroll: false });
    }
  }, [searchParams, router]);

  const handlePrev = () => {
    setDirection("left");
    const newIndex =
      currentIndex === 0 ? menuData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setAnimationKey((prev) => prev + 1);
    // URL 업데이트
    router.replace(`/menu?tab=${menuData[newIndex].slug}`, { scroll: false });
  };

  const handleNext = () => {
    setDirection("right");
    const newIndex =
      currentIndex === menuData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setAnimationKey((prev) => prev + 1);
    // URL 업데이트
    router.replace(`/menu?tab=${menuData[newIndex].slug}`, { scroll: false });
  };

  const handleEnter = async () => {
    // 로그아웃 메뉴인 경우
    if (currentMenu.slug === "logout") {
      await signOut({ callbackUrl: "/" });
    } else {
      router.push(currentMenu.link);
    }
  };

  const currentMenu = menuData[currentIndex];

  return (
    <S.MenuContainer>
      <S.MenuInner>
        <S.DotsIndicator>
          {menuData.map((_, index) => (
            <S.Dot key={index} active={index === currentIndex} />
          ))}
        </S.DotsIndicator>

        <S.ContentWrapper>
          <S.ArrowButton onClick={handlePrev} direction="left">
            <ChevronLeft size={36} color="white" />
          </S.ArrowButton>

          <S.ContentArea key={animationKey} direction={direction}>
            <S.TitleArea>
              <S.MenuTitle>{currentMenu.title}</S.MenuTitle>
            </S.TitleArea>

            <S.ImageArea>
              <S.MenuImage
                key={animationKey}
                src={currentMenu.image}
                alt={currentMenu.title}
                direction={direction}
              />
            </S.ImageArea>

            <S.DescriptionArea>
              <S.Description
                dangerouslySetInnerHTML={{ __html: currentMenu.description }}
              />
            </S.DescriptionArea>

            <S.ButtonArea>
              <Button type="button" onClick={handleEnter}>
                입장하기
              </Button>
            </S.ButtonArea>
          </S.ContentArea>

          <S.ArrowButton onClick={handleNext} direction="right">
            <ChevronRight size={36} color="white" />
          </S.ArrowButton>
        </S.ContentWrapper>
      </S.MenuInner>
    </S.MenuContainer>
  );
}
