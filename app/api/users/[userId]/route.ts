import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/database";
import { ObjectId } from "mongodb";

export async function GET(
  request: NextRequest,
  context: any // ✅ 타입을 임시로 완화
) {
  try {
    const { userId } = await context.params;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("fanta");
    const usersCollection = db.collection("user");

    // ObjectId로 사용자 찾기
    const user = await usersCollection.findOne({
      _id: new ObjectId(userId),
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 필요한 정보만 반환 (비밀번호 제외)
    return NextResponse.json({
      success: true,
      data: {
        id: user._id.toString(),
        nickname: user.name || user.email,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
