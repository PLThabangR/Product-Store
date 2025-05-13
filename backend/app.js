import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from '../backend/config/db.js';
import cors from 'cors'
import { productRouter } from '../backend/router/productRouter.js';
//Import path so we worki with files
import path from "path"


//config the .env file
dotenv.config()

//create a express app
const app = express()
//Allow us to work with json data
app.use(express.json())
app.use(cors({
    origin:"*"
}));

app.use("/api/product",productRouter)

//Create
const __dirname=path.resolve()
const port = process.env.PORT || 3000

// check enviroment then instruct __dirname to go to specif folder
//if(process.env.Node_ENV==="production"){
    //take dist folder m,ake it static
// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// //Let any request hit the front end
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
// })
// }

// //Allow requests
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://product-store-1-o1ge.onrender.com"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


app.listen(port,()=>{
    //Call the connect db function 
    connectDB()
    console.log("server start on port "+port)
})

//qA32CMsFMoJGJguh