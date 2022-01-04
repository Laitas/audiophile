import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";

const Summary = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="font-bold">
      <h2 className="mb-8">Summary</h2>
      {cart.map((item) => {
        const { image, name, quantity, price, id } = item;
        return (
          <div key={id} className="grid mb-12 grid-cols-3">
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
              <p>$ {price}</p>
            </div>
            <p className="flex items-center justify-end text-gray-500">
              x{quantity}
            </p>
          </div>
        );
      })}
      <div className="uppercase flex justify-between my-2">
        <p className="text-gray-500 pr-2">total</p>
        <p>$ {total.toLocaleString()}</p>
      </div>
      <div className="uppercase flex justify-between my-2">
        <p className="text-gray-500 pr-2">shipping</p>
        <p>$ 50</p>
      </div>
      <div className="uppercase flex justify-between my-2">
        <p className="text-gray-500 pr-2">vat (included)</p>
        <p>$ {(total * 0.2).toFixed(2).toLocaleString()}</p>
      </div>
      <div className="uppercase flex justify-between my-6">
        <p className="text-gray-500 pr-2">grand total</p>
        <p className="text-orange">$ {(total + 50).toLocaleString()}</p>
      </div>
      <div className="flex flex-col">
      <Button text={"continue & pay"}/>
      </div>
    </div>
  );
};

export default Summary;
