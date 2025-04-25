import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import HomePage from './pages/HomePage'
import Navbar from './component/Navbar'
import { axiosInstance } from './lib/axios'
import { useAuthStore } from './store/useAuthStore'


const App = () => {
  const  {authUser} = useAuthStore();
  return (
    <div >
     {/* <div className='text-red-600'>This is text</div> */}
    <Navbar />
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/signup' element={<SignUpPage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/settings' element={<SettingsPage/>} />
    <Route path='/profile' element={<ProfilePage/>} />
    </Routes>

    </div>
  )
}

export default App
