"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className='writeContainer w-full max-w-6xl mx-auto p-4 sm:p-10'>
            <input
                type="text"
                placeholder='Title'
                className='title mb-6 text-3xl sm:text-5xl lg:text-6xl outline-none border-none bg-transparent placeholder:text-[#b3b3b1] p-2 sm:p-4 w-full'
            />

            <div className='editor relative flex flex-col w-full gap-4'>
                <div className='flex gap-2 sm:gap-4 items-center p-2 sm:p-4'>
                    <button
                        className='btn flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-gray-400 cursor-pointer hover:bg-gray-200/20'
                        onClick={() => setOpen(!open)}
                    >
                        <div className='w-6 h-6 flex justify-center items-center rounded-full'>&#128930;</div>
                    </button>

                    {open && (
                        <div className="add flex justify-center items-center gap-2 sm:gap-4">
                            <button className='addBtn flex justify-center items-center w-8 h-8  sm:w-10 sm:h-10 rounded-full bg-transparent border border-[#1a8917] cursor-pointer hover:bg-[#e9f5e7f8]'>
                                <Image src='/image.png' alt="" width={18} height={18} />
                            </button>
                            <button className='addBtn flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-[#1a8917] cursor-pointer hover:bg-[#e9f5e7f8]'>
                                <Image src='/external.png' alt="" width={18} height={18} />
                            </button>
                            <button className='addBtn flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-transparent border border-[#1a8917] cursor-pointer hover:bg-[#e9f5e7f8]'>
                                <Image src='/video.png' alt="" width={18} height={18} />
                            </button>
                        </div>
                    )}

                    <button className='publish ml-auto py-2 px-2 text-sm sm:text-base sm:px-6 rounded bg-[#1a8917] text-white hover:bg-green-700'>
                        Publish
                    </button>
                </div>

                <ReactQuill
                    theme='bubble'
                    value={value}
                    onChange={setValue}
                    placeholder='Tell your story...'
                    className='textArea w-full h-40 sm:h-64 p-2 sm:p-4 rounded-lg'
                />
            </div>
        </div>
    )
}

export default WritePage;
