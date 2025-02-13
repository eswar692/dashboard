import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Login from '../Components/Forms/Login'


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
     <Sidebar/>
     <Login/>
    </div>
  )
}

export default LandingPage
