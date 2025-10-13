"use client";

import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>검색 페이지 로딩 중...</div>}>
      <SearchContent />
    </Suspense>
  );
}
