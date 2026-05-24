import React from 'react'

const CabwayOne = () => {
  return (
    <section className='bg-black text-white'>
      <div className='flex flex-col md:flex-row items-center justify-between px-5 md:px-10 lg:px-20 py-12 md:py-16 gap-8 md:gap-0 max-w-screen-xl mx-auto'>
        <div className='flex flex-col gap-4 md:max-w-xs lg:max-w-sm w-full md:w-auto text-center md:text-left'>
          <h2 className='text-2xl md:text-3xl font-bold text-white'>
            Cabway One
          </h2>
          <p className='text-sm text-gray-300 leading-relaxed'>
            One membership for member pricing and experiences on rides, deliveries, and more.
          </p>
          <div className='flex justify-center md:justify-start'>
            <button className='mt-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 w-fit'>
              Try it now
            </button>
          </div>
        </div>

        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <img
            src='/cabwayone.webp'
            alt='Cabway One membership'
            className='w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl'
          />
        </div>
      </div>
    </section>
  )
}

export default CabwayOne
