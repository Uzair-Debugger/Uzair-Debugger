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
    download: "bg-blue-600 hover:bg-blue-700 text-white",
    submit: "bg-green-600 hover:bg-green-700 text-white",
    preview: "bg-yellow-500 hover:bg-yellow-600 text-black",
    link: "bg-transparent text-white hover:bg-gray-800"
  }

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