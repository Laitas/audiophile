import { useState, useEffect, useContext } from "react";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { ReactComponent as CartIcon } from "../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Hamburger } from "../assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import useWindowWidth from "../hooks/useWindowWidth";
import CategoriesPreview from "./CategoriesPreview";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
const Nav = () => {
  const [width] = useWindowWidth();
  const [active, setActive] = useState(true);
  const [cartModal,setCartModal] = useState(false);
  const location = useLocation()
  const { itemsTotal } = useContext(CartContext)

  useEffect(() =>{
    setActive(false)
    setCartModal(false)
  },[location])
  if (width <= 768) {
    return (
      <nav className="bg-black flex z-20 sticky top-0">
        <div className="md:w-11/12 md:px-0 px-8 w-screen py-8 border-b border-gray-600 flex justify-between">
          {/* NAV BURGER MEDIA QUERIES */}
          {width >= 640 ? (
            <section className="flex items-center">
              <Hamburger
                onClick={() => setActive(!active)}
                className="mr-4 cursor-pointer hover:rotate-90 transition-all"
              />
              <Link to="/">
                <Logo className="cursor-pointer" />
              </Link>
              <CategoriesPreview
                active={active}
                className={
                  active
                    ? "fixed top-0 pt-20 !flex-col left-1/2 -translate-x-1/2 h-full w-full z-10 bg-white transition-all duration-300"
                    : "fixed -top-[200vh] pt-20 !flex-col left-1/2 -translate-x-1/2 h-full w-full z-10 bg-white transition-all duration-300"
                }
              />
            </section>
          ) : (
            <>
              <Hamburger
                onClick={() => setActive(!active)}
                className="mr-4 cursor-pointer hover:rotate-90 transition-all"
                />
              <section>
                <Link to="/">
                  <Logo className="cursor-pointer" />
                </Link>
                <CategoriesPreview
                active={active}
                className={
                  active
                  ? "fixed top-0 pt-20 !flex-col left-1/2 -translate-x-1/2 h-full w-full z-10 bg-white transition-all duration-300"
                  : "fixed -top-[200vh] pt-20 !flex-col left-1/2 -translate-x-1/2 h-full w-full z-10 bg-white transition-all duration-300"
                }/>
              </section>
            </>
          )}
          {/* --- */}
          <section onClick={()=> setCartModal(!cartModal)} className="relative">
            <CartIcon className="cursor-pointer" />
        {itemsTotal > 0 &&
        <div className="absolute -top-5 -right-3 bg-orange text-white px-2 rounded-full"><small>{itemsTotal}</small></div>
        }
          </section>
        </div>
        {/* CART MODAL */}
        <div className={`${cartModal ? 'visible' : 'hidden'} fixed inset-0 top-[90px] bg-[rgba(0,0,0,0.35)]`}>
        <div className="absolute sm:right-4 right-0">
        <Cart dropdown={setCartModal}/>
        </div>
        </div>
        {/* --- */}
      </nav>
    );
  } else {
    return (
      <nav className="bg-black z-20 flex justify-center">
        <div className="md:w-11/12 md:px-0 px-8 w-screen py-8 border-b border-gray-600 flex justify-between">
          <section>
            <Link to="/">
              <Logo className="cursor-pointer" />
            </Link>
          </section>
          <section>
            <ul className="flex">
              <li className="uppercase text-white mx-2 hover:text-orange">
                <Link to="/">Home</Link>
              </li>
              <li className="uppercase text-white mx-2 hover:text-orange">
                <Link to="/headphones">Headphones</Link>
              </li>
              <li className="uppercase text-white mx-2 hover:text-orange">
                <Link to="/speakers">Speakers</Link>
              </li>
              <li className="uppercase text-white mx-2 hover:text-orange">
                <Link to="/earphones">Earphones</Link>
              </li>
            </ul>
          </section>
          <section onClick={()=> setCartModal(!cartModal)} className="relative">
            <CartIcon className="cursor-pointer" />
        {itemsTotal > 0 &&
        <div className="absolute -top-5 -right-3 bg-orange text-white px-2 rounded-full"><small>{itemsTotal}</small></div>
        }
          </section>
        </div>
        {/* CART MODAL */}
        <div className={`${cartModal ? 'visible' : 'hidden'} fixed inset-0 z-20 bg-[rgba(0,0,0,0.35)]`}>
        <div className="absolute right-8">
        <Cart dropdown={setCartModal}/>
        </div>
        </div>
        {/* --- */}
      </nav>
    );
  }
};

export default Nav;
