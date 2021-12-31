import React from 'react'
import CategoryCard from './CategoryCard'
import Headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Earphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

const CategoriesPreview = ({className, active}) => {
    return (
        <div className={`flex sm:flex-row flex-col my-20 ${className}`}>
            <CategoryCard category={'headphones'} img={Headphones}/>
            <CategoryCard className={`${!active && 'sm:mx-4'} my-24`} category={'speakers'} img={Speakers}/>
            <CategoryCard category={'earphones'} img={Earphones}/>
        </div>
    )
}

export default CategoriesPreview
