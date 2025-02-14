"use client";

import { twMerge } from "tailwind-merge";
import React from "react";

type Props = {
  text: string;
  className?: string;
};

export function SubmitButton({ text, className }: Props) {
  const handleClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=5571999061414&text&type=phone_number&app_absent=0";
  };
  const defaultClassButton =
    "shadow-[inset_0_0_0_2px_#ffffff] text-black px-12 py-4 rounded-lg border-white tracking-widest uppercase font-bold bg-primary hover:bg-[#363c42] transform hover:scale-105 hover:text-white dark:text-neutral-200 transition duration-200";
  const combinedClassButton = twMerge(defaultClassButton, className);

  return (
    <div className="mt-10 mb-10">
      <button className={combinedClassButton} onClick={handleClick}>
        <span data-text={text} className="text-white">
          {text}
        </span>
      </button>
    </div>
  );
}
