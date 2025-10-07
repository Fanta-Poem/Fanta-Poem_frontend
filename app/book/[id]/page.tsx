"use client";

import BackButton from "@/app/components/BackButton";
import * as S from "./style";

export default function BookDetailPage() {
  return (
    <S.BookDetailContainer>
      <S.BookDetailInner>
        <BackButton />

        <S.BookDetailSection>
          <S.BookCard>
            <S.BookCardInner>
              <S.BookCoverImage
                src="/assets/70ad43afb2cce230d7aab61201010217663a250d.png"
                alt="book cover"
              />
              <S.BookInfoRow>
                <S.BookInfoInner>
                  <S.BookDetails>
                    <S.BookTitle>[국내도서] 체인소 맨 5</S.BookTitle>
                    <S.BookSubtitle>(학산 코믹스 HC 9241)</S.BookSubtitle>
                    <S.BookAuthorRow>
                      <p>Tatsuki Fujimoto</p>
                      <p>저자(글)</p>
                    </S.BookAuthorRow>
                    <S.BookPublisherRow>
                      <p>학산문화사</p>
                      <p>•</p>
                      <p>2025년 03월 25일</p>
                    </S.BookPublisherRow>
                    <S.BookPrice>5,400 원</S.BookPrice>
                    <S.BookRatingRow>
                      <S.TrophyIcon>
                        <img
                          src="/assets/6a3fecda4ff90c6f75c7c2c85556f3f8918e9e24.svg"
                          alt="trophy"
                        />
                      </S.TrophyIcon>
                      <S.RatingText>3.5 / 5</S.RatingText>
                      <S.ReviewCount>(4)</S.ReviewCount>
                    </S.BookRatingRow>
                  </S.BookDetails>
                  <S.BookActions>
                    <S.SecondaryButton>
                      <p>읽는 중 표시</p>
                    </S.SecondaryButton>
                    <S.PrimaryButton>
                      <p>바로 시 쓰기</p>
                    </S.PrimaryButton>
                  </S.BookActions>
                </S.BookInfoInner>
              </S.BookInfoRow>
            </S.BookCardInner>
          </S.BookCard>
        </S.BookDetailSection>

        <S.PoetryCommentsContainer>
          <S.CommentsHeader>
            <S.CommentsHeaderInner>
              <S.CommentsTitle>총 8개의 여행자의 기록</S.CommentsTitle>
              <S.YearFilter>
                <p>좋아요 순</p>
                <S.ChevronIcon>
                  <img
                    src="/assets/57fe073068e40b1c404cb5ea96de3eee97fbc0de.svg"
                    alt="chevron"
                  />
                </S.ChevronIcon>
              </S.YearFilter>
            </S.CommentsHeaderInner>
            <S.Separator />
          </S.CommentsHeader>

          <S.CommentsList>
            <S.CommentCard>
              <S.UserInfoLeft>
                <S.UserDetails>
                  <S.Username>이감상</S.Username>
                  <S.TimeAgo>1주 전</S.TimeAgo>
                </S.UserDetails>
                <S.UserRating>
                  <S.RatingIcon>
                    <img
                      src="/assets/6a3fecda4ff90c6f75c7c2c85556f3f8918e9e24.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                  <S.RatingIcon>
                    <img
                      src="/assets/6a3fecda4ff90c6f75c7c2c85556f3f8918e9e24.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                  <S.RatingIcon>
                    <img
                      src="/assets/6a3fecda4ff90c6f75c7c2c85556f3f8918e9e24.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                  <S.RatingIcon>
                    <img
                      src="/assets/013cb20cb0c7357a5c57377d3929db0bf331b848.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                  <S.RatingIcon>
                    <img
                      src="/assets/ce3a8f575d064e79355353c8af78e8c1190b5484.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                </S.UserRating>
              </S.UserInfoLeft>
              <S.PoemContent>
                <S.PoemLines>
                  <p>책장을 넘기는 손끝에서</p>
                  <p>새로운 세상이 펼쳐지고</p>
                  <p>작가의 혼이 내 영혼과 만나네</p>
                  <p className="more">...</p>
                </S.PoemLines>
                <S.PoemQuote>
                  <p>
                    만약 도시가 살아있고, 모래 바람을 통해 당신에게 속삭인다면
                    어떨 것 같나요? 엘리아나 로웬의 소설 &lt;속삭이는 모래의
                    도시&gt;는 바로 그 신비로운 질문에서 시작합니다. 이 책은
                    사막의 심장부에서 해가 뜰 때 나타났다가 해가 지면 사라지는
                    전설의 도시, '카이람'에 대한 이야기입니다.
                  </p>
                </S.PoemQuote>
                <S.InteractionBar>
                  <S.LeftActions>
                    <S.LikeButton>
                      <img
                        src="/assets/dea38351ff717cced18bce75dbc82aedadccae18.svg"
                        alt="heart"
                      />
                      <p>12</p>
                    </S.LikeButton>
                    <S.ShareButton>
                      <img
                        src="/assets/30200e1b58960763af5cff2fcc68bb995c9369f0.svg"
                        alt="share"
                      />
                      <p>공유</p>
                    </S.ShareButton>
                  </S.LeftActions>
                  <S.MoreButton>
                    <img
                      src="/assets/331af38c7b04f8fbf1f2f879efb2ea93a826cf3e.svg"
                      alt="more"
                    />
                  </S.MoreButton>
                </S.InteractionBar>
              </S.PoemContent>
            </S.CommentCard>

            <S.CommentCard>
              <S.UserInfoLeft>
                <S.UserDetails>
                  <S.Username>이감상</S.Username>
                  <S.TimeAgo>1주 전</S.TimeAgo>
                </S.UserDetails>
                <S.UserRating>
                  <S.RatingIcon>
                    <img
                      src="/assets/6a3fecda4ff90c6f75c7c2c85556f3f8918e9e24.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                  <S.RatingIcon>
                    <img
                      src="/assets/6a3fecda4ff90c6f75c7c2c85556f3f8918e9e24.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                  <S.RatingIcon>
                    <img
                      src="/assets/6a3fecda4ff90c6f75c7c2c85556f3f8918e9e24.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                  <S.RatingIcon>
                    <img
                      src="/assets/013cb20cb0c7357a5c57377d3929db0bf331b848.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                  <S.RatingIcon>
                    <img
                      src="/assets/ce3a8f575d064e79355353c8af78e8c1190b5484.svg"
                      alt="rating"
                    />
                  </S.RatingIcon>
                </S.UserRating>
              </S.UserInfoLeft>
              <S.PoemContent>
                <S.PoemLines>
                  <p>책장을 넘기는 손끝에서</p>
                  <p>새로운 세상이 펼쳐지고</p>
                  <p>작가의 혼이 내 영혼과 만나네</p>
                  <p className="more">...</p>
                </S.PoemLines>
                <S.PoemQuote>
                  <p>
                    만약 도시가 살아있고, 모래 바람을 통해 당신에게 속삭인다면
                    어떨 것 같나요? 엘리아나 로웬의 소설 &lt;속삭이는 모래의
                    도시&gt;는 바로 그 신비로운 질문에서 시작합니다. 이 책은
                    사막의 심장부에서 해가 뜰 때 나타났다가 해가 지면 사라지는
                    전설의 도시, '카이람'에 대한 이야기입니다.
                  </p>
                </S.PoemQuote>
                <S.InteractionBar>
                  <S.LeftActions>
                    <S.LikeButton>
                      <img
                        src="/assets/dea38351ff717cced18bce75dbc82aedadccae18.svg"
                        alt="heart"
                      />
                      <p>12</p>
                    </S.LikeButton>
                    <S.ShareButton>
                      <img
                        src="/assets/30200e1b58960763af5cff2fcc68bb995c9369f0.svg"
                        alt="share"
                      />
                      <p>공유</p>
                    </S.ShareButton>
                  </S.LeftActions>
                  <S.MoreButton>
                    <img
                      src="/assets/331af38c7b04f8fbf1f2f879efb2ea93a826cf3e.svg"
                      alt="more"
                    />
                  </S.MoreButton>
                </S.InteractionBar>
              </S.PoemContent>
            </S.CommentCard>
          </S.CommentsList>

          <S.LoadMoreButton>
            <p>더 많은 기록 보기</p>
          </S.LoadMoreButton>
        </S.PoetryCommentsContainer>
      </S.BookDetailInner>
    </S.BookDetailContainer>
  );
}
