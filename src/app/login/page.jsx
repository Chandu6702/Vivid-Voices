import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center h-svh'>
            <div className='wrapper flex flex-col bg-gray-700/25 py-28 px-16 gap-12 rounded-lg'>
                <div className="socialButton1 p-2 sm:p-4 rounded-md text-white text-sm sm:text-xl text-center bg-[#ff5555ed]">Sign in with Google</div>
                <div className="socialButton2 p-2 sm:p-4 rounded-md text-white text-sm sm:text-xl text-center bg-[#111111ed]">Sign in with Github</div>
                <div className="socialButton3 p-2 sm:p-4 rounded-md text-white text-sm sm:text-xl text-center bg-[#087deaed]">Sign in with Facebook</div>
            </div>
        </div>
    )
}

export default Login