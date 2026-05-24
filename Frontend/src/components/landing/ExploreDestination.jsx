import React, { useState } from 'react'
import { MapPin, Triangle } from 'lucide-react'

const tabs = ['Attractions', 'Transport', 'Hotels', 'Entertainment', 'Restaurants']

const attractions = [
  { id: 1, name: 'Wonderla Amusement Park, Kochi', icon: 'pin' },
  { id: 2, name: 'Hill Palace', icon: 'triangle' },
  { id: 3, name: 'Aspinwall House', icon: 'pin' },
  { id: 4, name: 'Mattancherry Palace', icon: 'pin' },
  { id: 5, name: 'Kerala Folklore Museum', icon: 'pin' },
  { id: 6, name: 'Lazza iDrive', icon: 'triangle' },
  { id: 7, name: 'Fort Kochi Beach', icon: 'pin' },
  { id: 8, name: 'Marine Drive', icon: 'pin' },
]

const articles = [
  {
    id: 1,
    image: '/image1.jpeg',
    title: 'Cochin International Airport Dropoff: How to Get There | Cabway',
  },
  {
    id: 2,
    image: '/image2.jpeg',
    title: 'Cabway in Kochi | A Guide to Getting Around in Kochi',
  },
]

const AttractionRow = ({ name, icon }) => (
  <div className='flex items-center justify-between bg-white rounded-xl px-4 py-3.5 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors duration-200 cursor-pointer'>
    <div className='flex items-center gap-3'>
      {icon === 'pin' ? (
        <MapPin size={18} className='text-black flex-shrink-0' strokeWidth={2} />
      ) : (
        <Triangle size={16} className='text-black flex-shrink-0' strokeWidth={2} />
      )}
      <span className='text-sm font-medium text-black'>{name}</span>
    </div>
    <button className='bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-neutral-800 transition-colors duration-200 flex-shrink-0 ml-3'>
      Go
    </button>
  </div>
)

const ExploreDestination = () => {
  const [activeTab, setActiveTab] = useState('Attractions')

  return (
    <section className='bg-gray-50 px-5 md:px-10 lg:px-20 py-10 md:py-14'>
      {/* Header */}
      <div className='mb-5'>
        <h2 className='text-2xl md:text-3xl font-extrabold text-black mb-2'>
          Explore your destination
        </h2>
        <p className='text-sm text-gray-600 max-w-md'>
          It takes an average of <strong>2-4 minutes</strong> to get a ride within Kochi, and on average
          those rides cost between <strong>₹156–₹260</strong>.
        </p>
      </div>

      {/* Tabs */}
      <div className='flex items-center gap-0 border-b border-gray-200 mb-6 overflow-x-auto scrollbar-hide'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium px-4 py-3 whitespace-nowrap border-b-2 transition-colors duration-200 ${
              activeTab === tab
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className='flex flex-col md:flex-row gap-5 md:gap-6'>

        {/* ── DESKTOP: Left column — attraction list (scrollable) ── */}
        <div className='hidden md:flex flex-col gap-2 w-[280px] flex-shrink-0 max-h-[380px] overflow-y-auto pr-1'>
          {attractions.map((a) => (
            <AttractionRow key={a.id} {...a} />
          ))}
        </div>

        {/* ── DESKTOP: Middle column — map ── */}
        <div className='hidden md:block flex-1 min-w-0'>
          <img
            src='/map.jpg'
            alt='Map of Kochi'
            className='w-full h-[380px] object-cover rounded-2xl'
          />
        </div>

        {/* ── DESKTOP: Right column — articles ── */}
        <div className='hidden md:flex flex-col gap-4 w-[280px] flex-shrink-0'>
          {articles.map((article) => (
            <div key={article.id} className='flex flex-col gap-2'>
              <img
                src={article.image}
                alt={article.title}
                className='w-full h-[160px] object-cover rounded-xl'
              />
              <div className='flex items-start justify-between gap-3'>
                <p className='text-sm font-semibold text-black leading-snug'>{article.title}</p>
                <button className='bg-black text-white text-xs font-semibold px-3 py-2 rounded-full whitespace-nowrap hover:bg-neutral-800 transition-colors duration-200 flex-shrink-0'>
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE: Map on top ── */}
        <div className='md:hidden w-full'>
          <img
            src='/map.jpg'
            alt='Map of Kochi'
            className='w-full h-52 object-cover rounded-2xl'
          />
        </div>

        {/* ── MOBILE: Attraction list ── */}
        <div className='md:hidden flex flex-col gap-2 w-full'>
          {attractions.map((a) => (
            <AttractionRow key={a.id} {...a} />
          ))}
        </div>

        {/* ── MOBILE: Articles ── */}
        <div className='md:hidden flex flex-col gap-6 w-full mt-2'>
          {articles.map((article) => (
            <div key={article.id} className='flex flex-col gap-3'>
              <img
                src={article.image}
                alt={article.title}
                className='w-full h-52 object-cover rounded-2xl'
              />
              <div className='flex items-start justify-between gap-3'>
                <p className='text-base font-semibold text-black leading-snug'>{article.title}</p>
                <button className='bg-black text-white text-xs font-semibold px-3 py-2 rounded-full whitespace-nowrap hover:bg-neutral-800 transition-colors duration-200 flex-shrink-0'>
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ExploreDestination
