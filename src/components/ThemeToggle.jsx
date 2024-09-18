"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className={`relative w-10 h-5 rounded-xl cursor-pointer flex justify-between items-center ${theme === "dark" ? "bg-white" : "bg-[#0f172a]"
        }`}
    >
      <Image src="/moon.png" alt="moon icon" width={14} height={14} />
      <div
        className={`ball absolute w-4 h-4 rounded-full transition-all duration-300 ${theme === "dark" ? "left-[1px] bg-[#0f172a]" : "right-[1px] bg-white"
          }`}
      ></div>
      <Image src="/sun.png" alt="sun icon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
