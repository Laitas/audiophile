import {useEffect, useState} from 'react'
import { useNavigate,useParams } from 'react-router';
import Button from '../components/Button';
import CategoriesPreview from '../components/CategoriesPreview';
import PreFooter from '../components/PreFooter';
import QuantityButton from '../components/QuantityButton';
import RandomItem from '../components/RandomItem';
import data from '../data.json'
import useWindowWidth from '../hooks/useWindowWidth';

const Product = () => {
    const [width] = useWindowWidth()
    const [randomIDS,setRandomIDS] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    const product = data.find(product => product.slug === params.id)

    // Rest of the ids except for the one we're viewing rn
    const ids = data.map(product => product.id);
    const array = ids.filter(current => current !== product.id)
    
    useEffect(()=>{
        //FISHER-YATES SHUFFLE
            let i = array.length
            let j = 0
            let temp
            
            while (i--) {
                
                j = Math.floor(Math.random() * (i+1));
                // swap randomly chosen element with current element
                temp = array[i];
                array[i] = array[j];
                array[j] = temp; 
                
            }      
            return setRandomIDS(array);
    },[params.id])
    const {  gallery, includes, features, price, description, image, name } = product
    return (
        <div className="w-11/12 flex flex-col max-w-[1440px] mt-8 mx-auto">
            <div className="my-6">
            <button onClick={()=> navigate(-1)} className='text-gray-500 cursor-pointer'>Go Back</button>
            </div>
            <div className="">
                <div className="flex flex-col sm:flex-row">
            <img className='rounded max-h-[560px] sm:w-1/2 sm:mr-4' src={'.' + image.desktop} alt={name} />
            <div className="sm:w-1/2 md:px-8 sm:px-4 flex flex-col sm:justify-center">
            {product.new && 
            <h2 className='text-orange mt-4 uppercase tracking-[0.75em]'>New product</h2>
        }
            <h1 className='md:text-6xl text-4xl font-bold my-4'>{name}</h1>
            <p className='text-gray-500'>{description}</p>
            <p className='font-bold text-2xl mt-4'><span>$</span> {price.toLocaleString()}</p>
            <div className="mt-4 flex">
                <QuantityButton />
                <Button text={'Add to cart'} />
            </div>
        </div>
        </div>
        {/* FEATURES & IN THE BOX */}
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:pr-24 md:flex-[2]">
            <h3 className='md:text-4xl text-2xl mt-24 mb-4 font-bold uppercase'>Features</h3>
            <p className='text-gray-500'>{features}</p>
            </div>
            <div className="flex flex-col md:flex-1">
            <h3 className='md:text-4xl text-2xl mt-24 mb-4 font-bold uppercase'>In the box</h3>
            <ul>
                {includes.map((item,id) =>(
                    <li className='text-gray-500 mb-2' key={id}><span className='font-bold text-orange'>{item.quantity}x </span>{item.item}</li>
                    ))}
            </ul>
            </div>
        </div>
        {/* GALLERY */}
            {width <= 640
            ?
            <div className="my-12">
                <img className='w-full rounded' src={'.' + gallery.first.desktop} alt="" />
                <img className='w-full rounded my-4' src={'.' + gallery.second.desktop} alt="" />
                <img className='w-full rounded' src={'.' + gallery.third.desktop} alt="" />
            </div>
            :
            <div className="flex my-12 justify-center">
                <div className="flex flex-col mr-4">
                <img className='w-full h-full rounded' src={'.' + gallery.first.desktop} alt="" />
                <img className='w-full h-full rounded mt-4' src={'.' + gallery.second.desktop} alt="" />
                </div>
                <div className="flex">
                <img className='w-full rounded' src={'.' + gallery.third.desktop} alt="" />
                </div>
            </div>
            }
            {/* YOU MAY ALSO LIKE */}
            <h3 className='sm:text-4xl text-2xl mt-24 mb-4 text-center font-bold uppercase'>You may also like</h3>
            <div className="grid sm:grid-cols-3 my-6 grid-cols-none gap-x-6 sm:gap-y-0 gap-y-12 grid-rows-3 sm:grid-rows-none">
            {randomIDS.slice(0,3).map(id =>(
                <RandomItem key={id} id={id}/>
                ))}
            </div>
            <div className="mt-36">
            </div>
            <CategoriesPreview />
            <PreFooter />
        </div>
        </div>
    )
}

export default Product
