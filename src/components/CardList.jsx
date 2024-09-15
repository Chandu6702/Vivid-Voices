import React from 'react'
import Pagination from './Pagination'
import Card from './Card'

const getData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const CardList = async ({ page, cat }) => {
    const { posts, count } = await getData(page, cat);
    const POST_PER_PAGE = 3;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className='container flex-5 mt-5 sm:mt-7'>
            <h1 className='title mt-4 sm:mt-8 mb-4 text-2xl font-bold'>Recent Posts</h1>
            <div className='posts flex flex-col gap-3'>
                {posts?.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}

export default CardList