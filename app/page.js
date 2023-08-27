import Link from "next/link";

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
    <main className="felx flex-col items-center justify-center text-center">
      {card.map((current) => {
        return (
          <div className="relative text-center my-12 mx-auto w-96 h-[30rem] bg-[#F6F1E9] rounded-2xl overflow-hidden">
            <div className="absolute flex justify-center items-center top-56 left-36 w-24 h-24 bg-white z-10 rounded-full">
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
              <Link href={`/${current.id}`}>
                <h1 className="relative font-extrabold text-xl my-4 font-Poppins">
                  {current.title}
                </h1>
              </Link>
              <p className="font-Roboto">{`${new Date(
                current.date_time
              ).toDateString()}`}</p>
              <p className="relative font-bold font-Poppins my-3">{`${current.venue_city}, ${current.venue_country}`}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
