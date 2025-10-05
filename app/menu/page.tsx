"use client";

import { useState } from "react";
import * as S from "./style";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";

const scrollImg = "/3d/scroll.svg";
const castleImg = "/3d/castle.svg";

const menuData = [
  {
    id: 1,
    title: "서재",
    image: scrollImg,
    description:
      "이야기를 검색하고 해당 이야기에 대해서 시를 쓸 수 있습니다.<br />서재에서 이야기를 검색해 시를 쓰는 것은 당신의 페이지를 채우는 첫걸음입니다.<br />모든 기록은 차곡차곡 쌓여 당신만의 고유한 독서 연대기가 될 것입니다.",
    link: "/library",
  },
  {
    id: 2,
    title: "마이 페이지",
    image: castleImg,
    description:
      "자신의 여정을 돌아볼 수 있습니다.<br />완독한 이야기와 읽고 있는 이야기 별로 확인이 가능하며,<br/>각각의 이야기에 대해 수정 삭제 또한 가능합니다.",
    link: "/home",
  },
  {
    id: 3,
    title: "탐색",
    image: scrollImg,
    description: "탐색 페이지 설명입니다.",
    link: "/explore",
  },
  {
    id: 4,
    title: "프로필",
    image: scrollImg,
    description: "프로필 페이지 설명입니다.",
    link: "/profile",
  },
];

export default function MenuPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animationKey, setAnimationKey] = useState(0);

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? menuData.length - 1 : prev - 1));
    setAnimationKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === menuData.length - 1 ? 0 : prev + 1));
    setAnimationKey((prev) => prev + 1);
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
              <Button type="button">입장하기</Button>
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
