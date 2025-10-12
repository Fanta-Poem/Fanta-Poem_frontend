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

    console.log("📚 Searching poems for ISBN:", isbn);

    // 해당 ISBN의 공개된 시들만 가져오기
    // ISBN이 정확히 일치하거나, 공백으로 구분된 여러 ISBN 중 하나와 일치하는 경우 모두 찾기
    const { data: poems, error } = await supabaseAdmin
      .from("poems")
      .select("*")
      .or(`isbn.eq.${isbn},isbn.like.${isbn} %,isbn.like.% ${isbn} %,isbn.like.% ${isbn}`)
      .eq("is_public", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase select error:", error);
      return NextResponse.json(
        { error: "공개된 시 목록을 불러오는 중 오류가 발생했습니다: " + error.message },
        { status: 500 }
      );
    }

    console.log(`✅ Found ${poems?.length || 0} poems for ISBN: ${isbn}`);

    return NextResponse.json({
      success: true,
      data: poems || [],
      count: poems?.length || 0,
    });
  } catch (error) {
    console.error("공개 시 목록 조회 오류:", error);
    return NextResponse.json(
      { error: "공개된 시 목록을 불러오는 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
