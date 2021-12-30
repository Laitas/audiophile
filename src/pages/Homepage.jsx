import React from 'react'
import CategoriesPreview from '../components/CategoriesPreview'
import Hero from '../components/Hero'

const Homepage = () => {
    return (
        <div>
            <Hero/>
            <div className="w-11/12 flex flex-col mx-auto">
            <CategoriesPreview />
            </div>
        </div>
    )
}

export default Homepage
