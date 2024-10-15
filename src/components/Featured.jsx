"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Featured = () => {
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const fetchMostViewedPost = async () => {
      const response = await fetch('/api/posts/most-viewed');
      const post = await response.json();
      setFeaturedPost(post);
    };

    fetchMostViewedPost();
  }, []);

  if (!featuredPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className='featured w-full mt-8 p-2 sm:p-0'>
      <h1 className='title text-2xl'>
        <strong className='lg:text-3xl'>Hey, Welcome To Vivid Voices!</strong> Discover stories and creative ideas here.
      </h1>
      <div className='post mt-5 sm:mt-8 sm:flex gap-5 lg:gap-10 justify-between w-full'>
        <div className='imageContainer flex-1 relative h-56 sm:h-60 lg:h-80'>
          <Image src={featuredPost.img} alt={featuredPost.title} fill priority className='object-cover' />
        </div>
        <div className="textContainer mt-2 sm:mt-0 relative flex flex-1 flex-col text-justify gap-3 overflow-hidden lg:gap-6">
          <h1 className='postTitle text-xl font-bold lg:text-2xl lg:mt-3'>{featuredPost.title}</h1>
          <p className='postDesc text-base font-normal lg:text-xl'>{featuredPost.desc.substring(0, 300)}...</p>
          <Link href={`/posts/${featuredPost.slug}`} >
            <button className='btn px-2 py-1 border-none rounded-lg w-max bg-sky-200 text-black text-sm hover:cursor-pointer'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
