import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Card = ({ key, item }) => {
    return (
        <div className='card mb-10 flex gap-12 items-center' key={key}>
            <div className='post  sm:flex gap-4'>
                {item.img &&
                    <div className='imageContainer flex-1 relative h-44 sm:h-56 lg:h-64 xl:h-[17rem]'>
                        <Image src={item.img} alt="" fill priority className='object-cover' />
                    </div>
                }
                <div className="textContainer text-pretty flex-1 flex-col items-center">
                    <div className='detail flex gap-5 items-center mt-1 xl:mt-8'>
                        <span className='date text-sm text-slate-500 font-semibold'>{item.createdAt.substring(0, 10)}</span>
                        <span className='category text-base text-rose-400 font-semibold'>{item.catslug}</span>
                    </div>
                    <Link href={`/posts/${item.slug}`} >
                        <h1 className='text-base text-justify my-2 font-bold lg:text-lg'>
                            {item.title}
                        </h1>
                    </Link>
                    <p className='text-xs text-justify font-medium mb-2 lg:text-sm'>
                        {item.desc.substring(0, 60)}
                    </p>
                    <Link href={`/posts/${item.slug}`} className='border-b-[1px] pb-[1px] border-rose-400 text-sm w-max'>
                        Read More...
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;