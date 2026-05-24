import React, { useState } from 'react'
import { Globe, Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-black text-white'>
      {/* Desktop */}
      <div className='hidden md:flex justify-between items-center px-10 lg:px-20 py-4'>
        {/* Left */}
        <div className='flex items-center gap-8'>
          <span className='text-xl font-bold tracking-wide cursor-pointer'>Cabway</span>
          <div className='flex items-center gap-1 text-sm font-medium'>
            {['Ride', 'Drive', 'Business'].map((item) => (
              <a key={item} href='#' className='px-3 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-300'>
                {item}
              </a>
            ))}
            <a href='#' className='px-3 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-300 flex items-center gap-1'>
              About <ChevronDown size={14} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className='flex items-center gap-2 text-sm font-medium'>
          <a href='#' className='px-3 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-300 flex items-center gap-1'>
            <Globe size={15} /> EN
          </a>
          <a href='#' className='px-3 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-300'>Help</a>
          <a href='#' className='px-3 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-300'>Log in</a>
          <a href='#' className='px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors duration-300'>Sign up</a>
        </div>
      </div>

      {/* Mobile */}
      <div className='md:hidden flex justify-between items-center px-5 py-4'>
        <span className='text-xl font-bold tracking-wide cursor-pointer'>Cabway</span>
        <div className='flex items-center gap-2'>
          <a href='#' className='px-3 py-1.5 text-sm rounded-full hover:bg-neutral-800 transition-colors duration-300'>Log in</a>
          <a href='#' className='px-3 py-1.5 text-sm rounded-full bg-white text-black hover:bg-neutral-200 transition-colors duration-300'>Sign up</a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='ml-1 p-2 rounded-full hover:bg-neutral-800 transition-colors duration-300'
            aria-label='Toggle menu'
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className='md:hidden bg-black border-t border-neutral-800 px-5 pb-4 flex flex-col gap-1 text-sm font-medium'>
          {['Ride', 'Drive', 'Business', 'About', 'Help'].map((item) => (
            <a key={item} href='#' className='px-3 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-300'>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
