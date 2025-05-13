import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import toast, { Toaster } from 'react-hot-toast';
import { Text } from '@chakra-ui/react'




const CreatePage = () => {
  
  const {createProducts} =useProductStore();
  //Create state 
  const [newProduct,setProduct] =useState({
    name:"",price:"",image:""
  });

 
 

  const  handleProduct =async(e)=>{
   e.preventDefault()
    //Succes and message come from the Product store 
    const {success,message}= await createProducts(newProduct)

    if(success){
      toast.success(message)
    }else{
       toast.error(message)}
      setProduct({name:"",price:"",image:""})

      }//end funtion

  return (
    <div className='container-sm' style={{maxWidth:"700px", }}>
     <Text fontSize={'30'} fontWeight={"bold"}  textAlign={"center"}>Curent product</Text>

<div className='card' style={{width:"100%"}}></div>


<div className='card-body'>
 
<form>
  <div class="mb-3">
    <label  class="form-label">Name</label>
    <input type="text" class="form-control" id="name" value={newProduct.name} onChange={(e)=> setProduct({...newProduct,name:e.target.value})}/>
   
  </div>
  
  <div class="mb-3">
    <label class="form-label">Price</label>
    <input type="number" class="form-control" id="name" value={newProduct.price} onChange={(e)=> setProduct({...newProduct,price:e.target.value})}/>
   
  </div>

  <div class="mb-3">
    <label  class="form-label">Image</label>
    <input type="text" class="form-control" id="image" value={newProduct.image} onChange={(e)=> setProduct({...newProduct,image:e.target.value})}/>
   
  </div>
 
 
  <button  class="btn btn-primary btn-lg" style={{width:"100%"}} onClick={handleProduct}>Submit</button>
</form>

</div>


    </div>
        
       
    
  )
}

export default CreatePage