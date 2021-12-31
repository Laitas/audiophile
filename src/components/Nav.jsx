import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { ReactComponent as Cart } from "../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Hamburger } from "../assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import useWindowWidth from "../hooks/useWindowWidth";
import CategoriesPreview from "./CategoriesPreview";
const Nav = () => {
  const [width] = useWindowWidth();
  const [active, setActive] = useState(true);
  const location = useLocation()

  useEffect(() =>{
    setActive(false)
  },[location])
  if (width <= 768) {
    return (
      <nav className="bg-black flex z-20 sticky top-0">
        <div className="md:w-11/12 md:px-0 px-8 w-screen py-8 border-b border-gray-600 flex justify-between">
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
          <section>
            <Cart className="cursor-pointer" />
          </section>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="bg-black flex justify-center">
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
          <section>
            <Cart className="cursor-pointer" />
          </section>
        </div>
      </nav>
    );
  }
};

export default Nav;
