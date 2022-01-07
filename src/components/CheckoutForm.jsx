import { useContext } from 'react'
import { CheckoutContext } from '../context/CheckoutContext'
import Input from './Input'
import RadioButtons from './RadioButtons'
const CheckoutForm = () => {
    const {form, handleChange, errors} = useContext(CheckoutContext)
    
    return (
        <div className='w-full'>
            <h1 className='uppercase font-bold text-2xl mb-12'>Checkout</h1>
            <p className='uppercase font-bold text-orange my-6'>Billing details</p>
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-12">
            <Input name={'name'} label={"Name"} placeholder={'Alexei Ward'} value={form.name} onChange={handleChange} error={errors.name}/>
            <Input name={'email'} label={"Email Address"} placeholder={"alexei@mail.com"} value={form.email}  onChange={handleChange} error={errors.email}/>
            <Input name={'phone'} label={"Phone Number"} placeholder={"+1 202-555-0136"} value={form.phone}  onChange={handleChange} error={errors.phone}/>
            </div>
            <p className='uppercase font-bold text-orange my-6'>Shipping info</p>
            <Input name={'address'} label={"Your Address"} placeholder={"1137 Williams Avenue"} value={form.address} onChange={handleChange} error={errors.address}/>
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-12">
            <Input name={'zipcode'} label={"ZIP Code"} placeholder={"10010"} value={form.zipcode}  onChange={handleChange} error={errors.zipcode}/>
            <Input name={'city'} label={"City"} placeholder={"New York"} value={form.city} onChange={handleChange} error={errors.city}/>
            <Input name={'country'} label={"Country"} placeholder={"United States"} value={form.country} onChange={handleChange} error={errors.country}/>
            </div>
            <p className='uppercase font-bold text-orange my-6'>Payment details</p>
            <h3 className='uppercase font-bold text-sm'>Payment Method</h3>
            <RadioButtons/>
            {
                Object.keys(errors).length > 0 && <p className='text-red-600'>Please fill in all the fields correctly</p>
            }
        </div>
    )
}

export default CheckoutForm
