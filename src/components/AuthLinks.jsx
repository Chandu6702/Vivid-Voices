"use client"
import { ThemeContext } from '@/context/ThemeContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const status = "authenticated";
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {status === "notauthenticated" ? (
                <Link href='/login'>Login</Link>
            ) : (
                <>
                    <Link href='/write'>Write</Link>
                    <span className="cursor-pointer">Logout</span>
                </>
            )}

            {/* Hamburger Icon */}
            <div
                onClick={() => setOpen(!open)}
                className='hamburger cursor-pointer relative z-50 w-5 h-4 flex flex-col justify-between sm:hidden items-center'
            >
                <div
                    className={`line w-full h-[2px] transition-transform duration-300 ${theme === "dark" ? "bg-white" : "bg-black"} ${open ? "transform rotate-45 translate-y-[9px]" : ""}`}
                ></div>
                <div
                    className={`line w-full h-[2px] transition-opacity duration-300 ${theme === "dark" ? "bg-white" : "bg-black"} ${open ? "opacity-0" : ""}`}
                ></div>
                <div
                    className={`line w-full h-[2px] transition-transform duration-300 ${theme === "dark" ? "bg-white" : "bg-black"} ${open ? "transform -rotate-45 -translate-y-[5px]" : ""}`}
                ></div>
            </div>

            {/* Dropdown Menu */}
            {open && (
                <div
                    className={`absolute w-48 h-72 top-14 right-2 text-2xl font-bold bg-opacity-50 shadow-lg rounded-xl p-2 flex flex-col items-center justify-center gap-3 sm:hidden ${theme === "light" ? "bg-neutral-800/5 backdrop-blur-lg text-black" : "bg-white/5 backdrop-blur-md text-white"}`}
                >
                    <Link href="/" className="mb-2 text-lg">Home</Link>
                    <Link href="/about" className="mb-2 text-lg">About</Link>
                    <Link href="/contact" className="mb-2 text-lg">Contact</Link>
                    {status === "notauthenticated" ? (
                        <Link href='/login' className="mb-2 text-lg">Login</Link>
                    ) : (
                        <>
                            <Link href='/write' className="mb-2 text-lg">Write</Link>
                            <span className="cursor-pointer text-lg">Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default AuthLinks;
