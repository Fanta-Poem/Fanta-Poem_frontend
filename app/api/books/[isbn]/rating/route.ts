import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase";

export async function GET(
  request: NextRequest,
  { params }: { params: { isbn: string } }
) {
  try {
    const { isbn } = params;

    if (!isbn) {
      return NextResponse.json(
        { error: "ISBN parameter is required" },
        { status: 400 }
      );
    }

    // 1단계: 해당 ISBN의 공개된 시들만 가져오기
    // ISBN이 정확히 일치하거나, 공백으로 구분된 여러 ISBN 중 하나와 일치하는 경우 모두 찾기
    const { data: poems, error } = await supabaseAdmin
      .from("poems")
      .select("rating")
      .or(`isbn.eq.${isbn},isbn.like.${isbn} %,isbn.like.% ${isbn} %,isbn.like.% ${isbn}`)
      .eq("is_public", true);

    if (error) {
      console.error("Supabase select error:", error);
      return NextResponse.json(
        { error: "평점을 불러오는 중 오류가 발생했습니다: " + error.message },
        { status: 500 }
      );
    }

    // 2단계: rating(trophy) 추출
    const ratings = poems?.map((poem) => poem.rating) || [];
    const reviewCount = ratings.length;

    // 3단계: 평균 계산
    let averageRating = 0;
    if (reviewCount > 0) {
      const sum = ratings.reduce((acc, rating) => acc + rating, 0);
      averageRating = sum / reviewCount;
    }

    return NextResponse.json({
      success: true,
      data: {
        averageRating: Number(averageRating.toFixed(2)),
        reviewCount,
      },
    });
  } catch (error) {
    console.error("평점 조회 오류:", error);
    return NextResponse.json(
      { error: "평점을 불러오는 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
