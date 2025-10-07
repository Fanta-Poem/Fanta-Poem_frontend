"use client";

import { useState, useRef, useEffect } from "react";
import * as S from "./style";
import { ChevronDown } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "선택하세요",
  width = "120px",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <S.DropdownWrapper ref={dropdownRef} width={width}>
      <S.DropdownButton onClick={handleToggle}>
        <S.DropdownText>
          {selectedOption ? selectedOption.label : placeholder}
        </S.DropdownText>
        <S.ChevronIcon isOpen={isOpen}>
          <ChevronDown size={16} color="var(--light-primary)" />
        </S.ChevronIcon>
      </S.DropdownButton>

      {isOpen && (
        <S.DropdownMenu>
          {options.map((option) => (
            <S.DropdownItem
              key={option.value}
              active={option.value === value}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.DropdownWrapper>
  );
}
