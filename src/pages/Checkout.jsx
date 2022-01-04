import { useContext } from "react";
import BackButton from "../components/BackButton";
import CheckoutForm from "../components/CheckoutForm";
import Summary from "../components/Summary";
import { CartContext } from "../context/CartContext";
const Checkout = () => {
    const {cart} = useContext(CartContext)
  return (
    <div className="bg-custom-light-gray">
      <div className="w-11/12 flex pb-12 flex-col max-w-[1440px] min-h-screen mx-auto">
          {cart.length === 0 ?
          <div className="flex my-auto justify-center">
            <h1>Your cart is empty, pls stop testing</h1>
          </div>
            :  
            <>
        <div className="py-8">
          <BackButton />
        </div>
        <div className="md:flex">
        <div className="md:flex flex-[2] rounded p-6 mb-12 md:mb-0 bg-white">
          <CheckoutForm />
        </div>
        <div className="md:flex flex-1 self-start md:max-w-[400px] items-start rounded p-6 bg-white md:ml-8">
          <Summary />
        </div>
        </div>
            </>
    }
      </div>
    </div>
  );
};

export default Checkout;
