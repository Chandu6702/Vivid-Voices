import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full sm:flex justify-between border-t-2 border-slate-300/30 gap-10 mt-8 mb-3'>
      <div className="info flex flex-1 flex-col gap-4 mt-2">
        <div className='logo flex items-center gap-1'>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className='logoText text-lg font-semibold'>Vivid Voices</h1>
        </div>
        <p className='desc text-sm text-justify'>Vivid Voices © 2024. All Rights Reserved.<br />
          At Vivid Voices, we celebrate the art of storytelling and creative expression. Our platform is a home for writers, thinkers, and dreamers to share their unique perspectives, ignite conversations, and inspire change. Whether you're here to read or write, you're a part of a global community that believes in the power of words.
          Join us on this journey and let your voice be heard.</p>
        <div className="icons flex gap-3">
          <Image src="/facebook.png" alt="facebook" width={20} height={20} />
          <Image src="/instagram.png" alt="instagram" width={20} height={20} />
          <Image src="/youtube.png" alt="youtube" width={20} height={20} />
        </div>
      </div>
      <div className='links flex-1 flex justify-between sm:justify-around mt-5'>
        <div className='list flex flex-col text-base font-medium'>
          <span className='listTitle gap-3 text-lg font-semibold underline'>Links</span>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className='tags flex flex-col'>
          <span className='tagsList gap-3 text-lg font-semibold underline'>Tags</span>
          <Link href="/blog?cat=style">Style</Link>
          <Link href="/blog?cat=fashion">Fashion</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
        </div>
        <div className='social flex flex-col'>
          <span className='socialList gap-3 text-lg font-semibold underline'>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer