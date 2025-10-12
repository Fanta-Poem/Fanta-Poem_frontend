"use client";

import { useState, useEffect } from "react";
import * as S from "./style";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";

const scrollImg = "/3d/scroll.svg";
const castleImg = "/3d/castle.svg";
const logoutImg = "/3d/logout.svg";

const menuData = [
  {
    id: 1,
    title: "서재",
    slug: "library",
    image: scrollImg,
    description:
      "이야기를 검색하고 해당 이야기에 대해서 시를 쓸 수 있습니다.<br />서재에서 이야기를 검색해 시를 쓰는 것은 당신의 페이지를 채우는 첫걸음입니다.<br />모든 기록은 차곡차곡 쌓여 당신만의 고유한 독서 연대기가 될 것입니다.",
    link: "/search",
  },
  {
    id: 2,
    title: "마이 페이지",
    slug: "mypage",
    image: castleImg,
    description:
      "자신의 여정을 돌아볼 수 있습니다.<br />완독한 이야기와 읽고 있는 이야기 별로 확인이 가능하며,<br/>각각의 이야기에 대해 수정 삭제 또한 가능합니다.",
    link: "/mypage",
  },
  {
    id: 3,
    title: "탐색",
    slug: "explore",
    image: scrollImg,
    description:
      "다른 탐험가들의 시를 감상할 수 있습니다.<br />공유 중인 시들을 둘러보고 다양한 감상을 만나보세요.<br />같은 이야기에 대한 서로 다른 해석이 기다리고 있습니다.",
    link: "/explore",
  },
  {
    id: 4,
    title: "로그아웃",
    slug: "logout",
    image: logoutImg,
    description:
      "로그아웃하고 처음 화면으로 돌아갑니다.<br />다음에 다시 만나요, 탐험가님!",
    link: "/logout",
  },
];

export default function MenuPage() {
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
