'use client'

import React from "react";
import { mergeClasses } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: "download" | "submit" | "preview" | "link";
}

export default function CustomButton({
  btnType = "submit",
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

    submit: `
    bg-emerald-600/90 hover:bg-emerald-700 
    text-white shadow-md hover:shadow-lg
    focus:ring-2 focus:ring-emerald-400
  `,

    preview: `
    bg-amber-400/90 hover:bg-amber-500 
    text-black shadow-sm hover:shadow-md
    focus:ring-2 focus:ring-amber-300
  `,

    link: `
    bg-[var(--app-gray-200)] text-[var(--app-gray-800)]
    border border-white/20
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