import Image from 'next/image'
import React from 'react'

const Featured = () => {
    return (
        <div className='featured w-full mt-8 p-2 sm:p-0'>
            <h1 className='title text-2xl'>
                <strong className='lg:text-3xl'>Hey, Chandu here!</strong> Discover my stories and creative ideas.
            </h1>
            <div className='post  mt-5 sm:mt-8 sm:flex gap-5 lg:gap-10 justify-between w-full'>
                <div className='imageContainer flex-1 relative h-56 sm:h-60 lg:h-80'>
                    <Image src='/p1.jpeg' alt="" fill priority className='object-cover' />
                </div>
                <div className="textContainer mt-2 sm:mt-0 relative flex flex-1 flex-col text-justify gap-3 overflow-hidden lg:gap-6">
                    <h1 className='postTitle text-xl font-bold lg:text-2xl lg:mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit amet sit.</h1>
                    <p className='postDesc  text-base font-normal lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur, soluta numquam omnis ratione velit animi sit rem facere, molestias eveniet adipisci neque non dolor tenetur eligendi. Dolore, perspiciatis at.</p>
                    <button className='btn px-2 py-1 border-none rounded-lg w-max bg-sky-200 text-black text-sm'>Read More</button>
                </div>
            </div>
        </div>

    )
}

export default Featured