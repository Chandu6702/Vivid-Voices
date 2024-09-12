import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Card = () => {
    return (
        <div className='card mb-10 flex gap-12 items-center'>
            <div className='post  flex gap-4'>
                <div className='imageContainer flex-1 relative h-56 lg:h-64 xl:h-[17rem]'>
                    <Image src='/p1.jpeg' alt="" fill className='object-cover' />
                </div>
                <div className="textContainer text-pretty flex-1 flex-col items-center">
                    <div className='detail flex gap-5 items-center mt-1 xl:mt-8'>
                        <span className='date text-sm text-slate-500 font-semibold'>12.09.2024</span>
                        <span className='category text-base text-rose-400 font-semibold'>Culture</span>
                    </div>
                    <Link href='/'>
                        <h1 className='text-base text-justify my-2 font-bold lg:text-lg'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        </h1>
                    </Link>
                    <p className='text-xs text-justify font-normal mb-2 lg:text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea consequuntur quibusdam deserunt fugit modi doloribus voluptate assumenda, veniam atque, possimus est similique vitae sunt distinctio tempora quisquam rerum earum quo?
                    </p>
                    <Link href='/' className='border-b-[1px] pb-[1px] border-rose-400 text-sm w-max'>
                        Read More...
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;