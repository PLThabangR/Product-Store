import mongoose from "mongoose";


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
},{timestamps:true}//created at and updated at
);


//Creating product model

const Product =mongoose.model('Product',productSchema)
//Export 

export default Product