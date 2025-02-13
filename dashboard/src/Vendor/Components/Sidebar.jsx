import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='w-[100%] max-w-[25%] bg-blue-300  h-[93vh] sm:max-w-[15%] lg:max-w-[10%] flex justify-center p-5 font-bold  '>
        <ul className='h-[200px]  flex flex-col justify-around'>
          <li className=''>Add Firm</li>
          <li>Add Product</li>
          <li>All Products</li>
          <li>User Details</li>
        </ul>
      </div>
     
    </div>
  )
}

export default Sidebar
