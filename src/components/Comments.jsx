import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Comments = () => {
    const status = "authenticated"; // Example status

    return (
        <div className='comment'>
            <h1 className='title mt-8 mb-2 text-2xl font-bold'>
                Comments
            </h1>
            {status === "authenticated" ? (
                <div className='write flex gap-3 items-center'>
                    <textarea placeholder='write a comment...' className='w-full p-2 rounded-md bg-[#EFEFEF] border-none outline-none'></textarea>
                    <button className='btn bg-teal-600 w-max h-max px-2 py-1 cursor-pointer text-white rounded-md'>send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            {[...Array(4)].map((_, index) => (
                <div key={index} className="user flex flex-col gap-3 mt-6">
                    <div className='flex items-center gap-3'>
                        <div className="userImg relative w-10 h-10 rounded-full flex-shrink-0">
                            <Image src="/p1.jpeg" alt='' fill className='object-cover rounded-full' />
                        </div>
                        <div className="userText flex flex-col text-slate-500">
                            <span className='username text-sm lg:text-base font-bold'>
                                John Doe
                            </span>
                            <span className='date text-xs lg:text-sm font-semibold'>
                                13.09.2024
                            </span>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs sm:text-sm font-normal text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet architecto rerum labore reiciendis tenetur, veniam deleniti vitae consectetur fuga. Ad distinctio nobis error autem esse quisquam dolorem sit dolore.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
