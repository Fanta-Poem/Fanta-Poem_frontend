"use client";

import { Suspense } from "react";
import MenuContent from "./MenuContent"; // useSearchParams() 사용하는 부분

export default function MenuPage() {
  return (
    <Suspense fallback={<div>메뉴 로딩 중...</div>}>
      <MenuContent />
    </Suspense>
  );
}
