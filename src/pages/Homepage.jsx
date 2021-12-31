import React from 'react'
import CategoriesPreview from '../components/CategoriesPreview'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HomeMain from '../components/HomeMain'
import PreFooter from '../components/PreFooter'

const Homepage = () => {
    return (
        <div>
            <Hero/>
            <div className="w-11/12 flex flex-col max-w-[1440px] mx-auto">
            <CategoriesPreview />
            <HomeMain/>
            <PreFooter/>
            <Footer/>
            </div>
        </div>
    )
}

export default Homepage
