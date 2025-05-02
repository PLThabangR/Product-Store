import Product from '../model/Product.js'

export const createProduct=async(req,res)=>{
    //Get product using req.body
    const product= req.body

    if(!product.name|| !product.price || !product.image){
        return res.status(400).json({suceess:false ,message:"Please provide all fields"})
    }
    //create a product 
    const newProduct = new Product(product)

    //save product to the database
    try{
await newProduct.save()
//return results to client if save was a success
    res.status(201).json({suceess:true,product: newProduct})
    }catch(error){
        //show error for debugging purpose
        console.error("Error in create product:",error.message)
        //Return error to client
        res.status(500).json({suceess:false,message:"Server error"})
    }
    
}


export const deleteProduct=async(req,res)=>{
    //Get product using req.body
    const {id}= req.params

    console.log(id)
  
   

    //check the database
    try{
        const product=await Product.findById(id)

        if(!product){
            return res.status(404).json({error:"Product not found"})
        }
        //Delete user from database
 await Product.findByIdAndDelete(id)
//return results to client if save was a success
    res.status(200).json({suceess:true,message:"Product deleted"})
    }catch(error){
        //show error for debugging purpose
        console.error("Error in deleting the product:",error.message)
        //Return error to client
        res.status(500).json({suceess:false,message:"Server error"})
    }
    
}



export const getAllProducts=async(req,res)=>{
    //check the database
    try{
        
        //find all products user from database
       const  products =await Product.find({})
//return results to client if save was a success
    res.status(200).json({suceess:true,data:products})
    }catch(error){
        //show error for debugging purpose
        console.error("Error in finding the products:",error.message)
        //Return error to client
        res.status(500).json({suceess:false,message:"Server error"})
    }
    
}

export const getProductByID=async(req,res)=>{
    //Get product using req.body
    const {id}= req.params

    console.log(id)
  
   

    //check the database
    try{
        const product=await Product.findById(id)

        if(!product){
            return res.status(404).json({error:"Product not found"})
        }
 
//return results to client if save was a success
    res.status(200).json({suceess:true,data:product})
    }catch(error){
        //show error for debugging purpose
        console.error("Error in deleting the product:",error.message)
        //Return error to client
        res.status(500).json({suceess:false,message:"Server error"})
    }
    
}