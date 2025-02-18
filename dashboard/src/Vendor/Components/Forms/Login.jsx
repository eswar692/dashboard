import React, {useState, useEffect} from 'react'

const Login =() => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [token,setToken] = useState('')


   

 console.log(token)
  const handler = async(e)=>{
    e.preventDefault();
    const details = {email, password}
    
    try {
      const loginRoute = await fetch('http://localhost:3000/vendor/login',{
        method:'POST',
        headers:{
          'Content-Type':'Application/json'
        },
        body:JSON.stringify(details)
      })
      const response = loginRoute.json()
      if(loginRoute.ok){
       
        alert('user Login Succussfully')
       
         localStorage.setItem('token',JSON.stringify(response.token))
      
        setEmail('')
        setPassword('')
      }else{
        alert('Login failed try again')
      }
    } catch (error) {
      alert('internbal server error')
      
    }
   
    
  }
  return (
  <div className='flex justify-center  auto h[400px] mx-auto mt-3'>
    <div className='flex justify-center mt-10 h-[300px]'>

        <div className='text-center w-[400px] rounded-lg shadow-[0_0_10px_#0A0A0A]'>
            <h1 className='h-15 flex items-center justify-center font-bold text-2xl'>Vendor Login Form</h1>
            <form className='h-auto ' onSubmit={handler} >

                <label  >Email:</label>
                <input type='email'required value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' className='ml-12 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4'/>
                <br />

                <label >Password:</label>
                <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your Email' className='ml-5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 '/>
               <br /> 
               <button type="submit" className='border-1 mt-7 w-[150px] rounded bg-orange-500 text-white font-bold h-[35px] text-center '>Send</button>            
           
            </form>
        </div>
    </div>
  </div>
  )
}

export default Login