import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full sm:flex justify-between border-t-2 border-slate-300/30 gap-10 mt-8 mb-3'>
      <div className="info flex flex-1 flex-col gap-4 mt-2">
        <div className='logo flex items-center gap-1'>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className='logoText text-lg font-semibold'>Myblog</h1>
        </div>
        <p className='desc text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem at asperiores ipsa explicabo porro nostrum sint error quis quasi! Voluptatibus commodi ea illo sed repellendus rem, iure aspernatur option?</p>
        <div className="icons flex gap-3">
          <Image src="/facebook.png" alt="facebook" width={20} height={20} />
          <Image src="/instagram.png" alt="instagram" width={20} height={20} />
          <Image src="/youtube.png" alt="youtube" width={20} height={20} />
        </div>
      </div>
      <div className='links flex-1 flex justify-between sm:justify-around mt-5'>
        <div className='list flex flex-col text-base font-medium'>
          <span className='listTitle gap-3 text-lg font-semibold'>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className='tags flex flex-col'>
          <span className='tagsList gap-3 text-lg font-semibold'>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className='social flex flex-col'>
          <span className='socialList gap-3 text-lg font-semibold'>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer