import React from "react";
import pngwing from "../../../assets/pngwing 1.png"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] container mx-auto rounded-2xl mt-4">
      <div className="hero-content flex-col lg:flex-row-reverse w-full  gap-20">
        <img
          src={pngwing}
          className=" rounded-lg "
        />
        <div className="playfair text-center md:text-left">
          <h1 className="text-6xl font-bold">Books to freshen  up your bookshelf</h1>
          <button className="mt-10 btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
