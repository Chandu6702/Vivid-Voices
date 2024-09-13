import React from 'react'
import Pagination from './Pagination'
import Card from './Card'

const CardList = () => {
    return (
        <div className='container flex-5 mt-7'>
            <h1 className='title mt-8 mb-4 text-2xl font-bold'>Recent Posts</h1>
            <div className='posts flex flex-col gap-3'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList