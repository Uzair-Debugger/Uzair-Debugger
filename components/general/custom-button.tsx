'use client'

import React from "react";
import { mergeClasses } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: "download" | "visit" | "preview" | "link";
}

export default function CustomButton({
  btnType = "visit",
  children,
  className,
  ...props
}: ButtonProps) {

  const btnTypeClasses: Record<string, string> = {
    download: `
    bg-gray-700 hover:bg-gray-800 
    text-white shadow-md hover:shadow-lg
    focus:ring-2 focus:ring-blue-400
  `,

    visit: `
    bg-[var(--app-gray-default)] hover:bg-[var(--app-gray-default)] 
    p-2 
  `,

    preview: `
    bg-[var(--app-gray-50)] hover:bg-[var(--app-gray-100)] 
    focus:ring-2 focus:ring-amber-300
  `,

    link: `
    bg-[var(--app-gray-200)] text-[var(--app-gray-700)]
     rounded-full px-3 py-1 text-sm
  `
  };

  return (
    <button
      className={mergeClasses(
        "px-6 py-3 rounded-md font-medium transition-all duration-200 cursor-pointer",
        btnTypeClasses[btnType],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}