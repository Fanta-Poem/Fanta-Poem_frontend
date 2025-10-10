import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/database";
import bcrypt from "bcrypt";

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
    const db = client.db("fanta"); // DB 이름
    const usersCollection = db.collection("user");

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

    // 사용자 생성 (NextAuth Adapter 스키마와 호환)
    const newUser = {
      name,
      email,
      password: hashedPassword,
      emailVerified: null, // 이메일 인증 전
      image: null,
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);

    return NextResponse.json(
      {
        message: "회원가입이 완료되었습니다. 이제 로그인해주세요.",
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
