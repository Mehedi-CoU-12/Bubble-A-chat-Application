import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './config/database.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';

dotenv.config();

const app=express();
const PORT=process.env.PORT ||8080;

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/user",userRouter);
app.use('/api/v1/message',messageRouter);


connectDB();
app.listen(PORT,()=>{
    console.log(`SERVER LISTEN ON PORT http://localhost:${PORT}`);
})