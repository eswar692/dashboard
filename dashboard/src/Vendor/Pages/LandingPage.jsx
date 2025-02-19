import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Login from '../Components/Forms/Login'
import Register from '../Components/Forms/Register'
import AddFirm from '../Components/Forms/AddFirm'
import Product from'../Components/Forms/AddProduct'


const LandingPage = () => {
const [signin,setSignin] = useState(false)
const [login, setLogin] = useState(true)
const [firm, setFirm] = useState(false)
const [product, setProduct] = useState(false)

const signinFun = ()=>{
  setSignin(true)
  setLogin(false)
  setFirm(false)
  setProduct(false)
}
const loginFun = ()=>{
  setSignin(false)
  setLogin(true)
  setFirm(false)
  setProduct(false)
}
const firmFun = ()=>{
  setSignin(false)
  setLogin(false)
  setFirm(true)
  setProduct(false)
}
const productFun = ()=>{
  setSignin(false)
  setLogin(false)
  setFirm(false)
  setProduct(true)
}


  
  

  return (
    <div>
      <Navbar signinFun ={signinFun} loginFun ={loginFun}/>
      <div className='grid grid-cols-[20%_80%] lg:grid-cols-[10%_90%] '>
         <Sidebar firmFun={firmFun} productFun={productFun}  />
       
       {login && <Login  />}
       {signin && <Register loginFun ={loginFun}/>}
       {firm && <AddFirm/>}
       {product && <Product/>}

        
      </div>
     
     
    </div>
  )
}

export default LandingPage
