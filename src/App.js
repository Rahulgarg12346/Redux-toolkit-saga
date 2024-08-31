import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Index from './Login'
import Home from './Pages/Home'
const App = () => {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Index/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
   </>
  )
}

export default App