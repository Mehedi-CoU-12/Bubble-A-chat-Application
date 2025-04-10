import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const isAuthenticated=async(req,res,next)=>{
    try {
        const token = req?.cookies?.token;
    
        if(!token){
            return res.status(401).json({
                message:"Plase login to access this resource"
            })
        }
    
        const decodedToken=await jwt.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(decodedToken?.userId);
    
        if(!user){
            return res.status(401).json({message:"User not found!"});
        }
    
        req.user=user;
        next();
        
    } catch (error) {
        console.log(error);
    }
}

export {isAuthenticated};