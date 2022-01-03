import {useState} from 'react'

const QuantityButton = () => {
    const [num,setNum] = useState(0)
    return (
        <div className='flex items-center w-[120px] bg-custom-gray mr-4 font-bold'>
            {num <= 0 ?
         <span className='flex flex-1 justify-center cursor-pointer  text-gray-500'>-</span>
         :
         <span onClick={() => setNum(prevState => prevState - 1)} className='flex flex-1 justify-center cursor-pointer  text-gray-500'>-</span>
        }
            <span className='flex flex-1 justify-center'>{num}</span>
            <span onClick={() => setNum(prevState => prevState + 1)} className='flex flex-1 justify-center cursor-pointer text-gray-500'>+</span>
        </div>
    )
}

export default QuantityButton
