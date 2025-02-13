import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-300 h-[70px] flex items-center w-[100%] '>
      <div className='w-[60%] text-center font-black font-bold text-[25px]'>Vendor Dashboard</div>
      <div className='flex justify-center w-[40%]'>
        <span>Login/</span><span>Sign-in</span>
        </div>
    </div>
  )
}

export default Navbar
