import React from 'react'

const AddFirm = () => {
  return (
    <div className='shadow-[0_0_10px_#0A0A0A] w-[300px] p-2.5 rounded mx-auto h-[400px] mt-7'>
        <div className=' '>
            <h1 className='text-center font-bold '>Add Product</h1>
         <form className=''>

            <div className='flex flex-col'>
                <label htmlFor="">Product Name:</label>
                <input type="text" className='focus:outline-none border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-300' />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Price:</label>
                <input type="Number" className='focus:outline-none border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-300' />
            </div>

            <div className='flex flex-col'>
                <label>Category</label>
                <div className='grid grid-cols-2'>
                    <div className='h-[30px]  grid grid-cols-2 '>
                        <label className='m-auto '>Veg</label>
                    <input type='checkbox' className=' w-6 h-6 m-auto' />
                    </div>
                    <div className='h-[30px]   grid grid-cols-2 '>
                        <label className='m-auto '>Non-Veg</label>
                    <input type='checkbox' className=' w-6 h-6 m-auto' />
                    </div>
                </div>
                
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Best Seller:</label>
                <input type="text" className='focus:outline-none border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-300' />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Discription:</label>
                <input type="text" className='focus:outline-none border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-300' />
            </div>

            <div >
                {/* <label htmlFor="">Firm Image</label>
                <input type="file" className='w-[200px] border-2 border-gray-300' /> */}
                <label class="block w-64 p-3 text-center bg-blue-500 text-white rounded-lg cursor-pointer mt-5 h-[40px]">
                Choose File
                <input type="file" class="hidden" />
            </label>

            </div>

            <div className='text-center mt-3'>
                <button type="submit" className='bg-orange-400 font-bold w-[130px] h-[30px] rounded  '>Submit</button>
            </div>


         </form>
        </div>
    </div>
  )
}

export default AddFirm