import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryList = () => {
    return (
        <div className="categoryList">
            <h1 className="title mt-8 mb-4 text-2xl font-bold">Popular Categories</h1>
            <div className="categories flex flex-wrap justify-around items-center gap-5 text-black">
                <Link href="/blog?cat=style" className="flex items-center justify-center h-[3rem] w-[8rem] gap-2 p-2 rounded-lg bg-pink-100 hover:bg-pink-200">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <Image
                            src="/style.png"
                            alt="Style"
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                    Style
                </Link>
                <Link href="/blog?cat=fashion" className="flex items-center justify-center h-[3rem] w-[8rem] gap-2 p-2 rounded-lg bg-purple-100 hover:bg-purple-200">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <Image
                            src="/fashion.png"
                            alt="Fashion"
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                    Fashion
                </Link>
                <Link href="/blog?cat=food" className="flex items-center h-[3rem] w-[8rem] justify-center gap-2 p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <Image
                            src="/food.png"
                            alt="Food"
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                    Food
                </Link>
                <Link href="/blog?cat=travel" className="flex items-center h-[3rem] w-[8rem] justify-center gap-2 p-2 rounded-lg bg-blue-100 hover:bg-blue-200">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <Image
                            src="/travel.png"
                            alt="Travel"
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                    Travel
                </Link>
                <Link href="/blog?cat=culture" className="flex items-center h-[3rem] w-[8rem] justify-center gap-2 p-2 rounded-lg bg-green-100 hover:bg-green-200">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <Image
                            src="/culture.png"
                            alt="Culture"
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                    Culture
                </Link>
                <Link href="/blog?cat=coding" className="flex items-center h-[3rem] w-[8rem] justify-center gap-2 p-2 rounded-lg bg-red-100 hover:bg-red-200">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <Image
                            src="/coding.png"
                            alt="Coding"
                            width={32}
                            height={32}
                            className="object-cover h-10"
                        />
                    </div>
                    Coding
                </Link>
            </div>
        </div>
    );
};

export default CategoryList;
