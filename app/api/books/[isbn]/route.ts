import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ isbn: string }> }
) {
  const { isbn } = await params;

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
    const url = new URL("https://dapi.kakao.com/v3/search/book");
    url.searchParams.append("target", "isbn");
    url.searchParams.append("query", isbn);

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `KakaoAK ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Kakao API error: ${response.status}`);
    }

    const data = await response.json();

    // ISBN으로 조회하면 정확히 1개의 결과가 반환되어야 함
    if (data.documents && data.documents.length > 0) {
      return NextResponse.json(data.documents[0]);
    } else {
      return NextResponse.json(
        { error: "Book not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Book fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch book" },
      { status: 500 }
    );
  }
}
