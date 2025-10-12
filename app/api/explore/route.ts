import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase";

export async function GET(request: NextRequest) {
  try {
    // 공개된 시들만 가져오기 (최신순)
    const { data: poems, error } = await supabaseAdmin
      .from("poems")
      .select("*")
      .eq("is_public", true)
      .order("created_at", { ascending: false })
      .limit(50); // 최대 50개로 제한

    if (error) {
      console.error("Supabase select error:", error);
      return NextResponse.json(
        { error: "공개된 시 목록을 불러오는 중 오류가 발생했습니다: " + error.message },
        { status: 500 }
      );
    }

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
