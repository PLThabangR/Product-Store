import React, { useState } from 'react'
import { useProductStore } from '../store/product'


const CreatePage = () => {
  
  const {products} =useProductStore()
  //Create state 
  const [newProduct,setProduct] =useState({
    name:"",price:"",image:""
  })

 

  const  handleProduct =()=>{
    console.log(newProduct)
   
  }
  return (
    <div className='container-sm' style={{maxWidth:"700px", }}>
        <h1>Create product</h1>

<div className='card' style={{width:"18rem"}}></div>


<div className='card-body'>
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" value={newProduct.name} onChange={(e)=> setProduct({...newProduct,name:e.target.value})}/>
   
  </div>
    {products}
  <div class="mb-3">
    <label for="price" class="form-label">Price</label>
    <input type="number" class="form-control" id="name" value={newProduct.price} onChange={(e)=> setProduct({...newProduct,price:e.target.value})}/>
   
  </div>

  <div class="mb-3">
    <label for="image" class="form-label">Image</label>
    <input type="text" class="form-control" id="image" value={newProduct.image} onChange={(e)=> setProduct({...newProduct,image:e.target.value})}/>
   
  </div>
 
 
  <button  class="btn btn-primary btn-lg" style={{width:"100%"}} onClick={handleProduct}>Submit</button>
</form>

</div>
    </div>
        
       
    
  )
}

export default CreatePage