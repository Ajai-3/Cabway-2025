import React from 'react'

const links = ['Request a ride', 'Reserve a ride', 'See prices', 'Explore ride options', 'Airport rides']

const SubNav = () => {
  return (
    <div className='hidden md:flex items-center justify-between border-b border-gray-200 px-10 lg:px-20 py-3'>
      <h2 className='text-lg font-semibold text-black'>Ride</h2>
      <div className='flex items-center gap-6 text-sm text-gray-500'>
        {links.map((link) => (
          <a key={link} href='#' className='hover:text-black transition-colors duration-200'>
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SubNav
