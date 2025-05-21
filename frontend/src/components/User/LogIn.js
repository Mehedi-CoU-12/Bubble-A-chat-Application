import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {Link} from 'react-router-dom'
import { useState } from "react";
import axios from "axios";

function LogIn() {

    const [user,setUser]=useState({
        username:'',
        password:''
    });

    const handleSubmit=async(e)=>{
        e.preventDefault();

        console.log(user)

        const config={
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        }

        try {

            const {data}=await axios.post(`http://localhost:8080/api/v1/user/login`,user,config);
            
            console.log(data);


        } catch (error) {
            console.log(error);
        }


        setUser({
            username:'',
            password:'',
        })
    }

    return (
        <div className="min-w-96 mx-auto">
            <div className="w-full p-6 bg-gray-400 shadow-md rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">

                <h1 className="text-3xl font-bold text-center mb-6">Log-in</h1>
                <form action="" onSubmit={handleSubmit} >

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-800">
                            <MailOutlineIcon />
                        </div>
                        <input
                            value={user.username}
                            onChange={(e)=>setUser({...user,username:e.target.value})}
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none bg-gray-300 text-black"
                            type="text"
                            placeholder="Username"
                        />
                    </div>

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-800">
                            <LockOpenIcon />
                        </div>
                        <input
                            value={user.password}
                            onChange={(e)=>setUser({...user,password:e.target.value})}
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none bg-gray-300 text-black"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <p className="pb-3" >Don't have an account? <Link to='/register'> Sign Up </Link> </p>
                    <div>
                        <button 
                            className="w-full bg-gray-300 text-gray-800 hover:bg-gray-600 hover:text-gray-100 font-bold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Log in
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default LogIn;
