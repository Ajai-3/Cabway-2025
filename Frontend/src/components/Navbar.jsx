import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-between items-center font-medium bg-black text-white px-[120px] py-3.5'>
         <div className='text-2xl cursor-pointer'>CABWAY</div>
         <div>
          <button className='px-3 py-[6px] rounded-full hover:bg-neutral-800 duration-500 mr-2'>Help</button>
          <button className='px-3 py-[6px] rounded-full hover:bg-neutral-800 duration-500 mr-2'>Log in</button>
          <button className='px-3 py-[6px] rounded-full bg-slate-100  text-black hover:bg-neutral-300 duration-500'>Sign up</button>
         </div>
    </div>
  )
}

export default navbar