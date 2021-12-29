import React from 'react'

const Input = ({type,name, placeholder,label}) => {
    return (
        <div className='flex flex-col'>
            <label className='font-bold text-sm p-2 pl-0' htmlFor={name}>{label}</label>
            <input className='border rounded-md p-2 font-bold focus:outline-orange caret-orange' type={type} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default Input
