import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/database";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    // 입력 검증
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    // 비밀번호 길이 검증
    if (password.length < 6) {
      return NextResponse.json(
        { error: "비밀번호는 최소 6자 이상이어야 합니다." },
        { status: 400 }
      );
    }

    // MongoDB 연결
    const client = await clientPromise;
    const db = client.db("fanta");
    const usersCollection = db.collection("user");
    const tokensCollection = db.collection("verification_tokens");

    // 이메일 중복 확인
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "이미 존재하는 이메일입니다." },
        { status: 400 }
      );
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 인증 토큰 생성
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // 사용자 생성 (이메일 미인증 상태)
    const newUser = {
      name,
      email,
      password: hashedPassword,
      emailVerified: null, // 이메일 인증 전
      image: null,
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);

    // 인증 토큰 저장 (24시간 유효)
    await tokensCollection.insertOne({
      userId: result.insertedId,
      email,
      token: verificationToken,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24시간 후 만료
      createdAt: new Date(),
    });

    // 인증 이메일 발송
    const emailSent = await sendVerificationEmail(email, verificationToken, name);

    if (!emailSent) {
      return NextResponse.json(
        { error: "이메일 전송에 실패했습니다. 다시 시도해주세요." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "회원가입이 완료되었습니다. 이메일을 확인하여 인증을 완료해주세요.",
        requiresEmailVerification: true,
        user: {
          id: result.insertedId,
          email: newUser.email,
          name: newUser.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
