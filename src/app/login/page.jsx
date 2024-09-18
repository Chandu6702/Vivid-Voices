"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Navigate once authenticated
    }
  }, [status, router]); // Dependency array ensures this runs when status changes

  if (status === "loading") {
    return <div className="loading">Loading....</div>;
  }

  return (
    <div className='flex items-center justify-center h-svh'>
      <div className='wrapper flex flex-col bg-gray-700/25 py-28 px-16 gap-12 rounded-lg'>
        <div className="socialButton1 p-2 sm:p-4 rounded-md text-white text-sm sm:text-xl text-center bg-[#ff5555ed] cursor-pointer" onClick={() => signIn("google")}>Sign in with Google</div>
        <div className="socialButton2 p-2 sm:p-4 rounded-md text-white text-sm sm:text-xl text-center bg-[#111111ed] cursor-pointer" onClick={() => signIn("github")}>Sign in with Github</div>
        <div className="socialButton3 p-2 sm:p-4 rounded-md text-white text-sm sm:text-xl text-center bg-[#087deaed] cursor-pointer" onClick={() => signIn("facebook")}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default Login;
