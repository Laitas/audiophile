import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Product = ({product}) => {
    const {categoryImage,slug,name,description} = product
    return (
        <div className="md:even:flex-row-reverse flex md:flex-row flex-col md:my-12 my-6 items-center text-center">
            <img className='rounded flex w-1/2 md:max-h-[560px]' src={categoryImage.desktop} alt={name} />
            <div className="w-1/2 md:flex flex-col sm:mx-4 md:mx-8">
            {product.new && 
            <h2 className='text-orange mt-4 uppercase tracking-[0.75em]'>New product</h2>
            }
            <h1 className='md:text-6xl text-4xl font-bold uppercase my-4'>{name}</h1>
            <p className='text-gray-500'>{description}</p>
            <div className="my-6">
            <Link to={slug}>
            <Button text={"see product"}/>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default Product
