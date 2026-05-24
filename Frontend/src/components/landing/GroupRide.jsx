import React from 'react'
import { ArrowLeft, UserPlus, AlignJustify } from 'lucide-react'

const GroupRide = () => {
  return (
    <section className='px-5 md:px-10 lg:px-20 py-12 md:py-16 bg-white'>
      <div className='flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-screen-xl mx-auto'>

        {/* Left: Mock UI Card */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-start'>
          <div className='relative w-full max-w-sm'>

            {/* Phone-style card */}
            <div className='bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden'>

              {/* Top bar */}
              <div className='flex items-center justify-between px-5 py-4 border-b border-gray-100'>
                <div className='flex items-center gap-3'>
                  <div className='w-1 h-6 bg-black rounded-full' />
                  <ArrowLeft size={18} className='text-black' />
                  <span className='text-base font-semibold text-black'>Brian's group ride</span>
                </div>
                <UserPlus size={18} className='text-black' />
              </div>

              {/* Body */}
              <div className='px-5 py-5 flex flex-col gap-4'>
                <p className='text-sm font-semibold text-black'>Set pickup order</p>

                {/* Person 1 */}
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center flex-shrink-0'>
                    1
                  </div>
                  <div className='flex-1 flex flex-col gap-1.5'>
                    <span className='text-sm font-medium text-black'>Brian</span>
                    <div className='h-2 bg-gray-200 rounded-full w-3/4' />
                  </div>
                  <AlignJustify size={16} className='text-gray-400' />
                </div>

                {/* Person 2 */}
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center flex-shrink-0'>
                    2
                  </div>
                  <div className='flex-1 flex flex-col gap-1.5'>
                    <span className='text-sm font-medium text-black'>Sarah</span>
                    <div className='h-2 bg-gray-200 rounded-full w-2/3' />
                  </div>
                  <AlignJustify size={16} className='text-gray-400' />
                </div>
              </div>

              {/* Bottom bar */}
              <div className='flex justify-center gap-3 px-5 py-4 border-t border-gray-100'>
                <div className='w-1 h-8 bg-black rounded-full' />
                <div className='w-1 h-8 bg-black rounded-full' />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className='w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-black leading-tight'>
            Ride with friends<br />seamlessly
          </h2>
          <p className='text-sm text-gray-600 leading-relaxed max-w-sm mx-auto md:mx-0'>
            Riding with friends just got easier: set up a group ride in the Cabway app, invite your friends, and arrive at your destination. Friends who ride together save together.
          </p>
          <div className='flex justify-center md:justify-start'>
            <a href='#' className='text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-600 transition-colors duration-200'>
              Learn more
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GroupRide
