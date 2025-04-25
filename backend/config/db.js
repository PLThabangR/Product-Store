import mongoose, { connect } from "mongoose"


export const connectDB=async()=>{

    try{

        const connect =await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${connect.connection.host}`);
        
    }catch(error){
        console.log(`MongoDB could not connect: ${error}`)
        //process code 1 means failure and code 0 means success
        process.exit(1)
    }
}