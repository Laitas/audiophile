import React from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
const CategoryCard = ({ category, img, className }) => {
  const navigate = useNavigate()
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
    <div className="relative w-full max-w-[350px] min-h-[160px] max-h-[200px] bg-custom-light-gray rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
        <div className="absolute w-40 h-40 p-2 z-10 -top-12">
            <div className="rounded-full w-full h-full overflow-auto">
            <img className=" object-cover" src={img} alt={category} />
            </div>
        </div>
        <div className="flex items-center flex-col">
          <h3 className="uppercase font-bold">{category}</h3>
          <Button v={3} onClick={() => navigate(`/${category.toLowerCase()}`)} text={"shop"} />
         </div>
    </div>
</div>
  );
};

export default CategoryCard;
