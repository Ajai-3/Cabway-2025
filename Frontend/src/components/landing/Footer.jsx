import React from 'react'
import { Globe, MapPin } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Company',
    links: ['About us', 'Our offerings', 'Newsroom', 'Investors', 'Blog', 'Careers', 'Cabway One'],
  },
  {
    heading: 'Products',
    links: ['Ride', 'Drive', 'Eat', 'Cabway for Business', 'Cabway Freight', 'Gift cards', 'Cabway Health', 'Cabway Advertising'],
  },
  {
    heading: 'Global citizenship',
    links: ['Safety', 'Sustainability'],
  },
  {
    heading: 'Travel',
    links: ['Reserve', 'Airports', 'Cities'],
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    svg: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z' />
        <rect x='2' y='9' width='4' height='12' />
        <circle cx='4' cy='4' r='2' />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    svg: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    svg: (
      <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-4 h-4'>
        <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
        <circle cx='12' cy='12' r='4' />
        <circle cx='17.5' cy='6.5' r='1' fill='currentColor' stroke='none' />
      </svg>
    ),
  },
  {
    label: 'X',
    svg: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
      </svg>
    ),
  },
]

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='px-5 md:px-10 lg:px-20 pt-12 pb-8 max-w-screen-xl mx-auto'>
        <div className='mb-10'>
          <p className='text-lg font-bold mb-3'>Cabway</p>
          <a href='#' className='text-sm text-gray-300 hover:text-white underline underline-offset-2 transition-colors duration-200'>
            Visit Help Center
          </a>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
          {footerLinks.map(({ heading, links }) => (
            <div key={heading} className='flex flex-col gap-3'>
              <h4 className='text-sm font-semibold text-white'>{heading}</h4>
              <ul className='flex flex-col gap-2'>
                {links.map((link) => (
                  <li key={link}>
                    <a href='#' className='text-sm text-gray-400 hover:text-white transition-colors duration-200'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='border-t border-neutral-800 mb-6' />

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>
          <div className='flex items-center gap-3'>
            {socialLinks.map(({ label, svg }) => (
              <a
                key={label}
                href='#'
                aria-label={label}
                className='w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors duration-200'
              >
                {svg}
              </a>
            ))}
          </div>

          <div className='flex items-center gap-4 text-sm text-gray-300'>
            <button className='flex items-center gap-1.5 hover:text-white transition-colors duration-200'>
              <Globe size={15} />
              English
            </button>
            <button className='flex items-center gap-1.5 hover:text-white transition-colors duration-200'>
              <MapPin size={15} />
              Kochi
            </button>
          </div>
        </div>

        <div className='flex items-center gap-3 mb-8 flex-wrap'>
          <a href='#' className='flex items-center gap-2 border border-neutral-600 rounded-lg px-4 py-2 hover:border-white transition-colors duration-200'>
            <svg viewBox='0 0 24 24' className='w-5 h-5' fill='currentColor'>
              <path d='M3.18 23.76c.3.17.64.24.99.2l12.6-11.53-2.7-2.7L3.18 23.76zM20.7 10.06l-2.85-1.64-3.03 2.77 3.03 2.77 2.88-1.66c.82-.47.82-1.77-.03-2.24zM2.01 1.05C1.7 1.37 1.5 1.85 1.5 2.47v19.06c0 .62.2 1.1.51 1.42l.08.07 10.68-10.68v-.25L2.09.98l-.08.07zM14.07 8.41L3.18.24c-.35-.04-.69.03-.99.2l10.88 9.67 2.7-2.7-.7-.7z' />
            </svg>
            <div className='flex flex-col leading-tight'>
              <span className='text-[9px] text-gray-400'>GET IT ON</span>
              <span className='text-xs font-semibold text-white'>Google Play</span>
            </div>
          </a>

          <a href='#' className='flex items-center gap-2 border border-neutral-600 rounded-lg px-4 py-2 hover:border-white transition-colors duration-200'>
            <svg viewBox='0 0 24 24' className='w-5 h-5' fill='currentColor'>
              <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
            </svg>
            <div className='flex flex-col leading-tight'>
              <span className='text-[9px] text-gray-400'>Download on the</span>
              <span className='text-xs font-semibold text-white'>App Store</span>
            </div>
          </a>
        </div>

        <div className='border-t border-neutral-800 mb-5' />

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-500'>
          <p>© 2026 Cabway Technologies Inc.</p>
          <div className='flex items-center gap-4 flex-wrap'>
            <a href='#' className='hover:text-white transition-colors duration-200'>Privacy</a>
            <a href='#' className='hover:text-white transition-colors duration-200'>Accessibility</a>
            <a href='#' className='hover:text-white transition-colors duration-200'>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
