import {useContext} from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import Input from "./Input";

const RadioButtons = () => {
    const { checkedRadio, setChecked, errors, form,handleChange } = useContext(CheckoutContext)
  return (
      <div className="my-6 flex flex-col">
          <div className="grid sm:grid sm:grid-cols-2 sm:grid-rows-2">
      <label className={`sm:row-end-1 sm:col-end-3 font-bold my-2 border p-4 rounded cursor-pointer hover:border-orange relative  after:absolute after:w-5 after:h-5 after:left-3 after:top-4 after:rounded-full after:border after:border before:w-3 before:h-3 before:absolute before:rounded-full before:left-4 before:top-5 ${checkedRadio === 'e-money' && 'before:bg-orange before:bg-orange'}`}>
        <input onClick={()=> setChecked('e-money')} className="mr-4 opacity-0" type="radio" name="ecash" id="ecash" />
        e-Money
      </label>
      <label className={`sm:row-end-2 sm:col-end-3 font-bold my-2 border p-4 rounded cursor-pointer hover:border-orange relative  after:absolute after:w-5 after:h-5 after:left-3 after:top-4 after:rounded-full after:border after:border before:w-3 before:h-3 before:absolute before:rounded-full before:left-4 before:top-5 ${checkedRadio === 'cash' && 'before:bg-orange before:bg-orange'}`}>
        <input onClick={()=> setChecked('cash')} className="mr-4 opacity-0" type="radio" name="ecash" id="ecash" />
        Cash on Delivery
      </label>
          </div>

      {checkedRadio === 'e-money' &&
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-12">
        <Input type={"number"} name={'enum'} label={"e-Money Number"} placeholder={"23851992"} value={form.enum} onChange={handleChange} error={errors.enum}/>
        <Input type={"number"} name={'epin'} label={"e-Money PIN"} placeholder={"6891"} value={form.epin} onChange={handleChange} error={errors.epin}/>
   
      </div>
      }
      </div>
  );
};

export default RadioButtons;
