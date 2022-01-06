import React from "react";
import ZX9 from "../assets/home/desktop/image-speaker-zx9.png";
import ZX7Desktop from "../assets/home/desktop/image-speaker-zx7.jpg";
import ZX7Mobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import ZX7Tablet from "../assets/home/tablet/image-speaker-zx7.jpg";
import YX1Desktop from "../assets/home/desktop/image-earphones-yx1.jpg";
import YX1Tablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import YX1Mobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import Button from "./Button";
import useWindowWidth from "../hooks/useWindowWidth";
import { Link } from "react-router-dom";
const HomeMain = () => {
  const [width] = useWindowWidth();
  return (
    <div className="mb-8">
      {/* ORANGE ZX9 SPEAKER */}
      <div className="w-full mb-8 overflow-hidden flex flex-col md:flex-row items-center p-8 md:px-12 bg-orange rounded">
        <div className="flex relative max-w-[410px] max-h-[500px] min-w-[170px] min-h-[200px]">
          <div className="absolute border border-custom-light-gray w-96 h-96 left-[50%] -translate-x-1/2 rounded-[50%]"></div>
          <div className="absolute border border-custom-light-gray -top-12 left-[50%] -translate-x-1/2 w-[32rem] h-[32rem] rounded-[50%]"></div>
          <div className="absolute border border-custom-light-gray -top-64 left-[50%] -translate-x-1/2 w-[60rem] h-[60rem] rounded-[50%]"></div>
          <img
            className="md:-mb-20 md:p-8 md:p-0 z-10"
            src={ZX9}
            alt="ZX9 speaker"
          />
        </div>
        <div className="flex z-10 flex-col md:pl-24 md:text-left text-center md:items-start items-center py-8">
          <h2 className="uppercase font-bold sm:text-6xl text-4xl text-white">
            ZX9 <br />
            Speaker
          </h2>
          <p className="text-white py-8">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <div className="">
            <Link to="speakers/zx9-speaker">
              <Button v={"2inverse"} text={"See product"} />
            </Link>
          </div>
        </div>
      </div>
      {/* MIDDLE ZX7 SPEAKER */}
      <div className="w-full h-full mb-8 overflow-hidden relative overflow-hidden flex rounded">
        <div className="absolute px-8 top-[50%] -translate-y-1/2">
          <h2 className="font-bold uppercase md:text-6xl sm:text-4xl text-2xl mb-8">
            ZX7 Speaker
          </h2>
          <Link to="speakers/zx7-speaker">
            <Button v={2} text={"see product"} />
          </Link>
        </div>
        {width <= 640 ? (
          <img className="object-fit" src={ZX7Mobile} alt="ZX7 speaker" />
        ) : (
          <img
            className="w-full"
            src={width >= 1024 ? ZX7Desktop : ZX7Tablet}
            alt="ZX7 speaker"
          />
        )}
      </div>
      {/* BOTTOM YX1 EARPHONES */}
      <div className="flex flex-col sm:flex-row sm:justify-between w-full">
        <div className="rounded sm:w-1/2 w-full">
          {width <= 640 ? (
            <img
              className="w-full rounded md:max-h-[320px] max-h-[200px] min-h-[200px]"
              src={YX1Mobile}
              alt="YX1 earphones"
            />
          ) : (
            <img
              className="w-full rounded md:max-h-[320px] max-h-[200px] min-h-[200px]"
              src={width >= 1024 ? YX1Desktop : YX1Tablet}
              alt="YX1 earphones"
            />
          )}
        </div>
        <div className="w-full rounded min-h-[200px] bg-custom-gray sm:w-1/2 w-full sm:ml-4 mt-4 sm:mt-0 flex flex-col justify-center p-4">
          <h2 className="font-bold uppercase sm:text-4xl text-2xl mb-4">
            YX1 Earphones
          </h2>
          <div className="mt-4">
            <Link to={"earphones/yx1-earphones"}>
              <Button v={2} text={"see product"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
