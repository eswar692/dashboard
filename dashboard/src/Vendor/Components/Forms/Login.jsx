import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center'>
        <div className='text-center w-[400px] rounded-lg shadow-[0_0_10px_#0A0A0A]'>
            <h1 className='h-15 flex items-center justify-center font-bold text-2xl'>Vendor Login Form</h1>
            <form className='h-auto ' >
                <label htmlFor="wsw">Email:</label>
                <input type='email' placeholder='Enter Your Email' className='ml-12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4'/>
                <br />
                <label htmlFor="wsw">Password:</label>
                <input type='password' placeholder='Enter Your Email' className='ml-5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 '/>
               <br /> <button type="submit" className='border-1 mt-7 w-[150px] rounded bg-orange-500 text-white font-bold h-[35px] text-center '>Send</button>            
            </form>
        </div>
    </div>
  )
}

export default Login