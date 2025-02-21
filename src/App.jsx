import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Game from './components/Game'


function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Navbar/>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/game' element={<Game/>}/>
        {/* <Route path='/home' element={<SignUp/>}/> */}
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
