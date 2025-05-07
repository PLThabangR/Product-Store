import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
     <StrictMode>
    <App />
  </StrictMode>,
  </ChakraProvider>
 
)
