import React from 'react'
import { MapPin, Clock, Navigation, ChevronDown, Tag } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='flex flex-col md:flex-row items-start md:items-center px-5 md:px-10 lg:px-20 py-8 md:py-12 gap-8 md:gap-12'>
      <div className='w-full md:w-1/2 lg:w-5/12 flex flex-col gap-5'>
        <div className='flex items-center gap-2 text-sm text-gray-700'>
          <MapPin size={16} className='text-black flex-shrink-0' />
          <span className='font-medium'>Kochi, IN</span>
          <a href='#' className='underline underline-offset-2 hover:text-black transition-colors duration-200'>
            Change city
          </a>
        </div>

        <h1 className='text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight'>
          Request a ride for<br />now or later
        </h1>

        <div className='flex items-start gap-2 text-sm text-gray-700'>
          <Tag size={16} className='text-green-600 flex-shrink-0 mt-0.5' />
          <p>
            <span className='font-semibold'>Up to 50% off your first 5 Cabway rides.</span> T&Cs apply.*
            <br />*Valid within 15 days of signup.
          </p>
        </div>

        <div>
          <button className='flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-black text-sm font-medium px-4 py-3 rounded-full'>
            <Clock size={16} />
            Pickup now
            <ChevronDown size={14} className='ml-1' />
          </button>
        </div>

        <div className='flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-sm'>
          <div className='flex items-center gap-3 bg-gray-100 px-4 py-4 border-b border-gray-200'>
            <span className='w-3 h-3 rounded-full border-2 border-black flex-shrink-0' />
            <input
              type='text'
              placeholder='Pickup location'
              className='flex-1 bg-transparent text-sm text-gray-500 placeholder-gray-400 outline-none'
            />
            <Navigation size={18} className='text-black flex-shrink-0' />
          </div>
          <div className='flex items-center gap-3 bg-gray-100 px-4 py-4'>
            <span className='w-3 h-3 rounded-sm border-2 border-black flex-shrink-0' />
            <input
              type='text'
              placeholder='Dropoff location'
              className='flex-1 bg-transparent text-sm text-gray-500 placeholder-gray-400 outline-none'
            />
          </div>
        </div>

        <button className='w-full md:w-auto bg-black text-white text-sm font-semibold px-8 py-4 rounded-xl hover:bg-neutral-800 transition-colors duration-300'>
          See prices
        </button>
      </div>

      <div className='w-full md:w-1/2 lg:w-7/12'>
        <img
          src='/landingpagebanner.webp'
          alt='Cabway - Request a ride'
          className='w-full h-64 md:h-[420px] lg:h-[480px] object-cover rounded-2xl'
        />
      </div>
    </section>
  )
}

export default HeroSection
