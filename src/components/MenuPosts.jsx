import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuPosts = ({ withImage }) => {
    return (
        <div className="items flex flex-col gap-2 lg:gap-4">
            <Link href="/" passHref>
                <div className="item flex items-center gap-4 p-2 rounded-lg cursor-pointer">
                    {withImage &&
                        <div className="imageContainer flex-shrink-0 w-12 h-12 overflow-hidden rounded-full">
                            <Image
                                src="/p1.jpeg"
                                alt="Profile Picture"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        </div>}
                    <div className="textContainer flex flex-col gap-1">
                        <span className="text-xs text-center font-medium w-[4rem] h-[1rem] bg-blue-100 hover:bg-blue-200 text-black  rounded-xl px-2">Travel</span>
                        <h4 className="text-xs font-medium ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </h4>
                        <div className="detail flex gap-5 items-center">
                            <span className="category text-xs text-rose-400 font-semibold">John Doe</span>
                            <span className="date text-xs text-slate-500 font-semibold">12.09.2024</span>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/" passHref>
                <div className="item flex items-center gap-4 p-2 rounded-lg cursor-pointer">
                    {withImage &&
                        <div className="imageContainer flex-shrink-0 w-12 h-12 overflow-hidden rounded-full">
                            <Image
                                src="/p1.jpeg"
                                alt="Profile Picture"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        </div>}
                    <div className="textContainer flex flex-col gap-1">
                        <span className="text-xs text-center font-medium w-[4rem] h-[1rem] bg-yellow-100 hover:bg-yellow-200 text-black  rounded-xl px-2">Food</span>
                        <h4 className="text-xs font-medium ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </h4>
                        <div className="detail flex gap-5 items-center">
                            <span className="category text-xs text-rose-400 font-semibold">John Doe</span>
                            <span className="date text-xs text-slate-500 font-semibold">12.09.2024</span>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/" passHref>
                <div className="item flex items-center gap-4 p-2 rounded-lg cursor-pointer">
                    {withImage &&
                        <div className="imageContainer flex-shrink-0 w-12 h-12 overflow-hidden rounded-full">
                            <Image
                                src="/p1.jpeg"
                                alt="Profile Picture"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        </div>}
                    <div className="textContainer flex flex-col gap-1">
                        <span className="text-xs text-center font-medium w-[4rem] h-[1rem] bg-purple-100 hover:bg-purple-200 text-black  rounded-xl px-2">Fashion</span>
                        <h4 className="text-xs font-medium ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </h4>
                        <div className="detail flex gap-5 items-center">
                            <span className="category text-xs text-rose-400 font-semibold">John Doe</span>
                            <span className="date text-xs text-slate-500 font-semibold">12.09.2024</span>
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/" passHref>
                <div className="item flex items-center gap-4 p-2 rounded-lg cursor-pointer">
                    {withImage &&
                        <div className="imageContainer flex-shrink-0 w-12 h-12 overflow-hidden rounded-full">
                            <Image
                                src="/p1.jpeg"
                                alt="Profile Picture"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        </div>}
                    <div className="textContainer flex flex-col gap-1">
                        <span className="text-xs text-center font-medium w-[4rem] h-[1rem] bg-green-100 hover:bg-green-200 text-black  rounded-xl px-2">Culture</span>
                        <h4 className="text-xs font-medium ">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </h4>
                        <div className="detail flex gap-5 items-center">
                            <span className="category text-xs text-rose-400 font-semibold">John Doe</span>
                            <span className="date text-xs text-slate-500 font-semibold">12.09.2024</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts