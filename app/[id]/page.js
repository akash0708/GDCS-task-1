import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";

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
      <div className="relative bg-blue-900 w-full h-96 mx-auto text-center">
        <div className="container w-2/3 h-fit relative mx-auto top-36 rounded-3xl overflow-hidden bg-red-500">
          <div className="image_box relative w-full h-fit mx-auto">
            <img
              src={cardData.banner_image}
              className="relative w-full h-full"
              alt=""
            />
          </div>
          <div className="details realtive w-full h-fit text-left px-12">
            <p className="relative text-5xl font-Poppins font-extrabold py-12">
              {cardData.title}
            </p>
            <p className="relative text-4xl font-Poppins mb-6 font-semibold">
              Description
            </p>
            <p className="relative pb-12 font-Poppins">
              {cardData.description}
            </p>
            <p className="relative text-4xl font-Poppins mb-6 font-semibold">
              Organiser
            </p>
            <div>
              <p className="relative pb-12 font-Poppins">
                {cardData.organiser_name}
              </p>
            </div>
            <p className="relative text-4xl font-Poppins mb-6 font-semibold">
              Date and Time
            </p>
            <p className="relative pb-12 font-Poppins">
              {eventDate.toLocaleString()}
            </p>
            <div className="relative bg-yellow-400">
              hello
              <AddToCalendarButton
                name="Title"
                options={["Apple", "Google"]}
                location="World Wide Web"
                startDate="2023-08-30"
                endDate="2023-08-30"
                startTime="10:15"
                endTime="23:30"
                timeZone="America/Los_Angeles"
              ></AddToCalendarButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
