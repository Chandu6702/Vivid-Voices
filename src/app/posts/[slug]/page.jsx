import Comments from '@/components/Comments'
import Menu from '@/components/Menu'
import Image from 'next/image'
import React from 'react'


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  return (
    <div className='container w-full mt-4 flex flex-col'>
      <div className="info w-full sm:flex gap-10">
        <div className="textContainer min-w-[50%] min-h-max flex-1 xl:flex-4 flex flex-col gap-8">
          <h1 className='title text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-justify'>
            {data?.title}
          </h1>
          <div className="user flex gap-3">
            {data?.user?.image && (
              <div className="userImg relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={data.user.image} alt='' fill className='object-cover' />
              </div>
            )}
            <div className="userText flex flex-col text-slate-500">
              <span className='username text-base lg:text-lg font-bold'>
                {data?.user.name}
              </span>
              <span className='date text-sm lg:text-base font-semibold'>
                13.09.2024
              </span>
            </div>
          </div>
        </div>

        {data?.img && (
          <div className="imageContainer min-w-[40%] min-h-max relative flex flex-1 items-center justify-center mt-4">
            <div className="relative w-full h-0 pt-[56.25%]">
              <Image
                src={data.img}
                alt=''
                fill
                className='absolute inset-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg'
              />
            </div>
          </div>
        )}
      </div>


      <div className="content w-full flex gap-10">
        <div className="post flex w-full flex-col flex-5">
          <div className='desc flex w-full flex-col gap-5 mt-10 text-justify text-sm sm:text-base lg:text-lg' />
          <p>{data?.desc}</p>
          <div className='comments w-full'>
            <Comments postSlug={slug} />
          </div>
        </div>
        {/* <Menu /> */}
      </div>
    </div>
  )
}

export default SinglePage