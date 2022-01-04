import {useContext, useRef} from 'react'
import { CartContext } from '../context/CartContext'
import useOutsideClick from '../hooks/useOutsideClick'
import {Link} from 'react-router-dom'
import Button from './Button'
const CheckoutModal = ({showModal}) => {
    const {cart, total,setCart} = useContext(CartContext)
    const ref = useRef()
    useOutsideClick(ref, () => showModal(false));
    const { id,name,image,price,quantity} = cart[0]
    return (
        <div className='fixed flex flex-col justify-center items-center inset-0 bg-[rgba(0,0,0,0.3)]'>
            <div ref={ref} className="flex flex-col bg-white p-6 rounded">
            <div className="flex">
            <p className='flex justify-center items-center w-24 h-24 text-4xl rounded-full text-white  bg-orange'>&#x2713;</p>
            </div>
            <h1 className='sm:text-4xl text-2xl my-6'>Thank you for your order</h1>
            <p className='text-gray-500'>You will receive an email confirmation shortly.</p>
            <div className="flex my-12 rounded overflow-hidden">
                <div className="bg-custom-gray">
          <div key={id} className="grid grid-cols-3 sm:m-6 m-2 border-b-2">
            <img
              className="max-w-[64px] max-h-[64px] rounded"
              src={"." + image.desktop}
              alt={name}
              />
            <div className="flex flex-col justify-center ml-4">
              <p>
                {name
                  .replace("Headphones", "")
                  .replace("Speaker", "")
                  .replace("Earphones", "")}
              </p>
              <p className='text-gray-500'>$ {price}</p>
            </div>
            <p className="flex items-center justify-end text-gray-500">
              x{quantity}
            </p>
                  </div>
                  {
                      cart.length > 1 &&
          <p className='flex justify-center sm:-mt-4 pb-4 text-gray-500'>and {cart.length - 1} other item(s)</p>
                  }
          </div>
          <div className="flex flex-col justify-center items-center sm:p-6 p-2 bg-black">
              <p className='text-gray-500'>Grand total</p>
              <p className='text-white'>$ {(total + 50).toLocaleString()}</p>
          </div>
            </div>
                        <Link className='flex flex-col' to='/'>
                        <Button onClick={()=> setCart([])} text={"Back to home"} />
                        </Link>
            </div>
        </div>
    )
}

export default CheckoutModal
