import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const QuantityButton = ({ quantity, item, qty, setQty }) => {
    // Quantity is used for checkout/modal
    // Qty is used for product page
  const { increase, decrease } = useContext(CartContext);
  if (qty) {
    return (
      <div className="flex items-center h-full bg-custom-gray font-bold">
        {qty <= 1 ? (
          <button className="font-bold flex flex-1 justify-center cursor-pointer  text-gray-500 hover:text-orange">
            -
          </button>
        ) : (
          <button
            onClick={() => setQty(prevValue => prevValue - 1)}
            className="font-bold flex flex-1 justify-center cursor-pointer  text-gray-500 hover:text-orange"
          >
            -
          </button>
        )}
        <span className="flex flex-1 justify-center">{qty}</span>
        <button
          onClick={() => setQty(prevValue => prevValue + 1)}
          className="font-bold flex flex-1 justify-center cursor-pointer text-gray-500 hover:text-orange"
        >
          +
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center h-full bg-custom-gray font-bold">
        <button
          onClick={() => decrease(item)}
          className="font-bold flex flex-1 justify-center cursor-pointer  text-gray-500 hover:text-orange"
        >
          -
        </button>
      <span className="flex flex-1 justify-center">{quantity}</span>
      <button
        onClick={() => increase(item)}
        className="font-bold flex flex-1 justify-center cursor-pointer text-gray-500 hover:text-orange"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
