import React from 'react'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as Cart } from '../assets/shared/desktop/icon-cart.svg'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <nav className='bg-black p-4 border-b border-gray flex justify-between'>
            <section>
                <Link to='/'>
                <Logo className="cursor-pointer"/>
                </Link>
            </section>
            <section>
                <ul className='flex'>
                    <li className='uppercase text-white mx-2 hover:text-orange'><Link to="/">Home</Link></li>
                    <li className='uppercase text-white mx-2 hover:text-orange'><Link to="/headphones">Headphones</Link></li>
                    <li className='uppercase text-white mx-2 hover:text-orange'><Link to="/speakers">Speakers</Link></li>
                    <li className='uppercase text-white mx-2 hover:text-orange'><Link to="/earphones">Earphones</Link></li>
                </ul>
            </section>
            <section>
                <Cart className="cursor-pointer"/>
            </section>
        </nav>
    )
}

export default Nav
