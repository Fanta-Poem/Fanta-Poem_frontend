"use client";

import * as S from "./style";

const scrollImg = "/3d/scroll.svg";
const treasure_box = "/3d/treasure_box.svg";
const book = "/3d/book.svg";
const unicorn = "/3d/unicorn.svg";
const trophy = "/3d/trophy.svg";
const keyImg = "/3d/key.svg";

export default function LandingPage() {
  return (
    <S.LandingContainer>
      <S.HeroSection>
        <S.HeroContent>
          <S.HeaderSection>
            <S.LogoTitleArea>
              <S.LogoContainer>
                <S.LogoImage src={scrollImg} alt="판타시 로고" />
              </S.LogoContainer>
              <S.TitleArea>
                <S.MainTitle>판타시</S.MainTitle>
              </S.TitleArea>
            </S.LogoTitleArea>
            <S.SubTitle>
              책을 읽고, 마음을 시로 담아내는
              <br />
              당신만의 판타지 서재
            </S.SubTitle>
          </S.HeaderSection>
          <S.CTAButtonsContainer>
            <S.PrimaryCTA>
              <p>시작하기</p>
            </S.PrimaryCTA>
            <S.SecondaryCTA>
              <p>깃허브 보기</p>
            </S.SecondaryCTA>
          </S.CTAButtonsContainer>
        </S.HeroContent>

        {/* Floating Elements */}
        <S.FloatingElement top="142px" left="390px" rotate="357.343deg">
          <S.FloatingImage src={book} alt="떠다니는 요소 book" />
        </S.FloatingElement>
        <S.FloatingElement top="570px" left="155px" rotate="" scale="1, -1">
          <S.FloatingImage src={treasure_box} alt="떠다니는 요소 box" />
        </S.FloatingElement>
        <S.FloatingElement top="500px" left="1200px" rotate="9.285deg">
          <S.FloatingImage src={unicorn} alt="떠다니는 요소 unicorn" />
        </S.FloatingElement>
      </S.HeroSection>

      <S.FeaturesSection>
        <S.SectionHeader>
          <S.SectionTitle>
            <span className="highlight">판타시</span>만의 특별한 경험
          </S.SectionTitle>
          <S.SectionSubtitle>
            책과 시가 만나 새로운 감상의 세계가 만들어집니다
          </S.SectionSubtitle>
        </S.SectionHeader>

        <S.FeatureCardsContainer>
          <S.FeatureRow>
            <S.VideoContainer>{/* 동영상이 들어갈 예정 */}</S.VideoContainer>
            <S.FeatureCard>
              <S.IconContainer>
                <S.IconImage src={scrollImg} alt="시적 감상문 아이콘" />
              </S.IconContainer>
              <S.CardContent>
                <S.CardTitle>시적 감상문</S.CardTitle>
                <S.CardDescription>
                  단순한 리뷰가 아닌, 책을 읽고 느낀 감정을 시로 표현하여 더
                  깊이 있는 감상을 남겨보세요.
                </S.CardDescription>
              </S.CardContent>
              <S.TagsContainer>
                <S.Tag>
                  <p># 읽기</p>
                </S.Tag>
                <S.Tag variant="secondary">
                  <p># 작성하기</p>
                </S.Tag>
                <S.Tag>
                  <p># 짧은 시</p>
                </S.Tag>
              </S.TagsContainer>
            </S.FeatureCard>
          </S.FeatureRow>

          <S.FeatureRow>
            <S.FeatureCard>
              <S.IconContainer>
                <S.IconImage src={trophy} alt="트로피 평가 아이콘" />
              </S.IconContainer>
              <S.CardContent>
                <S.CardTitle>트로피(별점) 평가</S.CardTitle>
                <S.CardDescription>
                  시와 함께 트로피를 매겨 당신의 감상을 완성해보세요. 감정과
                  평가가 어우러진 완벽한 리뷰가 됩니다.
                </S.CardDescription>
              </S.CardContent>
              <S.TagsContainer>
                <S.Tag>
                  <p># 트로피</p>
                </S.Tag>
                <S.Tag variant="secondary">
                  <p># 명작인증</p>
                </S.Tag>
              </S.TagsContainer>
            </S.FeatureCard>
            <S.VideoContainer>{/* 동영상이 들어갈 예정 */}</S.VideoContainer>
          </S.FeatureRow>

          <S.FeatureRow>
            <S.VideoContainer>{/* 동영상이 들어갈 예정 */}</S.VideoContainer>
            <S.FeatureCard>
              <S.IconContainer>
                <S.IconImage src={keyImg} alt="공유 소장 아이콘" />
              </S.IconContainer>
              <S.CardContent>
                <S.CardTitle>공유 & 소장</S.CardTitle>
                <S.CardDescription>
                  작성한 감상문을 다른 사람과 공유하거나 나만의 비밀 서재에
                  간직할 수 있습니다.
                </S.CardDescription>
              </S.CardContent>
              <S.TagsContainer>
                <S.Tag>
                  <p># 공유서재</p>
                </S.Tag>
                <S.Tag variant="secondary">
                  <p># 비밀서재</p>
                </S.Tag>
              </S.TagsContainer>
            </S.FeatureCard>
          </S.FeatureRow>
        </S.FeatureCardsContainer>
      </S.FeaturesSection>
    </S.LandingContainer>
  );
}
