import {User} from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register=async(req,res)=>{
    try {
        const {fullName,username,password,confirmPassword,gender}=req.body;

        if(!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All fields are required"});
        }

        if(password!==confirmPassword){
            return res.status(400).json({message:"Password do not match"})
        }

        const user=await User.findOne({username});

        if(user){
            return res.status(400).json({message:"Username already exist!"});
        }

        const hashPassword=await bcrypt.hash(password,10);

        const maleAvater=`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleAvater=`https://avatar.iran.liara.run/public/girl?username=${username}`;

        await User.create({
            fullName,
            username,
            password:hashPassword,
            profilePhoto:(gender==="male")?maleAvater:femaleAvater,
            gender
        })

        return res.status(201).json({
            message:"Account created successfully!",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
};

export const login=async(req,res)=>{
    try {
        const {username,password}=req.body;
    
        if(!username || !password)
            return res.status(400).json({message:"All field are required!"});
    
        const user=await User.findOne({username});
    
        if(!user){
            return res.status(400).json({
                message:"invalid username or password!",
                success:false
            })
        }
    
        const isPasswordMatch=await bcrypt.compare(password,user.password);
    
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"invalid username or password!",
                success:false
            })
        }
    
        const tokenData={
            userId:user._id
        };
    
        const token=await jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
    
        const cookiesOption={
            maxAge:process.env.COOKIE_EXPIRE*24*60*60*1000,
            httpOnly:true,
            sameSite:'strict'
        };
    
        return res.status(200).cookie('token',token,cookiesOption).json({message:"User logged in successfully!",user,token});
    } catch (error) {
        console.log(error);
    }
};

export const logout=async(req,res)=>{
   try {
        return res.status(200).cookie("token",null,{maxAge:0}).json({
            message:"user logged out successfully!"
        });
    }catch (error) {
        console.log(error);
   }
}

export const getOtherUsers=async(req,res)=>{
    try {
        const logInuserId=req.user._id;
        const otherUser=await User.find({_id:{$ne:logInuserId}}).select("-password");
        return res.status(200).json(otherUser);
    } catch (error) {
        console.log(error);
    }
}