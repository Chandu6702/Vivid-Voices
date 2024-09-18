"use client";

import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className='comment min-w-full'>
      <h1 className='title mt-8 mb-2 text-2xl font-bold'>
        Comments
      </h1>
      {status === "authenticated" ? (
        <div className='write flex flex-col sm:flex sm:flex-row gap-3 sm:items-center justify-between'>
          <textarea onChange={(e) => setDesc(e.target.value)} placeholder='write a comment...' className='w-full p-2 rounded-md bg-[#EFEFEF] border-none text-black outline-none'></textarea>
          <button className='btn bg-teal-600 w-max h-max px-2 py-1 cursor-pointer text-white rounded-md' onClick={handleSubmit}>send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      {isLoading
        ? "loading"
        : data?.map((item) => (
          <div key={item._id} className="user flex flex-col gap-3 mt-6">
            <div className='flex items-center gap-3'>
              {item?.user?.image && (
                <div className="userImg relative w-10 h-10 rounded-full flex-shrink-0">
                  <Image src={item.user.image} alt='' fill className='object-cover rounded-full' />
                </div>
              )}
              <div className="userText flex flex-col text-slate-500">
                <span className='username text-sm lg:text-base font-bold'>
                  {item.user.name}
                </span>
                <span className='date text-xs lg:text-sm font-semibold'>
                  {item.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
            <div>
              <p className='text-xs sm:text-sm font-normal text-justify'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
