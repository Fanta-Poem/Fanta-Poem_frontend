import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: any // ✅ 타입을 임시로 완화
) {
  const { isbn } = await context.params;

  if (!isbn) {
    return NextResponse.json(
      { error: "ISBN parameter is required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.KAKAO_BOOK_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    // 1차 시도: ISBN으로 검색
    const isbnUrl = new URL("https://dapi.kakao.com/v3/search/book");
    isbnUrl.searchParams.append("target", "isbn");
    isbnUrl.searchParams.append("query", isbn);

    const isbnResponse = await fetch(isbnUrl.toString(), {
      headers: {
        Authorization: `KakaoAK ${apiKey}`,
      },
    });

    if (!isbnResponse.ok) {
      throw new Error(`Kakao API error: ${isbnResponse.status}`);
    }

    const isbnData = await isbnResponse.json();

    // ISBN으로 찾았으면 반환
    if (isbnData.documents && isbnData.documents.length > 0) {
      return NextResponse.json(isbnData.documents[0]);
    }

    // 2차 시도: ISBN의 공백 제거 버전으로 다시 시도
    const cleanISBN = isbn.replace(/[\s-]/g, "");
    if (cleanISBN !== isbn) {
      const cleanUrl = new URL("https://dapi.kakao.com/v3/search/book");
      cleanUrl.searchParams.append("target", "isbn");
      cleanUrl.searchParams.append("query", cleanISBN);

      const cleanResponse = await fetch(cleanUrl.toString(), {
        headers: {
          Authorization: `KakaoAK ${apiKey}`,
        },
      });

      if (cleanResponse.ok) {
        const cleanData = await cleanResponse.json();
        if (cleanData.documents && cleanData.documents.length > 0) {
          return NextResponse.json(cleanData.documents[0]);
        }
      }
    }

    // 모든 시도 실패
    console.error(`❌ Book not found for ISBN: ${isbn}`);
    return NextResponse.json(
      { error: "Book not found", isbn },
      { status: 404 }
    );
  } catch (error) {
    console.error("Book fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch book" },
      { status: 500 }
    );
  }
}
