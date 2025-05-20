import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {Link} from 'react-router-dom'
import { useState } from "react";

function SignUp() {

    const [user,setUser]=useState({
       fullName:'',
       username:'',
       password:'',
       confirmPassword:'',
       gender:''
    })

    const handleCheckBox=(gender)=>{
        setUser({...user,gender});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(user)
    }

    return (
        <div className="min-w-96 mx-auto">
            <div className="w-full p-6 bg-gray-400 shadow-md rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">

                <h1 className="text-3xl font-bold text-center mb-6">SignUp</h1>
                <form action="" onSubmit={handleSubmit} >

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-800">
                            <AccountBoxIcon />
                        </div>
                        <input
                            value={user.fullName}
                            onChange={(e)=>setUser({...user,fullName:e.target.value})}
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none bg-gray-300 text-black"
                            type="text"
                            placeholder="Name"
                        />
                    </div>

                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-800">
                            <MailOutlineIcon />
                        </div>
                        <input
                            value={user.username}
                            onChange={(e)=>setUser({...user,username:e.target.value})}
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none bg-gray-300 text-black"
                            type="email"
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

                    <div className="relative mb-3">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-800">
                            <LockOpenIcon />
                        </div>
                        <input
                            value={user.confirmPassword}
                            onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
                            className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none bg-gray-300 text-black"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div className="flex mb-4">
                        <div className="flex items-center mr-2">
                            <p className="mr-2" >Male</p>
                            <input 
                                type="checkbox" 
                                defaultChecked 
                                className="checkbox" 
                                checked={user.gender==='male'}
                                onChange={()=>handleCheckBox('male')}
                            />
                        </div>

                        <div className="flex items-center">
                            <p className="mr-2" >Female</p>
                            <input 
                                type="checkbox" 
                                defaultChecked 
                                className="checkbox" 
                                checked={user.gender==='female'}
                                onChange={()=>handleCheckBox('female')}
                            />
                        </div>
        
                    </div>
                    <p className="pb-3" >Already have an account? <Link to='/login'> Login </Link> </p>
                    <div>
                        <button 
                            className="w-full bg-gray-300 text-gray-800 hover:bg-gray-600 hover:text-gray-100 font-bold py-2 px-4 rounded-lg transition duration-300">
                            Sign Up
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default SignUp;
