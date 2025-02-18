import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Login from '../Components/Forms/Login'
import Register from '../Components/Forms/Register'
import AddFirm from '../Components/Forms/AddFirm'
import Product from'../Components/Forms/AddProduct'


const LandingPage = () => {
const [click,setClick] = useState('login')
  const setClickHandler = (value)=>{
    return setClick(value)
  }
  console.log(click)

  return (
    <div>
      <Navbar clickValue ={setClickHandler}/>
      <div className='grid grid-cols-[20%_80%] lg:grid-cols-[10%_90%] '>
         <Sidebar clickValue={setClickHandler}/>
       
       {click==='login' && <Login/>}{click=='register' && <Register/>}
       {click==='firm' && <AddFirm/>}{click==='product'&& <Product/>}

        
      </div>
     
     
    </div>
  )
}

export default LandingPage
