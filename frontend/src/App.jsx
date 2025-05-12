import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route ,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import Navbar from './Pages/Navbar'



function App() {

  return (
    <>
   <div className='container' style={{}}>
   
   
   <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>


    
   </div>
    </>
  )
}

export default App
