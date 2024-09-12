import Link from 'next/link'
import React from 'react'

const MenuCategories = () => {
    return (
        <div className="categories flex flex-wrap items-center gap-2 lg:gap-3 text-black">
            <Link href="/blog?cat=style" className="flex items-center justify-center text-xs  h-[1.5rem] w-[2.8rem]   p-3  rounded-lg bg-pink-100 hover:bg-pink-200">
                Style
            </Link>
            <Link href="/blog?cat=fashion" className="flex items-center justify-center text-xs  h-[1.5rem] w-[2.8rem]   p-3  rounded-lg bg-purple-100 hover:bg-purple-200">
                Fashion
            </Link>
            <Link href="/blog?cat=food" className="flex items-center h-[1.5rem] w-[2.8rem]  justify-center text-xs   p-3  rounded-lg bg-yellow-100 hover:bg-yellow-200">
                Food
            </Link>
            <Link href="/blog?cat=travel" className="flex items-center h-[1.5rem] w-[2.8rem]  justify-center text-xs   p-3  rounded-lg bg-blue-100 hover:bg-blue-200">
                Travel
            </Link>
            <Link href="/blog?cat=culture" className="flex items-center h-[1.5rem] w-[2.8rem]  justify-center text-xs   p-3  rounded-lg bg-green-100 hover:bg-green-200">
                Culture
            </Link>
            <Link href="/blog?cat=coding" className="flex items-center h-[1.5rem] w-[2.8rem]  justify-center text-xs   p-3  rounded-lg bg-red-100 hover:bg-red-200">
                Coding
            </Link>
        </div>
    )
}

export default MenuCategories