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