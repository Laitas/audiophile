import React from 'react'
import {ReactComponent as IconArrow} from '../assets/shared/desktop/icon-arrow-right.svg'

const Button = ({v, text, onClick}) => {
    switch(v){
        case 1:
        return <span onClick={onClick} className='uppercase bg-orange hover:bg-light-orange transition-all duration-300 p-4 text-white font-bold text-sm tracking-wide'>{text}</span>
        case 2:
        return <span onClick={onClick} className='uppercase bg-transparent border border-black hover:bg-black hover:text-white transition-all duration-300 p-4 text-black font-bold text-sm tracking-wide'>{text}</span>
        case '2inverse':
        return <span onClick={onClick} className='uppercase bg-black border border-black hover:bg-transparent hover:text-black transition-all duration-300 p-4 text-white font-bold text-sm tracking-wide'>{text}</span>
        case 3:
        return <span onClick={onClick} className='uppercase bg-transparent hover:text-orange transition-all duration-300 p-4 text-gray-400 font-bold text-sm tracking-wide flex items-center'>{text} <IconArrow className='ml-4'/></span>
        case 'cart':
        return <button onClick={onClick} className='uppercase bg-orange hover:bg-light-orange transition-all duration-300 p-4 text-white font-bold text-sm tracking-wide'>Add to cart</button>
        default : 
        return <span onClick={onClick} className='uppercase bg-orange hover:bg-light-orange transition-all duration-300 p-4 text-white font-bold text-sm tracking-wide'>{text}</span>
    }
}

export default Button
