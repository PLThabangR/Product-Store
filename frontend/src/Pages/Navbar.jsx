import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup,Text,Flex, Spacer,Box } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <>
    <Flex bg='gray.50'>
  <Box p='4' >
   <Link to="/">
   <span className="navbar-brand">< Text as ={"h1"} fontSize={{base:"22",sm:"28"}}  fontWeight={"bold"} bgClip={"text"} textAlign={"center"} bgGradient='linear(to-r, green.300, pink.500)'  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500), textTransform={"uppercase"}'
  }}> Product Store </Text></span>
   </Link>
  </Box>
  <Spacer />
  <Box p='4' >
    <Link to="/create">
       <span class="nav-link active" aria-current="page" > <Text fontSize={{base:"22",sm:"28"}}  fontWeight={"bold"} textAlign={"center"} colorScheme='teal' variant='solid'>Create</Text ></span>
       </Link>
  </Box>
</Flex>
      

     


     
    </>
  )
}



export default Navbar