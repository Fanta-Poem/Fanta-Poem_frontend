import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabase";
import { auth } from "@/lib/auth";

// 좋아요 수와 현재 사용자의 좋아요 여부 조회
export async function GET(
  request: NextRequest,
  { params }: { params: { userid: string; isbn: string } }
) {
  try {
    const { userid, isbn } = params;
    const session = await auth();
    const currentUserId = session?.user?.id;

    // 전체 좋아요 수 조회
    const { data: likes, error: countError } = await supabaseAdmin
      .from("poem_likes")
      .select("*")
      .eq("poem_isbn", isbn)
      .eq("poem_user_id", userid);

    if (countError) {
      console.error("좋아요 수 조회 오류:", countError);
      return NextResponse.json(
        { error: "좋아요 수를 불러오는 중 오류가 발생했습니다" },
        { status: 500 }
      );
    }

    const likeCount = likes?.length || 0;

    // 현재 사용자가 좋아요를 눌렀는지 확인
    let isLiked = false;
    if (currentUserId) {
      isLiked =
        likes?.some((like) => like.liker_user_id === currentUserId) || false;
    }

    return NextResponse.json({
      success: true,
      data: {
        likeCount,
        isLiked,
      },
    });
  } catch (error) {
    console.error("좋아요 정보 조회 오류:", error);
    return NextResponse.json(
      { error: "좋아요 정보를 불러오는 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}

// 좋아요 토글 (추가/제거)
export async function POST(
  request: NextRequest,
  { params }: { params: { userid: string; isbn: string } }
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "로그인이 필요합니다" },
        { status: 401 }
      );
    }

    const { userid, isbn } = params;
    const currentUserId = session.user.id;

    // 본인의 시에는 좋아요를 누를 수 없음
    if (currentUserId === userid) {
      return NextResponse.json(
        { error: "본인의 시에는 좋아요를 누를 수 없습니다" },
        { status: 400 }
      );
    }

    // 현재 좋아요 상태 확인
    const { data: existingLike, error: checkError } = await supabaseAdmin
      .from("poem_likes")
      .select("*")
      .eq("poem_isbn", isbn)
      .eq("poem_user_id", userid)
      .eq("liker_user_id", currentUserId)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116은 "not found" 에러
      console.error("좋아요 상태 확인 오류:", checkError);
      return NextResponse.json(
        { error: "좋아요 상태를 확인하는 중 오류가 발생했습니다" },
        { status: 500 }
      );
    }

    if (existingLike) {
      // 좋아요가 이미 존재하면 제거
      const { error: deleteError } = await supabaseAdmin
        .from("poem_likes")
        .delete()
        .eq("poem_isbn", isbn)
        .eq("poem_user_id", userid)
        .eq("liker_user_id", currentUserId);

      if (deleteError) {
        console.error("좋아요 제거 오류:", deleteError);
        return NextResponse.json(
          { error: "좋아요를 제거하는 중 오류가 발생했습니다" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "좋아요가 취소되었습니다",
        isLiked: false,
      });
    } else {
      // 좋아요가 없으면 추가
      const { error: insertError } = await supabaseAdmin
        .from("poem_likes")
        .insert({
          poem_isbn: isbn,
          poem_user_id: userid,
          liker_user_id: currentUserId,
        });

      if (insertError) {
        console.error("좋아요 추가 오류:", insertError);
        return NextResponse.json(
          { error: "좋아요를 추가하는 중 오류가 발생했습니다" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "좋아요가 추가되었습니다",
        isLiked: true,
      });
    }
  } catch (error) {
    console.error("좋아요 처리 오류:", error);
    return NextResponse.json(
      { error: "좋아요 처리 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
