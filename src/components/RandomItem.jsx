import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data.json'
import Button from './Button';
const RandomItem = ({id}) => {
    const product = data.find(product => product.id === id)
    const {image,name,category,slug} = product
    return (
        <div className='flex flex-col justify-between text-center items-center'>
            <img className='rounded' src={"." + image.desktop} alt={name} />
            <h3 className='font-bold md:text-4xl text-2xl my-4'>{name}</h3>
            <Link className='flex justify-end' to={`/${category}/${slug}`}>
            <Button text={"see product"}/>
            </Link>
        </div>
    )
}

export default RandomItem
