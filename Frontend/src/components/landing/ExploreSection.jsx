import React from 'react'

const services = [
  {
    id: 1,
    title: 'Ride',
    description: 'Go anywhere with Cabway. Request a ride, hop in, and go.',
    image: '/top_bar_rides_3d.png',
  },
  {
    id: 2,
    title: 'Reserve',
    description: 'Reserve your ride in advance so you can relax on the day of your trip.',
    image: '/reserve_clock.png',
  },
  {
    id: 3,
    title: 'Intercity',
    description: 'Get convenient, affordable outstation cabs anytime at your door.',
    image: '/intercity.png',
  },
  {
    id: 4,
    title: 'Rentals',
    description: 'Request a trip for a block of time and make multiple stops.',
    image: '/Hourly2021.png',
  },
  {
    id: 5,
    title: 'Bike',
    description: 'Get affordable motorbike rides in minutes at your doorstep.',
    image: '/MotorcycleOrange-249-0.png',
  },
]

const ServiceCard = ({ title, description, image }) => (
  <div className='bg-gray-100 rounded-2xl p-5 flex flex-col justify-between gap-4 hover:bg-gray-200 transition-colors duration-200 cursor-pointer'>
    <div className='hidden md:flex items-start justify-between gap-3'>
      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold text-black text-base'>{title}</h3>
        <p className='text-sm text-gray-500 leading-relaxed max-w-[180px]'>{description}</p>
      </div>
      <img src={image} alt={title} className='w-20 h-20 object-contain flex-shrink-0' />
    </div>

    <div className='md:hidden flex flex-col items-center gap-3 py-2'>
      <img src={image} alt={title} className='w-16 h-16 object-contain' />
      <span className='text-sm font-medium text-black'>{title}</span>
    </div>

    <div className='hidden md:block'>
      <button className='text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200 px-4 py-2 rounded-full'>
        Details
      </button>
    </div>
  </div>
)

const ExploreSection = () => {
  return (
    <section className='px-5 md:px-10 lg:px-20 py-10 md:py-14'>
      <h2 className='text-2xl md:text-3xl font-extrabold text-black mb-6 md:mb-8'>
        Explore what you can do with Cabway
      </h2>

      <div className='hidden md:grid grid-cols-3 gap-4'>
        {services.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>

      <div className='md:hidden grid grid-cols-2 gap-3'>
        {services.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  )
}

export default ExploreSection
