"use client";
import React from 'react'
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className='pagination flex justify-between'>
      <button className='prev bg-rose-600 px-2 py-1 rounded-lg text-base disabled:cursor-not-allowed disabled:bg-rose-600/70' disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)}>Prev</button>
      <button className='next bg-rose-600 px-2 py-1 rounded-lg text-base disabled:cursor-not-allowed disabled:bg-rose-600/70' disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>Next</button>
    </div>
  )
}

export default Pagination