import React from 'react'
import Image from "next/image"
import ProfileImg from "../public/img/projects/ank6.jpg"

const Banner = () => {
  return (
    <div className='py-10 flex flex-col gap-10 md:flex-row  items-center  '>
    <div className="h-60 w-60 rounded-full bg-black m-20 ">
        <Image className='w-full h-full rounded-full border-[1px] border-indigo-400 p-2 object-cover ' src={ProfileImg}  alt="ProfileImg"/>

        
    </div>

    <div className='w-3/4 items-center'>
        <h1 className='text-5xl text-white font-bold'>ANKIT BADHANI</h1>
        <h3 className='text-3xl  text-gray-200'>Full Stack Developer</h3>
        <p className=''>
        Hello my name is Ankit Badhani . 

I am looking for full stack development role in which I can use my skills and experiences to develop web based projects.
I have very good communication skills and can interact with anyone confidently.
        </p>
    </div>
    <hr />
    </div>
   
  )
}

export default Banner