import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'
import Login from './components/Login'
import Other from './components/Other'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    
    <BrowserRouter>
    {/* <Navbar/>
    <Home/>
    <Product/>
    <Contact/> */}
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<Other/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
