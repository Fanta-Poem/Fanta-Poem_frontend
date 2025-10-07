import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const page = searchParams.get("page") || "1";
  const size = searchParams.get("size") || "10";
  const sort = searchParams.get("sort") || "accuracy";

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
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
    url.searchParams.append("query", query);
    url.searchParams.append("page", page);
    url.searchParams.append("size", size);
    url.searchParams.append("sort", sort);

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `KakaoAK ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Kakao API error: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Book search error:", error);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
