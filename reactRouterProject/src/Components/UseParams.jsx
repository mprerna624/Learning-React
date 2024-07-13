import React from 'react'
import { useParams } from 'react-router-dom'

function UseParams() {

    const {userId} = useParams();

  return (
    <h1 className='text-center my-3'>UseParams: User Id = {userId}</h1>
  )
}

export default UseParams