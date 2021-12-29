import React from 'react'
import {ReactComponent as IconArrow} from '../assets/shared/desktop/icon-arrow-right.svg'

const Button = ({v, text, onClick}) => {
    switch(v){
        case 1:
        return <button onClick={onClick} className='uppercase bg-orange hover:bg-light-orange transition-all duration-300 p-4 text-white font-bold text-sm tracking-wide'>{text}</button>
        case 2:
        return <button onClick={onClick} className='uppercase bg-transparent border hover:bg-black hover:text-white transition-all duration-300 p-4 text-black font-bold text-sm tracking-wide'>{text}</button>
        case 3:
        return <button onClick={onClick} className='uppercase bg-transparent hover:text-orange transition-all duration-300 p-4 text-gray-400 font-bold text-sm tracking-wide flex items-center'>{text} <IconArrow className='ml-4'/></button>
        default : 
        return <button onClick={onClick} className='uppercase bg-orange hover:bg-light-orange transition-all duration-300 p-4 text-white font-bold text-sm tracking-wide'>{text}</button>
    }
}

export default Button
