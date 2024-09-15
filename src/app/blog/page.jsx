import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

const BlogPage = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;
    return (
        <div className='blogpage '>
            <h1 className='title w-full text-black text-2xl text-center font-semibold p-2 mt-5 bg-pink-100 capitalize'>
                {cat} Blog
            </h1>
            <div className='content flex justify-between gap-12'>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage