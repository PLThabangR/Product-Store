import mongoose from "mongoose";


const productSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:string,
        required:true
    },
    
},{timestamps:true}//created at and updated at
);


//Creating product model

const Product =mongoose.model('Product',productSchema)
//Export 

export default Product