import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import HomePage from './pages/HomePage'
import Navbar from './component/Navbar'
import { axiosInstance } from './lib/axios'
import { useAuthStore } from './store/useAuthStore'
import {Loader} from "lucide-react"


const App = () => {
  const  {authUser, checkAuth, ischeckingAuth} = useAuthStore();
  useEffect(()=>{
    checkAuth()
  },{checkAuth})
  console.log((authUser))
  if(ischeckingAuth && !authUser) return(
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin'/>

    </div>
  )
    
  
  return (
    <div >
     {/* <div className='text-red-600'>This is text</div> */}
    <Navbar />
    <Routes>
    <Route path='/' element={authUser ? <HomePage/>: <Navigate to = "/login" />} />
    <Route path='/signup' element={<SignUpPage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/settings' element={<SettingsPage/>} />
    <Route path='/profile' element={<ProfilePage/>} />
    </Routes>

    </div>
  )
}

export default App
