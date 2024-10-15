import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import AuthLinks from './AuthLinks';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-slate-300/30 h-12 my-1">
      {/* Social Icons: Hidden on tablets and smaller */}
      <div className="social flex-1 gap-2 cursor-pointer hidden lg:flex">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>

      {/* Logo: Centered by default, moves left on tablet */}
      <div className="logo flex-1 text-left lg:text-center text-xl md:text-3xl font-bold">
        Vivid Voices
      </div>

      {/* Links: Shown on desktop, hidden on mobile */}
      <div className="links flex-1 items-center justify-end text-lg gap-3 lg:gap-2 cursor-pointer hidden sm:flex">
        <ThemeToggle />
        <Link href="/">Home</Link>
        <Link href="/blog">Blogs</Link>
        {/* <Link href="/contact">Contact</Link> */}
        {/* <Link href="/about">About</Link> */}
        <AuthLinks showWriteAndLogout={true} />
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger sm:hidden items-center flex gap-3">
        <ThemeToggle />
        <AuthLinks showWriteAndLogout={false} />
      </div>
    </div>
  );
};

export default Navbar;
