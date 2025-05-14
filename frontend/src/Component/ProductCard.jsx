import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import { Button, Box,HStack, Image,useDisclosure, Text ,ModalCloseButton,ModalFooter ,Heading,ModalBody, Toast,Modal,ModalOverlay,ModalHeader,ModalContent} from "@chakra-ui/react"

import toast, { Toaster } from 'react-hot-toast';
const ProductCard = ({product}) => {
     const {deleteProduct,updatedProductFunction} = useProductStore()
    //Create state 
    //Create a state and pass existing data to it so our form is filled
    const [updateP,setP] =useState(product);
  
    //We are passing the id and the state
   const  handleProduct =async(id,updateP)=>{
  
    //Succes and message come from the Product store 
    const {success,message}= await updatedProductFunction(id,updateP)
//Close the modal 
onClose()
    if(success){
      toast.success(message)
    }else{
       toast.error(message)}
      setP({name:"",price:"",image:""})

      }//end funtion

 //modal state
 const { isOpen, onOpen, onClose } = useDisclosure()
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
         <Button variant='solid' onClick={onOpen} colorScheme='blue'>
        Edit
      </Button>

       <Button variant='solid' onClick={()=>handleDeleteProduct(product._id)} colorScheme='red'>
        Delete
      </Button>
        

       </HStack>
    </Box>
   </Box>
    
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         



 
<form>
  <div class="mb-3">
    <label  class="form-label">Name</label>
    <input type="text" class="form-control" id="name" value={updateP.name} onChange={(e)=> setP({...updateP,name:e.target.value})}/>
   
  </div>
  
  <div class="mb-3">
    <label class="form-label">Price</label>
    <input type="number" class="form-control" id="name" value={updateP.price} onChange={(e)=> setP({...updateP,price:e.target.value})}/>
   
  </div>

  <div class="mb-3">
    <label  class="form-label">Image</label>
    <input type="text" class="form-control" id="image" value={updateP.image} onChange={(e)=> setP({...updateP,image:e.target.value})}/>
   
  </div>
</form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           <Button  colorScheme='blue' mr={3} onClick={()=>handleProduct(product._id,updateP)}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    
    </>
  )
}

export default ProductCard