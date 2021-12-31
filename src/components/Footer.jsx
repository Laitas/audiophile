import React from "react";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { ReactComponent as Twitter} from "../assets/shared/desktop/icon-twitter.svg"
import { ReactComponent as Facebook} from "../assets/shared/desktop/icon-facebook.svg"
import { ReactComponent as Insta} from "../assets/shared/desktop/icon-instagram.svg"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black py-8 px-6 flex flex-col sm:text-left text-center">
      <div className="flex  items-center sm:items-start md:justify-between flex-col md:flex-row my-4">
        <Logo />
        <ul className="flex my-4 md:my-0 flex-col sm:flex-row">
          <li className="uppercase text-white mr-2 hover:text-orange my-2 sm:my-0">
            <Link to="/">Home</Link>
          </li>
          <li className="uppercase text-white mx-2 hover:text-orange my-2 sm:my-0">
            <Link to="/headphones">Headphones</Link>
          </li>
          <li className="uppercase text-white mx-2 hover:text-orange my-2 sm:my-0">
            <Link to="/speakers">Speakers</Link>
          </li>
          <li className="uppercase text-white mx-2 hover:text-orange my-2 sm:my-0">
            <Link to="/earphones">Earphones</Link>
          </li>
        </ul>
      </div>
      <p className="text-gray-300">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex sm:items-center sm:items-start justify-between mt-6 flex-col sm:flex-row">
          <p className="text-gray-300">Copyright 2021. All Rights Reserved</p>
          <div className="flex justify-center mt-4 items-center">
              <Link to={'#'}>
              <Twitter/>
              </Link>
              <Link to={'#'}>
              <Facebook className="mx-4"/>
              </Link>
              <Link to={'#'}>
              <Insta/>
              </Link>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
