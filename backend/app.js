import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';

import { productRouter } from './router/productRouter.js';


//config the .env file
dotenv.config()

//create a express app
const app = express()
//Allow us to work with json data
app.use(express.json())

app.use("/api/product",productRouter)

const port = process.env.PORT || 3000
app.listen(port,()=>{
    //Call the connect db function 
    connectDB()
    console.log("server start on port "+port)
})

//qA32CMsFMoJGJguh