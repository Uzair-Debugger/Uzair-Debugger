'use client'
import React, { useState } from "react";
import { LogIn, MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [toggle, setToggle] = useState<boolean>(false);

    return (<nav className="fixed top-0 w-full z-50 px-8 py-4 
backdrop-blur-xl bg-white/60 border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

            <img width={70} src="/image.png" alt="logo" />

            <ul className="flex gap-8 text-sm font-medium text-gray-800">
                <li><Link href="/home" className="hover:text-blue-600">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
                <li><Link href="/projects" className="hover:text-blue-600">Projects</Link></li>
                <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
            </ul>

            <div className="flex items-center gap-6 text-gray-800">
                <button onClick={() => setToggle(!toggle)} className="p-2 rounded-full hover:bg-gray-200">
                    {toggle ? <MoonIcon size={20} /> : <SunIcon size={20} />}
                </button>

                <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-200">
                    <LogIn size={18} /> Login
                </button>
            </div>

        </div>
    </nav>);
}