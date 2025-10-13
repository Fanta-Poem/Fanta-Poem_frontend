"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import BackButton from "../components/BackButton";
import { Heart } from "lucide-react";
import * as S from "./style";

interface Poem {
  isbn: string;
  user_id: string;
  start_date: string;
  end_date: string;
  review: string | null;
  poem_title: string;
  poem_content: string;
  rating: number;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

interface Book {
  isbn: string;
  title: string;
  authors: string[];
  thumbnail: string;
}

interface User {
  id: string;
  nickname: string;
}

interface PoemWithDetails extends Poem {
  book?: Book;
  user?: User;
  likeCount?: number;
  isLiked?: boolean;
}

// 공개된 시 목록 가져오기
const fetchPublicPoems = async (): Promise<Poem[]> => {
  const response = await fetch("/api/explore");
  if (!response.ok) {
    throw new Error("Failed to fetch public poems");
  }
  const result = await response.json();
  return result.data || [];
};

// 책 정보 가져오기
const fetchBookInfo = async (isbn: string): Promise<Book | null> => {
  try {
    const response = await fetch(`/api/books/${isbn}`);
    if (!response.ok) return null;
    const book = await response.json();
    return {
      isbn: book.isbn,
      title: book.title,
      authors: book.authors,
      thumbnail: book.thumbnail,
    };
  } catch (error) {
    console.error(`Failed to fetch book ${isbn}:`, error);
    return null;
  }
};

// 사용자 정보 가져오기
const fetchUserInfo = async (userId: string): Promise<User | null> => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) return null;
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch user ${userId}:`, error);
    return null;
  }
};

// 좋아요 정보 가져오기
const fetchLikeInfo = async (
  userId: string,
  isbn: string
): Promise<{ likeCount: number; isLiked: boolean }> => {
  try {
    const response = await fetch(`/api/poems/${userId}/${isbn}/likes`);
    if (!response.ok) return { likeCount: 0, isLiked: false };
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Failed to fetch likes for ${userId}/${isbn}:`, error);
    return { likeCount: 0, isLiked: false };
  }
};

// 좋아요 토글 API 호출
const toggleLike = async (
  userId: string,
  isbn: string
): Promise<{ isLiked: boolean }> => {
  const response = await fetch(`/api/poems/${userId}/${isbn}/likes`, {
    method: "POST",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "좋아요 처리 중 오류가 발생했습니다.");
  }

  const result = await response.json();
  return { isLiked: result.isLiked };
};

export default function ExplorePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const [poemsWithDetails, setPoemsWithDetails] = useState<PoemWithDetails[]>(
    []
  );
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  // 공개된 시 목록 가져오기
  const { data: poems, isLoading } = useQuery({
    queryKey: ["publicPoems"],
    queryFn: fetchPublicPoems,
  });

  // 시에 대한 책, 사용자, 좋아요 정보 가져오기
  useEffect(() => {
    if (!poems || poems.length === 0) {
      setPoemsWithDetails([]);
      setIsLoadingDetails(false);
      return;
    }

    const fetchAllDetails = async () => {
      setIsLoadingDetails(true);
      const poemsPromises = poems.map(async (poem) => {
        const [book, user, likeInfo] = await Promise.all([
          fetchBookInfo(poem.isbn),
          fetchUserInfo(poem.user_id),
          fetchLikeInfo(poem.user_id, poem.isbn),
        ]);

        return {
          ...poem,
          book: book || undefined,
          user: user || undefined,
          likeCount: likeInfo.likeCount,
          isLiked: likeInfo.isLiked,
        };
      });

      const results = await Promise.all(poemsPromises);
      setPoemsWithDetails(results);
      setIsLoadingDetails(false);
    };

    fetchAllDetails();
  }, [poems]);

  // 좋아요 토글 mutation (Optimistic Updates)
  const likeMutation = useMutation({
    mutationFn: ({ userId, isbn }: { userId: string; isbn: string }) =>
      toggleLike(userId, isbn),
    onMutate: async ({ userId, isbn }) => {
      // 진행 중인 refetch 취소
      await queryClient.cancelQueries({ queryKey: ["publicPoems"] });

      // 이전 상태 저장
      const previousPoems = poemsWithDetails;

      // 낙관적 업데이트
      setPoemsWithDetails((prev) =>
        prev.map((p) => {
          if (p.isbn === isbn && p.user_id === userId) {
            return {
              ...p,
              isLiked: !p.isLiked,
              likeCount: p.isLiked
                ? Math.max(0, (p.likeCount || 1) - 1)
                : (p.likeCount || 0) + 1,
            };
          }
          return p;
        })
      );

      // 롤백을 위해 이전 상태 반환
      return { previousPoems };
    },
    onError: (error, _variables, context) => {
      // 에러 발생 시 이전 상태로 롤백
      if (context?.previousPoems) {
        setPoemsWithDetails(context.previousPoems);
      }
      alert(
        error instanceof Error
          ? error.message
          : "좋아요 처리 중 오류가 발생했습니다."
      );
    },
    onSettled: (_data, _error, variables) => {
      // 성공/실패와 관계없이 서버 데이터로 재동기화
      queryClient.invalidateQueries({ queryKey: ["publicPoems"] });
      // poem detail page의 좋아요 정보도 무효화
      queryClient.invalidateQueries({ queryKey: ["likes", variables.userId, variables.isbn] });
      // book detail page의 comment 리스트도 무효화
      queryClient.invalidateQueries({ queryKey: ["poemsWithDetails"] });
    },
  });

  const handlePoemClick = (poem: PoemWithDetails) => {
    const cleanIsbn = poem.isbn.split(" ")[0].split("%")[0].trim();
    router.push(`/poem/${poem.user_id}/${cleanIsbn}`);
  };

  const handleLikeClick = (e: React.MouseEvent, poem: PoemWithDetails) => {
    e.stopPropagation(); // 카드 클릭 이벤트 방지

    if (!session?.user?.id) {
      alert("로그인이 필요합니다.");
      return;
    }

    const cleanIsbn = poem.isbn.split(" ")[0].split("%")[0].trim();
    likeMutation.mutate({
      userId: poem.user_id,
      isbn: cleanIsbn,
    });
  };

  return (
    <S.ExploreContainer>
      <S.ExploreInner>
        <BackButton />

        <S.HeaderSection>
          <S.Title>탐색</S.Title>
          <S.Subtitle>다른 탐험가들의 시를 감상해보세요</S.Subtitle>
        </S.HeaderSection>

        <S.PoemsSection>
          {isLoading || isLoadingDetails ? (
            // 로딩 중: 스켈레톤 UI 표시
            <S.PoemGrid>
              {[...Array(8)].map((_, index) => (
                <S.SkeletonCard key={index}>
                  <S.SkeletonImage />
                  <S.SkeletonInfo>
                    <S.SkeletonText height="24px" width="80%" />
                    <S.SkeletonText height="16px" width="60%" />
                    <S.SkeletonText height="14px" width="40%" />
                  </S.SkeletonInfo>
                </S.SkeletonCard>
              ))}
            </S.PoemGrid>
          ) : poemsWithDetails.length === 0 ? (
            // 데이터 없음
            <S.EmptyMessage>아직 공유된 시가 없습니다.</S.EmptyMessage>
          ) : (
            // 데이터 로드 완료
            <S.PoemGrid>
              {poemsWithDetails.map((poem) => (
                <S.PoemCard
                  key={`${poem.user_id}-${poem.isbn}`}
                  onClick={() => handlePoemClick(poem)}
                >
                  {poem.book && (
                    <S.BookCover
                      src={poem.book.thumbnail || "/book-sample.svg"}
                      alt={poem.book.title}
                      onError={(e) => {
                        e.currentTarget.src = "/book-sample.svg";
                      }}
                    />
                  )}
                  <S.PoemInfo>
                    <S.PoemTitle>{poem.poem_title}</S.PoemTitle>
                    {poem.book && <S.BookTitle>{poem.book.title}</S.BookTitle>}
                    <S.PoemMeta>
                      <S.AuthorName>
                        {poem.user?.nickname || "익명"}
                      </S.AuthorName>
                      <S.DateText>
                        {new Date(poem.created_at).toLocaleDateString("ko-KR")}
                      </S.DateText>
                    </S.PoemMeta>
                    <S.LikeSection>
                      <S.LikeButton
                        isLiked={poem.isLiked || false}
                        onClick={(e) => handleLikeClick(e, poem)}
                        disabled={likeMutation.isPending}
                      >
                        <Heart
                          size={18}
                          fill={poem.isLiked ? "#b794f6" : "none"}
                          strokeWidth={2}
                        />
                        <S.LikeCount isLiked={poem.isLiked || false}>
                          {poem.likeCount || 0}
                        </S.LikeCount>
                      </S.LikeButton>
                    </S.LikeSection>
                  </S.PoemInfo>
                </S.PoemCard>
              ))}
            </S.PoemGrid>
          )}
        </S.PoemsSection>
      </S.ExploreInner>
    </S.ExploreContainer>
  );
}
