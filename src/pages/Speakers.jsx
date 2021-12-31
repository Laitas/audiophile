import CategoryHero from '../components/CategoryHero'
import Product from '../components/Product'
import CategoriesPreview from '../components/CategoriesPreview'
import PreFooter from '../components/PreFooter'
import data from '../data.json'
const Speakers = () => {
    const products = data.filter(product => product.category === 'speakers')
    return (
        <div>
            <CategoryHero category={"speakers"} />
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

export default Speakers
