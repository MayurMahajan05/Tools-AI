import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'
import {useUser} from '@clerk/clerk-react'

const Hero = () => {

const navigate = useNavigate();
const {user} = useUser()

    return (
        <div className=' bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen  px-4 md:px-20 xl:px-32 w-full items-center inline-flex flex-col justify-center relative  
      '>
            <div className='text-center mb-6' >

                <h1 className=' text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl py-5 font-semibold mx-auto leading-[1.2]  ' >Create amazing content <br />with <span className='text-primary' > AI tools</span> </h1>

                <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl mx-auto max-sm:text-xs text-gray-600' >Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
            </div>

            <div className='flex gap-4 flex-wrap justify-center text-sm max-sm:text-xs  ' >
                <button onClick={()=> user && navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer '  >Start Creating now</button>
                <button className=' bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer ' >Watch demo</button>
            </div>


            <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600 ' >
                <img className='h-8' src={assets.user_group} alt="" />Leverages Trusted Gemini model 
            </div>

        </div>
    )
}

export default Hero
