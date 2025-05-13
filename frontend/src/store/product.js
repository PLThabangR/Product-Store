import { useState } from 'react'
import {create} from 'zustand'

export const useProductStore=create((set)=>({
    products:[],
    setProducts:(products)=>set({products}),
    createProducts:async (newProduct)=>{//Using this function to create product
       
        try{
                 if(!newProduct.name || !newProduct.price|| !newProduct.image){
            return {success:false,message:"Please fill in all fields. "}
        }
        //Set the target so that we prefix http//loclahost/5000
        const res = await fetch("/api/product",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newProduct)
        },)
        //Respond
        const data = await res.json();
        //console.log("Data after posting ",data.product)
        //Use Zustand to set state
        set((state)=>({products:[...state.products,data.product] }))//We are updating our state
        return {success:true,message:"Product created"}
        }catch(error){
            console.log("feed",error.message)
              return {success:false,message:"Internal Server Error"}
        }
        
    },//end of function
getProducts:async()=>{

    try{
        //Fetch data
        const res = await fetch("/api/product",{
            method:"GET",
            headers:{"Content-Type":"application/json"}});
        //convert data to json
        const data= await res.json();
       console.log(data.data)
        //We do not use ... becuase we are fetching already existing data unlike post we will be adding
        set({products:data.data})


    }catch(error){
          return {success:false,message:"Internal Server Error"}
    }
},//end of function
deleteProduct:async(id)=>{
    //Delete product by id
        const res = await fetch(`/api/product/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}});
            //convert returned data to json
            const data = await res.json()
            //Check if the delete was a success or not
            if(!data.success) return {success:false,message:data.message}
            //update the state
            //use filter to create new array
            //Update the ui immediately without need refresh
           set(state=>({products:state.products.filter((product)=>product._id!==id)}))
                console.log(data.message)
            return {success:true,message:data.message}
},


}))

//const [state,setState] = useState([])