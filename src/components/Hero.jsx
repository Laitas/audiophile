import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Hero = () => {
    return(

        <header className='bg-black flex justify-center'>
        <div className="md:w-11/12 bg-no-repeat bg-center bg-cover md:bg-right bg-headphonesM sm:bg-headphonesTab md:bg-headphonesL">
        <div className="md:w-1/2 text-center md:text-left sm:px-24 md:px-0 h-600 flex flex-col justify-center p-4 ">
        <h2 className='text-gray-500 uppercase tracking-[0.75em]'>New product</h2>
        <h1 className='md:text-6xl text-4xl uppercase text-white py-8'>XX99 MARK II Headphones</h1>
        <p className='text-white'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <div className='my-8'>
            <Link to={'/headphones/xx99-mark-two-headphones'}>
        <Button text="See product"/>
            </Link>
        </div>
        </div>
        </div>
    </header>
        )
}

export default Hero
