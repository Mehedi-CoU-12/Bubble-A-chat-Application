import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import userRouter from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app=express();
const PORT=process.env.PORT ||8080;

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/user",userRouter);


connectDB();
app.listen(PORT,()=>{
    console.log(`SERVER LISTEN ON PORT http://localhost:${PORT}`);
})