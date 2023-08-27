import Link from "next/link";
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

// function format_date()

export default async function Page() {
  const data = await getData();
  const card = data.content.data;
  // console.log(card);

  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-4/5 mx-auto pt-20">
        {card.map((current) => {
          return (
            <div className="relative text-center my-12 mx-auto w-72 sm:w-96 h-[34rem] pb-4 bg-[#F6F1E9] rounded-2xl overflow-hidden">
              <div className="absolute flex justify-center items-center top-1/2 sm:left-[40%] left-1/3 w-24 h-24 bg-white z-10 rounded-full">
                <img
                  src={current.organiser_icon}
                  className="relative w-11/12 h-11/12"
                  alt=""
                />
              </div>
              <div className="relative w-full h-3/5">
                <img
                  src={current.banner_image}
                  className="relative w-full h-full"
                  alt="banner_image"
                />
              </div>
              <div className="relative flex flex-col justify-center items-center my-6">
                <h1 className="relative font-extrabold text-xl mt-7 mb-2 font-Poppins">
                  {current.title}
                </h1>
                <p className="font-Roboto">{`${new Date(
                  current.date_time
                ).toDateString()}`}</p>
                <p className="relative font-bold font-Poppins my-3">{`${current.venue_city}, ${current.venue_country}`}</p>
                <Link
                  href={`/${current.id}`}
                  className="realtive rounded-xl bg-[#0B666A] hover:bg-[#35A29F] transition duration-300 text-white font-Poppins w-3/5 py-2 my-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
