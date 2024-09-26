import React from 'react'
import Navbar from './Components/Navbar'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/Login'


function App () {
  return (
    <div>
    
       <BrowserRouter>
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
       </div>
  )


}



export default App


