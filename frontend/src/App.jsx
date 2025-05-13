import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from "@chakra-ui/react"

import { Route ,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import Navbar from './Pages/Navbar'
import { Toaster } from 'react-hot-toast'



function App() {

  return (
    <>
   <div className='container' >
   <Box  bgGradient={'linear(to-r, green.200, pink.300)'} m="5" minH={"100vh"}>
   
   <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
<Toaster/>
</Box>
    
   </div>
    </>
  )
}

export default App
