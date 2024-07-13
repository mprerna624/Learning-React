import React from 'react'
import { useState } from 'react';
import UserInfo from '../context/UserInfo';
import { useContext } from 'react';


function Login() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserInfo);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div className='text-center border-4 p-4 my-4'>
        <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} className='border-black border-2 p-2'/> 
        <br /><br />
        <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border-black border-2 p-2'/>
        <br /><br />
        <button className='border-blue-700 border-2' onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login