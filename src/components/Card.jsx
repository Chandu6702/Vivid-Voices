import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Card = ({ key, item }) => {
  return (
    <div className='card w-full mb-10 flex gap-12 items-center' key={key}>
      <div className='post w-full sm:flex gap-4'>
        {item.img &&
          <div className="imageContainer sm:w-2/5 relative flex flex-1 items-center justify-center">
            <div className="relative w-full h-0 pt-[56.25%]">
              <Image
                src={item.img}
                alt=''
                fill
                className='absolute inset-0 w-1/2 h-3/5 object-cover rounded-lg shadow-lg'
              />
            </div>
          </div>
        }
        <div className="textContainer sm:w-3/5 flex-1 flex-col items-center">
          <div className='detail flex gap-8  items-center mt-1 '>
            <span className='date text-sm w-max text-slate-500 font-semibold'>{item.createdAt.substring(0, 10)}</span>
            <span className='category text-base w-max text-rose-400 font-semibold'>{item.catSlug}</span>
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