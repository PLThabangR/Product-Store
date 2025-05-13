import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'
import { SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductCard from '../Component/ProductCard'
import { Spinner } from '@chakra-ui/react'

const HomePage = () => {
  //use product store

  
  const {getProducts,products} = useProductStore()

  //load function using use effect
  useEffect(()=>{

    getProducts()
  },[getProducts])
  return (
    <>
       <div className='container-sm' style={{maxWidth:"700px", }}>
        <Text fontSize={'30'} fontWeight={"bold"}  textAlign={"center"}>Available product</Text>
      <SimpleGrid columns={{
        base:1,md:2,lg:3
      }}
      spacing="5"
      width="full"
      >
      
    {products.map((product)=>(
    <ProductCard productKey={product._id} product={product}/>
    ))}
      </SimpleGrid>
   {products.length===0 && (
    <>
    <Text fontSize={'30'} fontWeight={"bold"}  textAlign={"center"}>No product found</Text>
    <Link to="/create" >
     <span><Text fontSize={'30'} fontWeight={"bold"}  textAlign={"center"} _hover={{textDecoration:"underline"}}> Create a product </Text></span>
</Link>
</>
)}
</div>


    </>
  )
}

export default HomePage