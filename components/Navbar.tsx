'use client'
import React, { useState } from "react";
import { LogIn, MoonIcon, SunIcon, Menu, X, Download } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import CustomButton from "./general/custom-button";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    const handleDownloadCV = () =>{
        window?.open('/Uzair-Resume.pdf', '_blank')
    }

    return (
        <nav className="fixed top-0 w-full z-50 px-4 md:px-8 py-3
        backdrop-blur-xl bg-white/40 dark:bg-white/10
        border-b border-white/20 shadow-lg">

            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <img width={60} src="/image.png" alt="logo" className="cursor-pointer" />

                {/* Desktop Menu */}
                <div className="flex gap-7">

                    <ul className="hidden md:flex justify-center items-center gap-8 text-sm font-medium text-gray-800 dark:text-gray-200">
                        <li>
                            <Link href="/projects" className="hover:text-blue-500 transition">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-blue-500 transition">
                                Services
                            </Link>
                        </li>
                    </ul>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center gap-4 text-gray-800 dark:text-gray-200">

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-[var(--app-gray-300)] transition"
                        >
                            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                        </button>

                        {/* Login Button */}
                        <CustomButton btnType="download" className="flex gap-2"
                        onClick={handleDownloadCV}>
                            <span><Download /></span>
                            <span>Download CV</span>
                        </CustomButton>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded-lg hover:bg-white/30 dark:hover:bg-white/20"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={`md:hidden mt-4 transition-all duration-300 ease-in-out
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>

                <div className="flex flex-col gap-4 p-4 rounded-2xl
                bg-white/30 dark:bg-white/10 backdrop-blur-xl
                border border-white/20 shadow-md">

                    <Link href="/projects" onClick={() => setOpen(false)}
                        className="hover:text-blue-500 transition">
                        Projects
                    </Link>

                    <Link href="/services" onClick={() => setOpen(false)}
                        className="hover:text-blue-500 transition">
                        Services
                    </Link>

                    <div className="flex items-center justify-between pt-2 border-t border-white/20">

                        {/* Theme */}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-white/30"
                        >
                            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
                        </button>

                        {/* Login */}
                        <CustomButton btnType="download" className="flex gap-2"
                        onClick={handleDownloadCV}>
                            <span><Download /></span>
                            <span>Download CV</span>
                        </CustomButton>
                    </div>

                </div>
            </div>
        </nav>
    );
}