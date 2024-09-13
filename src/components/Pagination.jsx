import React from 'react'

const Pagination = () => {
    return (
        <div className='pagination flex justify-between'>
            <button className='prev bg-rose-600 px-2 py-1 rounded-lg text-base'>Prev</button>
            <button className='next bg-rose-600 px-2 py-1 rounded-lg text-base'>Next</button>
        </div>
    )
}

export default Pagination