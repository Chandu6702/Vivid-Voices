"use client";
import { ThemeContext } from '@/context/ThemeContext';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const AuthLinks = ({ showWriteAndLogout }) => {
    const [open, setOpen] = useState(false);
    const status = "authenticated";
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {/* For mobile: Hamburger Icon */}
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

            {/* Dropdown Menu for mobile */}
            {open && (
                <div
                    className={`absolute w-48 h-72 top-14 right-2 text-xl font-extrabold shadow-lg rounded-xl p-2 flex flex-col items-center justify-center gap-3 sm:hidden z-50 ${theme === "light" ? "bg-neutral-800/5 backdrop-blur-lg text-black" : "bg-white/5 backdrop-blur-lg text-white"}`}
                >
                    <Link href="/" className="mb-2">Home</Link>
                    <Link href="/about" className="mb-2">About</Link>
                    <Link href="/contact" className="mb-2">Contact</Link>

                    {/* Show Write and Logout in mobile menu */}
                    {status === "authenticated" ? (
                        <>
                            <Link href='/write' className="mb-2">Write</Link>
                            <span className="cursor-pointer" onClick={signOut}>Logout</span>
                        </>
                    ) : (
                        <Link href='/login' className="mb-2">Login</Link>
                    )}
                </div>
            )}

            {/* For non-mobile screens */}
            {showWriteAndLogout && (
                <>
                    {/* Show Write and Logout in the navbar for non-mobile screens */}
                    {status === "authenticated" ? (
                        <>
                            <Link href='/write' className="cursor-pointer">Write</Link>
                            <span className="cursor-pointer" onClick={signOut}>Logout</span>
                        </>
                    ) : (
                        <Link href='/login' className="mr-4">Login</Link>
                    )}
                </>
            )}
        </>
    );
};

export default AuthLinks;
