import React from "react";
import Link from "next/link";

const Card = ({ iconImage, bannerImage, title, date, city, country, id }) => {
  return (
    <div className="relative text-center mt-12 mb-8 mx-auto w-72 lg:w-96 md:w-80 h-[34rem] pb-4 bg-[#F6F1E9] rounded-2xl overflow-hidden">
      <div className="absolute flex justify-center items-center top-1/2 sm:left-[40%] left-1/3 w-24 h-24 bg-white z-10 rounded-full">
        <img src={iconImage} className="relative w-11/12 h-11/12" alt="" />
      </div>
      <div className="relative w-full h-3/5 overflow-hidden">
        <img
          src={bannerImage}
          className="relative w-full h-full hover:scale-105 duration-300"
          alt="banner_image"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center my-6">
        <h1 className="relative font-extrabold text-xl mt-7 mb-2 font-Poppins">
          {title}
        </h1>
        <p className="font-Roboto">{`${new Date(date).toDateString()}`}</p>
        <p className="relative font-bold font-Poppins my-3">{`${city}, ${country}`}</p>
        <Link
          href={`/${id}`}
          className="realtive rounded-xl bg-[#0B666A] hover:bg-[#35A29F] transition duration-300 text-white font-Poppins w-3/5 py-2 my-2"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;
