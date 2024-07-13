import React from 'react'
import UserInfo from '../context/UserInfo'
import { useContext } from 'react';

function Profile() {

    const {user} = useContext(UserInfo);

    if(!user) return <div className='text-center'>Please enter username & password !!</div>
    return <div className='text-center'>Profile of {user.username} has password {user.password}</div>
    
  
}

export default Profile