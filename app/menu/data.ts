const scrollImg = "/3d/scroll.svg";
const castleImg = "/3d/castle.svg";
const logoutImg = "/3d/logout.svg";
const butterflyImg = "/3d/butterfly.svg";

export const menuData = [
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
    image: butterflyImg,
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
      "로그아웃하고 처음 화면으로 돌아갑니다.<br />모험은 많은 피로를 동원하죠.<br />다음에 다시 만나요, 탐험가님!",
    link: "/logout",
  },
];
