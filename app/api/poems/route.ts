import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { supabaseAdmin } from "@/app/lib/supabase";

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

    // 사용자의 모든 시 가져오기 (최신순)
    const { data: poems, error } = await supabaseAdmin
      .from("poems")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase select error:", error);
      return NextResponse.json(
        { error: "시 목록을 불러오는 중 오류가 발생했습니다: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: poems || [],
      count: poems?.length || 0,
    });
  } catch (error) {
    console.error("시 목록 조회 오류:", error);
    return NextResponse.json(
      { error: "시 목록을 불러오는 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}

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
    const {
      isbn,
      startDate,
      endDate,
      review,
      poemTitle,
      poemContent,
      rating,
      isPublic,
    } = body;

    // 필수 필드 검증
    if (!isbn || !startDate || !endDate || !poemTitle || !poemContent) {
      return NextResponse.json(
        { error: "필수 필드가 누락되었습니다" },
        { status: 400 }
      );
    }

    if (typeof rating !== "number" || rating < 0 || rating > 5) {
      return NextResponse.json(
        { error: "별점은 0에서 5 사이의 숫자여야 합니다" },
        { status: 400 }
      );
    }

    const userId = session.user.id;

    const poemData = {
      isbn,
      user_id: userId,
      start_date: startDate,
      end_date: endDate,
      review: review || null,
      poem_title: poemTitle,
      poem_content: poemContent,
      rating,
      is_public: isPublic,
    };

    // Service Role을 사용하여 RLS를 우회하고 데이터 저장
    // NextAuth로 이미 인증을 확인했으므로 안전함
    const { data, error } = await supabaseAdmin
      .from("poems")
      .upsert(poemData, {
        onConflict: "isbn,user_id",
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase upsert error:", error);
      return NextResponse.json(
        { error: "시 저장 중 오류가 발생했습니다: " + error.message },
        { status: 500 }
      );
    }

    // 시 저장 성공 시 읽는 중인 책 목록에서 제거
    const { error: deleteError } = await supabaseAdmin
      .from("reading_books")
      .delete()
      .eq("isbn", isbn)
      .eq("user_id", userId);

    if (deleteError) {
      console.error("Reading books delete error:", deleteError);
      // 삭제 실패해도 시 저장은 성공했으므로 경고만 로그
    }

    return NextResponse.json({
      success: true,
      message: "시가 저장되었습니다",
      data,
    });
  } catch (error) {
    console.error("시 저장 오류:", error);
    return NextResponse.json(
      { error: "시 저장 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
