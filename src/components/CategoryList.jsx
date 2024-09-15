import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};


const CategoryList = async () => {
    const categories = await getData();
    const colorPalette = [
        'bg-pink-100 hover:bg-pink-200',
        'bg-purple-100 hover:bg-purple-200',
        'bg-yellow-100 hover:bg-yellow-200',
        'bg-blue-100 hover:bg-blue-200',
        'bg-green-100 hover:bg-green-200',
        'bg-red-100 hover:bg-red-200',
    ];

    return (
        <div className="categoryList">
            <h1 className="title mt-8 mb-4 text-2xl font-bold">Popular Categories</h1>
            <div className="categories flex flex-wrap justify-around items-center gap-5 text-black">
                {categories?.map((category, index) => (
                    <Link
                        key={category.id}
                        href={`/blog?cat=${category.slug}`}
                        className={`flex items-center justify-center h-[3rem] w-[8rem] gap-2 p-2 rounded-lg ${colorPalette[index % colorPalette.length]
                            }`}
                    >
                        <div className="w-8 h-8 overflow-hidden rounded-full">
                            <Image
                                src={`${category.img}`}
                                alt={category.name}
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                        </div>
                        {category.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
