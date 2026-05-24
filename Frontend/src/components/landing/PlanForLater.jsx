import React, { useState } from 'react'
import { CalendarDays, Clock, CheckSquare, ChevronDown } from 'lucide-react'

const benefits = [
  { icon: CalendarDays, text: 'Choose your exact pickup time up to 90 days in advance.' },
  { icon: Clock, text: 'Extra wait time included to meet your ride.' },
  { icon: CheckSquare, text: 'Cancel at no charge up to 60 minutes in advance.' },
]

const PlanForLater = () => {
  const [date, setDate] = useState('May 24')
  const [time, setTime] = useState('10:01 PM')

  return (
    <section className='px-5 md:px-10 lg:px-20 py-10 md:py-14'>
      <h2 className='text-2xl md:text-3xl font-extrabold text-black mb-6 md:mb-8'>
        Plan for later
      </h2>

      <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-start'>
        <div className='w-full md:w-3/5 bg-[#b2d8d8] rounded-2xl p-7 md:p-10 relative overflow-hidden min-h-[260px] md:min-h-[300px]'>
          <div className='absolute right-4 top-4 md:right-8 md:top-6 opacity-30 pointer-events-none select-none'>
            <Clock size={120} className='text-white' strokeWidth={0.8} />
          </div>

          <div className='relative z-10 flex flex-col gap-5 max-w-xs'>
            <h3 className='text-2xl md:text-3xl font-extrabold text-black leading-snug'>
              Get your ride right<br />with Cabway Reserve
            </h3>

            <div className='flex flex-col gap-2'>
              <p className='text-sm font-semibold text-black'>Choose date and time</p>
              <div className='flex items-end gap-3'>
                <div className='flex flex-col gap-1'>
                  <label className='text-xs text-gray-600'>Date</label>
                  <div className='flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 text-sm font-medium text-black shadow-sm'>
                    <CalendarDays size={15} className='text-gray-500 flex-shrink-0' />
                    <input
                      type='text'
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className='outline-none bg-transparent w-20 text-sm'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='text-xs text-gray-600'>Time</label>
                  <div className='flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 text-sm font-medium text-black shadow-sm'>
                    <Clock size={15} className='text-gray-500 flex-shrink-0' />
                    <input
                      type='text'
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className='outline-none bg-transparent w-20 text-sm'
                    />
                    <ChevronDown size={14} className='text-gray-500' />
                  </div>
                </div>
              </div>
            </div>

            <button className='w-full bg-black text-white text-sm font-semibold py-3.5 rounded-xl hover:bg-neutral-800 transition-colors duration-300'>
              Next
            </button>
          </div>
        </div>

        <div className='w-full md:w-2/5 flex flex-col gap-5 pt-1'>
          <h4 className='text-base font-bold text-black'>Benefits</h4>
          <div className='flex flex-col gap-5'>
            {benefits.map(({ icon: Icon, text }, i) => (
              <div key={i} className='flex items-start gap-3'>
                <div className='bg-gray-100 rounded-lg p-2 flex-shrink-0 mt-0.5'>
                  <Icon size={18} className='text-black' strokeWidth={1.8} />
                </div>
                <p className='text-sm text-gray-700 leading-relaxed'>{text}</p>
              </div>
            ))}
          </div>
          <a href='#' className='text-sm text-gray-500 underline underline-offset-2 hover:text-black transition-colors duration-200 mt-1'>
            See terms
          </a>
        </div>
      </div>

      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-black px-5 py-4 z-50'>
        <button className='w-full text-white text-sm font-semibold py-3 rounded-xl'>
          See prices
        </button>
      </div>
    </section>
  )
}

export default PlanForLater
