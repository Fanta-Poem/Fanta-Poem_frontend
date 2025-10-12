import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase";

export async function GET(
  request: NextRequest,
  { params }: { params: { userid: string; isbn: string } }
) {
  try {
    const { userid, isbn } = params;

    if (!userid || !isbn) {
      return NextResponse.json(
        { error: "user_id와 isbn이 필요합니다" },
        { status: 400 }
      );
    }

    // 특정 사용자의 특정 책에 대한 시 가져오기
    const { data: poem, error } = await supabaseAdmin
      .from("poems")
      .select("*")
      .eq("user_id", userid)
      .eq("isbn", isbn)
      .single();

    if (error) {
      console.error("Supabase select error:", error);
      return NextResponse.json(
        { error: "시를 찾을 수 없습니다" },
        { status: 404 }
      );
    }

    if (!poem) {
      return NextResponse.json(
        { error: "시를 찾을 수 없습니다" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: poem,
    });
  } catch (error) {
    console.error("시 조회 오류:", error);
    return NextResponse.json(
      { error: "시 조회 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
