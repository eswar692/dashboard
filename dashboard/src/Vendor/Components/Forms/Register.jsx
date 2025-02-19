import React, {useState} from 'react'

const Register = ({loginFun}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const userHandler = async(e)=>{
    e.preventDefault()
    const details ={name, email, password}
   
   try {
        const registerRoute = await fetch('https://food-app-jwad.onrender.com/vendor/register',{
          method:'POST',
          headers:{
            'Content-Type':'Application/json'
          },
          body: JSON.stringify(details)
        })
        const response = registerRoute.json()
        if(registerRoute.ok){
          alert('Vendor Registered succussfully')
          
          
            setName('')
            setEmail('')
            setPassword('')
            loginFun()
        }
   } catch (error) {
     
      alert('internal error')
   }
    
    
    
 
    
  }

  return (
    <div className='m-[0_0_0_100px]'>
        <div className='w-[400px]  mb-7 shadow-2xl shadow-zinc-900 p-[10px] rounded-[10px] text-center mt-6 m-auto'>
            <h1 className='text-center font-bold'>Vendor Register Form</h1>

            <form className='h-[200px] flex flex-col mt-[20px]' onSubmit={userHandler}>

              <div className='grid grid-cols-[27%_70%]'>

                <label  htmlFor="">Name:</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required placeholder='Enter your Name' className= 'h-[35px] border-gray-300 border-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300'/>
                <br />
              </div>

              <div className='grid grid-cols-[27%_70%] '>
                <label htmlFor="">Email:</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  required placeholder='Enter your Email' className= 'h-[35px] border-gray-300 border-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300'/>
                <br />
              </div>
              
              <div className='grid grid-cols-[27%_70%]'>
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder='Enter your Password' className= 'h-[35px] border-gray-300 border-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300'/>

              </div>
              <div>
                <button type="submit" className='bg-orange-400 text-white p-0.5 w-[130px] mt-4 font-bold' >Login</button>
              </div>
              
            </form>

        </div>
    </div>
  )
}

export default Register