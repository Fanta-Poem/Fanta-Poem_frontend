"use client";

import * as S from "./style";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "이야기 검색",
}: SearchBarProps) {
  return (
    <S.SearchBarContainer>
      <S.SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <S.SearchIcon
        src="/icons/search.svg"
        alt="검색"
        onClick={onSearch}
      />
    </S.SearchBarContainer>
  );
}
