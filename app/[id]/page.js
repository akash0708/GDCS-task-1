import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

async function getData() {
  const res = await fetch("https://gdscdev.vercel.app/api");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }) => {
  const data = await getData();
  const card = data.content.data;
  const cardData = card[params.id - 1];

  // ------------------- Date conversion -------------------
  let eventDate = new Date(cardData.date_time);

  return (
    <>
      <Navbar />
      <div className="w-full h-fit">
        <div className="relative bg-blue-900 w-full h-96 mx-auto text-center"></div>
        <div className="container sm:w-2/3 w-4/5 h-fit relative mx-auto pb-6 sm:-top-48 -top-60 rounded-3xl overflow-hidden bg-white border-2">
          <div className="image_box relative w-full h-64 sm:h-fit mx-auto">
            <img
              src={cardData.banner_image}
              className="relative w-full h-full"
              alt=""
            />
          </div>
          <div className="details realtive w-full h-fit sm:text-left text-center sm:px-12 px-8">
            <p className="relative sm:text-5xl text-4xl font-Poppins font-extrabold py-12">
              {cardData.title}
            </p>
            <p className="relative sm:text-4xl text-3xl text-[#61677A] font-Poppins mb-6 font-semibold">
              Description
            </p>
            <p className="relative pb-12 font-Poppins text-[#6B728E]">
              {cardData.description}
            </p>
            <p className="relative sm:text-4xl text-3xl text-[#61677A] font-Poppins mb-6 font-semibold">
              Organiser
            </p>
            <div>
              <p className="relative pb-12 font-Poppins text-[#6B728E]">
                {cardData.organiser_name}
              </p>
            </div>
            <p className="relative sm:text-4xl text-3xl text-[#61677A] font-Poppins mb-6 font-semibold">
              Date and Time
            </p>
            <p className="relative pb-12 font-Poppins text-[#6B728E]">
              {eventDate.toLocaleString()}
            </p>
            <p className="relative sm:text-4xl text-3xl text-[#61677A] font-Poppins mb-6 font-semibold">
              Venue
            </p>
            <p className="relative mb-2 font-Poppins text-[#6B728E]">
              At {cardData.venue_name}
            </p>
            <p className="relative mb-2 font-Poppins text-[#6B728E]">
              {cardData.venue_city}, {cardData.venue_country}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
