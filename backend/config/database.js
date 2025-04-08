import mongoose from "mongoose";

const connectDB=async()=>{
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/Bubble`);
    console.log('DB SERVER CONNECT!!',connectionInstance.connection.host);
}

export default connectDB;