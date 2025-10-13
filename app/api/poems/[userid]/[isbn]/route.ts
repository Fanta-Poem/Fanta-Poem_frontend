import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase";
import { auth } from "@/lib/auth";

export async function GET(
  request: NextRequest,
  context: any // ✅ 타입을 임시로 완화
) {
  try {
    const { userid, isbn } = await context.params;

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

export async function PUT(
  request: NextRequest,
  context: any // ✅ 타입을 임시로 완화
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "로그인이 필요합니다" },
        { status: 401 }
      );
    }

    const { userid, isbn } = await context.params;
    const currentUserId = session.user.id;

    // 본인의 시만 수정 가능
    if (currentUserId !== userid) {
      return NextResponse.json(
        { error: "본인의 시만 수정할 수 있습니다" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { rating, is_public, review, poem_title, poem_content } = body;

    console.log("📝 Update request body:", { rating, is_public, review, poem_title, poem_content });

    // 업데이트할 데이터 준비
    const updateData: any = {
      updated_at: new Date().toISOString(),
    };

    if (rating !== undefined && rating > 0) updateData.rating = rating;
    if (is_public !== undefined) updateData.is_public = is_public;
    if (review !== undefined) updateData.review = review;
    if (poem_title !== undefined) updateData.poem_title = poem_title;
    if (poem_content !== undefined) updateData.poem_content = poem_content;

    console.log("📊 Update data to be saved:", updateData);

    // 시 업데이트
    const { data: updatedPoem, error } = await supabaseAdmin
      .from("poems")
      .update(updateData)
      .eq("user_id", userid)
      .eq("isbn", isbn)
      .select()
      .single();

    if (error) {
      console.error("❌ Supabase update error:", error);
      return NextResponse.json(
        { error: "시 수정 중 오류가 발생했습니다" },
        { status: 500 }
      );
    }

    console.log("✅ Successfully updated poem:", updatedPoem);

    return NextResponse.json({
      success: true,
      data: updatedPoem,
    });
  } catch (error) {
    console.error("시 수정 오류:", error);
    return NextResponse.json(
      { error: "시 수정 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
