import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/database";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.redirect(
        new URL("/login?error=invalid-token", request.url)
      );
    }

    // MongoDB 연결
    const client = await clientPromise;
    const db = client.db("fanta");
    const usersCollection = db.collection("user");
    const tokensCollection = db.collection("verification_tokens");

    // 토큰 조회
    const verificationToken = await tokensCollection.findOne({ token });

    if (!verificationToken) {
      return NextResponse.redirect(
        new URL("/login?error=invalid-token", request.url)
      );
    }

    // 토큰 만료 확인
    if (new Date() > verificationToken.expires) {
      await tokensCollection.deleteOne({ token });
      return NextResponse.redirect(
        new URL("/login?error=token-expired", request.url)
      );
    }

    // 사용자 이메일 인증 완료
    await usersCollection.updateOne(
      { _id: verificationToken.userId },
      { $set: { emailVerified: new Date() } }
    );

    // 사용된 토큰 삭제
    await tokensCollection.deleteOne({ token });

    // 로그인 페이지로 리다이렉트 (성공 메시지 포함)
    return NextResponse.redirect(
      new URL("/login?verified=true", request.url)
    );
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.redirect(
      new URL("/login?error=verification-failed", request.url)
    );
  }
}
