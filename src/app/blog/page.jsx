import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

const BlogPage = () => {
    return (
        <div className='blogpage '>
            <h1 className='title w-full text-black text-2xl text-center font-semibold p-2 mt-5 bg-pink-100'>
                Style Blog
            </h1>
            <div className='content flex justify-between gap-12'>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage