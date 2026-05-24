import React from 'react'

const cards = [
  {
    id: 1,
    image: '/ride.webp',
    title: 'Ride options',
    description: "There's more than one way to move with Cabway, no matter where you are or where you're headed next.",
    cta: 'Search ride options',
  },
  {
    id: 2,
    image: '/airports.webp',
    title: '700+ airports',
    description: (
      <>
        You can request a ride to and from most major airports.{' '}
        <a href='#' className='underline underline-offset-2 hover:text-black transition-colors duration-200'>
          Schedule
        </a>{' '}
        a ride to the airport for one less thing to worry about.
      </>
    ),
    cta: 'Search airports',
  },
  {
    id: 3,
    image: '/cities.webp',
    title: '15,000+ cities',
    description: "The app is available in thousands of cities worldwide, so you can request a ride even when you're far from home.",
    cta: 'Search cities',
  },
]

const TravelYourWay = () => {
  return (
    <section className='px-5 md:px-10 lg:px-20 py-12 md:py-16 bg-white'>
      <div className='max-w-screen-xl mx-auto'>
        <h2 className='text-2xl md:text-3xl font-extrabold text-black mb-8 md:mb-10'>
          Use the Cabway app to help you travel your way
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
          {cards.map(({ id, image, title, description, cta }) => (
            <div key={id} className='flex flex-col gap-4'>
              <div className='w-full overflow-hidden rounded-2xl'>
                <img
                  src={image}
                  alt={title}
                  className='w-full h-52 md:h-56 object-cover hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-bold text-black'>{title}</h3>
                <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
              </div>
              <div className='mt-auto'>
                <button className='bg-black text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-neutral-800 transition-colors duration-300'>
                  {cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TravelYourWay
