import React from 'react'

const CategoryHero = ({category}) => {
    return (
        <div>
            <h1 className='uppercase font-bold text-white bg-black md:p-24 p-12 flex justify-center md:text-6xl text-4xl mb-12'>{category}</h1>
        </div>
    )
}

export default CategoryHero
