import Menu from '@/components/Menu'
import Image from 'next/image'
import React from 'react'

const SinglePage = () => {
    return (
        <div className='container mt-4'>
            <div className="info flex gap-12">
                <div className="textContainer flex-3 xl:flex-4 flex flex-col gap-8 lg:gap-10">
                    <h1 className='title text-lg lg:text-xl xl:text-2xl font-bold text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officiis repudiandae ab amet rerum assumenda perferendis ducimus? Vitae,</h1>
                    <div className="user flex gap-3">
                        <div className="userImg relative w-12 h-12 rounded-full">
                            <Image src="/p1.jpeg" alt='' fill className='object-cover rounded-full' />
                        </div>
                        <div className="userText flex flex-col  text-slate-500">
                            <span className='username text-base lg:text-lg font-bold'>
                                John Doe
                            </span>
                            <span className='date text-sm lg:text-base font-semibold'>
                                13.09.2024
                            </span>
                        </div>
                    </div>
                </div>
                <div className="imageContainer relative flex-3 h-48 sm:h-52 lg:h-60">
                    <Image src="/p1.jpeg" fill className='img object-cover ' />
                </div>
            </div>
            <div className="content flex gap-10">
                <div className="post flex flex-5 mt-10">
                    <div className='desc flex flex-col gap-5 text-justify'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore at voluptas? Dolorum aperiam neque doloremque, autem magni temporibus reprehenderit quam provident, beatae quibusdam labore quos possimus excepturi, quaerat deleniti?</p>
                        <h2 className='text-lg font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore at voluptas? Dolorum aperiam neque doloremque, autem magni temporibus reprehenderit quam provident, beatae quibusdam labore quos possimus excepturi, quaerat deleniti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore at voluptas? Dolorum aperiam neque doloremque, autem magni temporibus reprehenderit quam provident, beatae quibusdam labore quos possimus excepturi, quaerat deleniti?</p>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage