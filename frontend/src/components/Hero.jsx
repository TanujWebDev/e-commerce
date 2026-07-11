import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-zinc-100 rounded-md overflow-hidden bg-white shadow-sm'>
        {/* Hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 px-8 sm:px-12 bg-zinc-50/30'>
         <div className='text-zinc-800 flex flex-col items-start'>
            <div className='flex items-center gap-2 mb-2'>
                <p className='w-6 h-[1.5px] bg-zinc-400'></p>
                <p className='font-semibold text-xs tracking-widest text-zinc-400 uppercase'>OUR BESTSELLERS</p>
            </div>
            <h1 className='text-3xl sm:py-3 lg:text-5xl font-light tracking-widest leading-tight text-zinc-900 uppercase mb-4'>
              Latest <br /> Arrivals
            </h1>
            <div className='flex items-center gap-2 mt-2'>
                <Link to="/collection" className='font-semibold text-xs tracking-widest border border-zinc-300 px-6 py-3 rounded-md hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer'>
                  SHOP THE COLLECTION
                </Link>
            </div>
         </div>
        </div>

        {/* Hero right side */}
        <img className="w-full sm:w-1/2 object-cover object-center max-h-[480px]" src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
