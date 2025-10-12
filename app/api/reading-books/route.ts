import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { supabaseAdmin } from "@/app/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    // 인증 확인
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "인증이 필요합니다" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { isbn, startDate } = body;

    // 필수 필드 검증
    if (!isbn || !startDate) {
      return NextResponse.json(
        { error: "필수 필드가 누락되었습니다" },
        { status: 400 }
      );
    }

    const userId = session.user.id;

    // 읽는 중인 책 데이터
    const readingBookData = {
      isbn,
      user_id: userId,
      start_date: startDate,
    };

    // 중복 확인 후 저장
    const { data, error } = await supabaseAdmin
      .from("reading_books")
      .upsert(readingBookData, {
        onConflict: "isbn,user_id",
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase upsert error:", error);
      return NextResponse.json(
        { error: "읽는 중인 책 저장 중 오류가 발생했습니다: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "읽는 중인 책으로 등록되었습니다",
      data,
    });
  } catch (error) {
    console.error("읽는 중인 책 등록 오류:", error);
    return NextResponse.json(
      { error: "읽는 중인 책 등록 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // 인증 확인
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "인증이 필요합니다" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // 사용자의 읽는 중인 책 목록 가져오기
    const { data: readingBooks, error } = await supabaseAdmin
      .from("reading_books")
      .select("*")
      .eq("user_id", userId)
      .order("start_date", { ascending: false });

    if (error) {
      console.error("Supabase select error:", error);
      return NextResponse.json(
        {
          error: "읽는 중인 책 목록을 불러오는 중 오류가 발생했습니다: " + error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: readingBooks || [],
      count: readingBooks?.length || 0,
    });
  } catch (error) {
    console.error("읽는 중인 책 목록 조회 오류:", error);
    return NextResponse.json(
      { error: "읽는 중인 책 목록을 불러오는 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
