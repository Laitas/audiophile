import React from "react";
import ImageDesktop from "../assets/shared/desktop/image-best-gear.jpg";
import ImageTablet from "../assets/shared/tablet/image-best-gear.jpg";
import ImageMobile from "../assets/shared/mobile/image-best-gear.jpg";
import useWindowWidth from "../hooks/useWindowWidth";

const PreFooter = () => {
  const [width] = useWindowWidth();
  return (
    <div className="flex flex-col md:flex-row-reverse pb-6">
      <div className="flex flex-1 max-h-[600px]">
        {width <= 640 ? (
          <img className="w-full rounded" src={ImageMobile} alt="" />
        ) : (
          <img
            className="w-full rounded"
            src={width >= 1024 ? ImageDesktop : ImageTablet}
            alt=""
          />
        )}
      </div>
      <div className="md:text-left md:mx-6 text-center flex flex-1 flex-col justify-center">
        <h3 className="my-6 xl:text-6xl sm:text-4xl text-2xl uppercase font-bold">
          Bringing you the <span className="text-orange">best</span> audio gear
        </h3>
        <p className="text-gray-600">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default PreFooter;
