import React, { useEffect, useState } from 'react'

export default function Loginpage() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [errors,setError]=useState("");
    
    useEffect(()=>{
        validateForm();
    },[username,password]);


    const validateForm=()=>{
        const errors={};

        if(username.trim()===""){errors.username='username is required';

        }

            if(password.trim()===''){
                errors.password='password is required';
            }
            
        setError(errors)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(errors).length ===0){
            console.log("Form submitted:",{username,password});
        }else{
            console.log('form invalid:',errors);

        }
        
    }
    const handleUsernameChange=(event) =>{
        setUsername(event.target.value);
    };
    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    };
    
  return (
    <div>
      <h1>LOGIN FORM</h1>
      <form onSubmit={handleSubmit}>
        <label>Username 
            <input type="text" value={username} onChange={handleUsernameChange}/><br />
            {errors.username && <div style={{color:'red'}}> {errors.username}</div>}
        </label>
        <label >Password 
        <input type="text" value={password} onChange={handlePasswordChange}/><br />
        {errors.password && <div style={{color:'red'}}> {errors.password}</div>}
        </label>
        
        <button>Login</button>
        </form>
    </div>
  )
}
