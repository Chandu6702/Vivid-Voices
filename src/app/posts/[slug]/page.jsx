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
        <div className='container mt-4 flex flex-col'>
            <div className="info sm:flex gap-12">
                <div className="textContainer flex-3 xl:flex-4 flex flex-col gap-8">
                    <h1 className='title text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-justify'>{data?.title}</h1>
                    <div className="user flex gap-3">
                        {data?.user?.image && (
                            <div className="userImg relative w-12 h-12 rounded-full">
                                <Image src={data.image} alt='' fill className='object-cover rounded-full' />
                            </div>
                        )}
                        <div className="userText flex flex-col  text-slate-500">
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
                    <div className="imageContainer relative flex-3 mt-4  h-48 sm:h-52 lg:h-60">
                        <Image src={data.img} fill className='img object-cover ' />
                    </div>
                )}
            </div>
            <div className="content flex gap-10">
                <div className="post flex flex-col flex-5">
                    <div className='desc flex flex-col gap-5 mt-10 text-justify text-sm sm:text-base lg:text-lg' dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <div className='comments'>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage