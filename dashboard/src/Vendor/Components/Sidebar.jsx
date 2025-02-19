import React from 'react'

const Sidebar = ({firmFun, productFun}) => {
  return (
    
      <div className='w-[100%]  bg-blue-300  h-[93vh] flex justify-center p-5 font-bold  '>
        <ul className='h-[200px]  flex flex-col justify-around'>
          <li onClick={()=>{firmFun()} } className='cursor-pointer'>Add Firm</li>
          <li onClick={()=>{productFun()} } className='cursor-pointer'>Add Product</li>
          <li>All Products</li>
          <li >User Details</li>
        </ul>
      </div>
     
    
  )
}

export default Sidebar
