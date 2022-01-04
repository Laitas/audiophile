import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import useOutsideClick from "../hooks/useOutsideClick";
import Button from "./Button";
import QuantityButton from "./QuantityButton";

const Cart = ({ dropdown }) => {
  const { cart, setCart, total, itemsTotal } = useContext(CartContext);
  const ref = useRef();
  useOutsideClick(ref, () => dropdown(false));

  return (
    <div
      ref={ref}
      className="max-w-[500px] md:mt-36 md:mx-0 mt-8 mx-4 bg-white rounded sm:p-8 p-6"
    >
      {cart.length === 0 ? (
        <div className="flex justify-between">
          <h1 className="text-gray-500 md:text-4xl sm:text-2xl text-xl">
            Your cart is empty
          </h1>
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-6">
            <h2 className="uppercase font-bold">cart ({itemsTotal})</h2>
            <button
              className="text-gray-500 hover:underline"
              onClick={() => setCart([])}
            >
              Remove all
            </button>
          </div>
          {cart.map((product) => {
            const { image, name, price, id, quantity } = product;
            return (
              <div key={id} className="grid mb-12 grid-cols-3">
                <img
                  className="max-h-[64px] max-w-[64px]"
                  src={"." + image.desktop}
                  alt={name}
                />
                <div className="flex flex-col justify-center min-w-[80px] sm:mr-8 mr-4 sm:-ml-4 -ml-1">
                  <p className="font-bold sm:mb-2 mb-1">
                    {name
                      .replace("Headphones", "")
                      .replace("Speaker", "")
                      .replace("Earphones", "")}
                  </p>
                  <p className="text-gray-500 font-bold">
                    $ {price?.toLocaleString()}
                  </p>
                </div>
                <div className="flex flex-col w-full my-auto h-1/2">
                  <QuantityButton quantity={quantity} item={product} />
                </div>
              </div>
            );
          })}
          <div className="flex justify-between">
            <p className="uppercase text-gray-500">total</p>
            <h3 className="font-bold">$ {total.toLocaleString()}</h3>
          </div>
          <Link className="flex flex-col mt-6" to={"/checkout"}>
            <Button text={"checkout"} />
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
