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
   <Box  bg="grey" m="5" maxH={"100%"}>
   
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
