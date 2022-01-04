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
          <span className="flex flex-1 justify-center cursor-pointer  text-gray-500 hover:text-orange">
            -
          </span>
        ) : (
          <span
            onClick={() => setQty(prevValue => prevValue - 1)}
            className="flex flex-1 justify-center cursor-pointer  text-gray-500 hover:text-orange"
          >
            -
          </span>
        )}
        <span className="flex flex-1 justify-center">{qty}</span>
        <span
          onClick={() => setQty(prevValue => prevValue + 1)}
          className="flex flex-1 justify-center cursor-pointer text-gray-500 hover:text-orange"
        >
          +
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center h-full bg-custom-gray font-bold">
        <span
          onClick={() => decrease(item)}
          className="flex flex-1 justify-center cursor-pointer  text-gray-500 hover:text-orange"
        >
          -
        </span>
      <span className="flex flex-1 justify-center">{quantity}</span>
      <span
        onClick={() => increase(item)}
        className="flex flex-1 justify-center cursor-pointer text-gray-500 hover:text-orange"
      >
        +
      </span>
    </div>
  );
};

export default QuantityButton;
