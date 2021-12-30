import React from 'react'
import CategoriesPreview from '../components/CategoriesPreview'
import Hero from '../components/Hero'
import HomeMain from '../components/HomeMain'

const Homepage = () => {
    return (
        <div>
            <Hero/>
            <div className="w-11/12 flex flex-col mx-auto">
            <CategoriesPreview />
            <HomeMain/>
            </div>
        </div>
    )
}

export default Homepage
