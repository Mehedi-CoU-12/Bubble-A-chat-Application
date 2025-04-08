import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';


dotenv.config();

const app=express();

const PORT=process.env.PORT ||8080;

connectDB();

app.listen(PORT,()=>{
    console.log(`SERVER LISTEN ON PORT http://localhost:${PORT}`);
})