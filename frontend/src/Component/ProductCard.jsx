import React from 'react'
import { Button, Box,Card,HStack, Image, Text ,CardBody,Stack ,Heading, IconButton, Toast} from "@chakra-ui/react"
import { transform } from 'framer-motion'
import { useProductStore } from '../store/product'
import toast, { Toaster } from 'react-hot-toast';
const ProductCard = ({product}) => {
 const {deleteProduct} = useProductStore()
 
 const handleDeleteProduct=async(id)=>{

    const {success,message}= await deleteProduct(id)
     if(success){
         toast.success(message)
       }else{
          toast.error(message)}
   
    }//end funtion
  


  return (
    <>
   <Box
   shadow="lg"
   rounded="lg"
   overflow="hidden"
   transition= 'all 0.3s'
   _hover={{transform:"translateY(-5px",shadow:"xl"}}

   >
    <Image
        src={product.image}
        alt={product.name}
        h={48} w="full"
        objectFit="cover"
      />
    <Box p="4">
    <Heading as ="h3" size="md" mb={2}>
        
       {product.name}
       </Heading>

       <Text fontWeight="bold"  fontSize={"x1"} mb="4">

       </Text>
       <HStack alignItems={"center"}>
         <Button variant='solid' onClick={""} colorScheme='blue'>
        Edit
      </Button>

       <Button variant='solid' onClick={()=>handleDeleteProduct(product._id)} colorScheme='red'>
        Delete
      </Button>
        

       </HStack>
    </Box>
   </Box>
    
    
    </>
  )
}

export default ProductCard