import express from 'express';
import dotenv from 'dotenv'

import { connectDB } from './config/db.js';


//config the .env file
dotenv.config()

//create a express app
const app = express()

app.use(express.json())

app.get('/',(req,re)=>{
    console.log("server is ready")
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    //Call the connect db function 
    connectDB()
    console.log("server start on port "+port)
})

//qA32CMsFMoJGJguh