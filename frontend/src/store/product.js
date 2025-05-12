import { useState } from 'react'
import {create} from 'zustand'

export const useProductStore=create((set)=>({
    products:[],
    setProducts:(products)=>set({products}),
    createProducts:async (newProduct)=>{
        if(!newProduct || !newProduct|| !newProduct){
            return {success:false,message:"Please fill in all fields. "}
        }
        const res = await fetch("/api/products",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newProduct)
        },)
        //Respond
        const data = await res.json();
        //Use Zustand to set state
        set((state)=>({products:[...state.products,data.product]}))
    },
}))

//const [state,setState] = useState([])