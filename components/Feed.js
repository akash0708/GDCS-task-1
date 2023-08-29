import { getData } from "@Utils/getdata";
import { Pagewrapper } from "./Pagewrapper";
import Card from "./Card";

const Feed = async () => {
  const data = await getData();
  const card = data.content.data;

  return (
    <>
      <Pagewrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 mx-auto pt-20">
          {card.map((current) => {
            return (
              <Card
                iconImage={current.organiser_icon}
                bannerImage={current.banner_image}
                title={current.title}
                date={current.date_time}
                city={current.venue_city}
                country={current.venue_country}
                id={current.id}
              />
            );
          })}
        </div>
      </Pagewrapper>
    </>
  );
};

export default Feed;
