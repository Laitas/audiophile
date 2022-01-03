import React from 'react'
import CategoriesPreview from '../components/CategoriesPreview'
import CategoryHero from '../components/CategoryHero'
import PreFooter from '../components/PreFooter'
import Product from '../components/Product'
import data from '../data.json'
const Earphones = () => {
    const products = data.filter(product => product.category === 'earphones')
    return (
        <div>
            <CategoryHero category={"earphones"} />
            <div className="w-11/12 flex flex-col max-w-[1440px] min-h-screen mx-auto">
                {products.map((product,id) =>(
                    <Product key={id} product={product} />
                    ))}
                <CategoriesPreview />
                <PreFooter />
            </div>
        </div>
    )
}

export default Earphones
