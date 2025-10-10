"use client";

import BackButton from "@/app/components/BackButton";
import * as S from "./style";
import { Heart } from "lucide-react";

export default function PoemDetailPage({
  params,
}: {
  params: { userid: string; isbn: string };
}) {
  // Mock data - replace with actual API calls
  const bookData = {
    coverImage: "/book-sample.svg",
    title: "[국내도서] 체인소 맨 5",
    author: "Tatsuki Fujimoto",
    authorRole: "저자(글)",
    series: "(학산 코믹스 HC 9241)",
    publisher: "학산문화사",
    publishDate: "2025년 03월 25일",
    readStartDate: "2024년 12월 09일",
    readEndDate: "2025년 12월 09일",
    trophies: 4,
    status: "공개서재",
    likes: 12,
    review: `만약 도시가 살아있고, 모래 바람을 통해 당신에게 속삭인다면 어떨 것 같나요? 엘리아나 로웬의 소설 <속삭이는 모래의 도시>는 바로 그 신비로운 질문에서 시작합니다. 이 책은 사막의 심장부에서 해가 뜰 때 나타났다가 해가 지면 사라지는 전설의 도시, '카이람'에 대한 이야기입니다.

이 소설이 특별한 이유는 도시 '카이람' 그 자체가 주인공이라는 점입니다. 모든 것을 이성과 논리로만 설명하려던 젊은 지도 제작자 '핀'이 우연히 이 도시에 발을 들이게 되면서, 그의 세계는 송두리째 흔들립니다. 그는 돌과 모래로 이루어진 도시가 어떻게 기억을 품고, 바람을 통해 노래하는지를 이해하려 애씁니다. 책은 핀의 시선을 통해, 우리가 잃어버린 혹은 잊고 있던 고대의 마법과 교감하는 법을 아름답게 그려냅니다.

작가의 문장은 마치 사막의 바람처럼 건조하면서도 서정적이고, 햇살 아래 반짝이는 모래알처럼 아름답습니다. 화려한 전투나 숨 가쁜 사건 전개는 없지만, 모래 언덕을 넘듯 천천히, 그리고 묵직하게 마음에 쌓이는 감동이 있습니다. 단순한 판타지 소설을 넘어, '존재하지만 보이지 않는 것'에 대한 깊은 철학적 질문을 던지죠.

빠른 전개나 화려한 액션보다는, 한 편의 시처럼 아름다운 세계에 천천히 잠기고 싶은 독자에게 이 책을 추천합니다. 책을 덮고 나면, 창문 틈으로 불어오는 바람 소리에도 귀를 기울이게 될지 모릅니다.

카이람의 속삭임이 당신의 마음에도 닿기를.`,
    poem: {
      title: "고구마는 감자를 좋아해",
      author: "김메빈",
      stanzas: [
        ["고구마가 감자를 좋아하는", "이유가 뭔지 아나요"],
        ["두 작물 모두 구황작물이라는", "공통점이 있어요"],
        [
          "만약 내가 고구마였어도",
          "지금의 고구마처럼 한결같이",
          "감자를 좋아할겁니다",
        ],
      ],
    },
  };

  return (
    <S.PageContainer>
      <S.PageInner>
        <BackButton />

        <S.ContentWrapper>
          {/* Left Section - Book Details */}
          <S.LeftSection>
            <S.BookSection>
              <S.BookCover src={bookData.coverImage} alt={bookData.title} />

              <S.BookInfoWrapper>
                <S.BookMetaSection>
                  <S.BookTitle>{bookData.title}</S.BookTitle>
                  <S.AuthorInfo>
                    <S.AuthorName>{bookData.author}</S.AuthorName>
                    <S.AuthorRole>{bookData.authorRole}</S.AuthorRole>
                  </S.AuthorInfo>
                  <S.Series>{bookData.series}</S.Series>
                  <S.PublishInfo>
                    <S.Publisher>{bookData.publisher}</S.Publisher>
                    <S.Separator>•</S.Separator>
                    <S.PublishDate>{bookData.publishDate}</S.PublishDate>
                  </S.PublishInfo>
                </S.BookMetaSection>

                <S.ReadDateSection>
                  <S.SectionLabel>읽은 날짜</S.SectionLabel>
                  <S.DateWrapper>
                    <S.DateText>{bookData.readStartDate} ~</S.DateText>
                    <S.DateText>{bookData.readEndDate}</S.DateText>
                  </S.DateWrapper>
                </S.ReadDateSection>

                <S.BottomInfoWrapper>
                  <S.TrophySection>
                    <S.SectionLabel>내가 준 트로피</S.SectionLabel>
                    <S.TrophyWrapper>
                      {[1, 2, 3, 4, 5].map((index) => (
                        <S.TrophyIcon
                          key={index}
                          src={
                            index <= bookData.trophies
                              ? "/trophy/trophy_filled.svg"
                              : "/trophy/trophy_unfilled.svg"
                          }
                          alt="trophy"
                        />
                      ))}
                    </S.TrophyWrapper>
                  </S.TrophySection>

                  <S.StatusLikesWrapper>
                    <S.StatusSection>
                      <S.SectionLabel>상태</S.SectionLabel>
                      <S.StatusText>{bookData.status}</S.StatusText>
                    </S.StatusSection>

                    <S.LikesSection>
                      <S.SectionLabel>좋아요</S.SectionLabel>
                      <S.LikeButton>
                        <Heart size={18} color="#888888" />
                        <S.LikeCount>{bookData.likes}</S.LikeCount>
                      </S.LikeButton>
                    </S.LikesSection>
                  </S.StatusLikesWrapper>
                </S.BottomInfoWrapper>
              </S.BookInfoWrapper>
            </S.BookSection>

            <S.ReviewSection>
              <S.ReviewTitle>감상문</S.ReviewTitle>
              <S.ReviewContent>{bookData.review}</S.ReviewContent>
            </S.ReviewSection>
          </S.LeftSection>

          {/* Right Section - Poem */}
          <S.RightSection>
            <S.PoemSectionTitle>판타시</S.PoemSectionTitle>
            <S.PoemCard>
              <S.PoemContentWrapper>
                <S.PoemHeader>
                  <S.PoemTitle>{bookData.poem.title}</S.PoemTitle>
                </S.PoemHeader>
                <S.PoemAuthor>{bookData.poem.author}</S.PoemAuthor>
                <S.PoemTextWrapper>
                  {bookData.poem.stanzas.map((stanza, stanzaIndex) => (
                    <S.PoemStanza key={stanzaIndex}>
                      {stanza.map((line, lineIndex) => (
                        <S.PoemLine key={lineIndex}>{line}</S.PoemLine>
                      ))}
                    </S.PoemStanza>
                  ))}
                </S.PoemTextWrapper>
              </S.PoemContentWrapper>
            </S.PoemCard>
          </S.RightSection>
        </S.ContentWrapper>
      </S.PageInner>
    </S.PageContainer>
  );
}
