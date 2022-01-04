import React from 'react'
import { useNavigate } from 'react-router'

const BackButton = () => {
    const navigate = useNavigate()
    return (
        <button onClick={()=> navigate(-1)} className='text-gray-500 cursor-pointer hover:underline'>Go Back</button>

    )
}

export default BackButton
