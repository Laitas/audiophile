import React from 'react'
import Input from './Input'
import RadioButtons from './RadioButtons'
const CheckoutForm = () => {
    
    return (
        <div className='w-full'>
            <h1 className='uppercase font-bold text-2xl mb-12'>Checkout</h1>
            <p className='uppercase font-bold text-orange my-6'>Billing details</p>
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-12">
            <Input name={'name'} label={"Name"} placeholder={'Alexei Ward'}/>
            <Input name={'email'} label={"Email Address"} placeholder={"alexei@mail.com"} />
            <Input name={'phone'} label={"Phone Number"} placeholder={"+1 202-555-0136"} />
            </div>
            <p className='uppercase font-bold text-orange my-6'>Shipping info</p>
            <Input name={'address'} label={"Your Address"} placeholder={"1137 Williams Avenue"} />
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-12">
            <Input name={'zipcode'} label={"ZIP Code"} placeholder={"10010"} />
            <Input name={'city'} label={"City"} placeholder={"New York"} />
            <Input name={'country'} label={"Country"} placeholder={"United States"} />
            </div>
            <p className='uppercase font-bold text-orange my-6'>Payment details</p>
            <h3 className='uppercase font-bold text-sm'>Payment Method</h3>
            <RadioButtons/>
        </div>
    )
}

export default CheckoutForm
