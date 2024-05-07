import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Button } from "../../../shared/components";
import { IWork } from "../interfaces";
import { CSSProperties, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

export const FutureSwiper = ({ data }: { data: IWork[] }) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="w-[1224px] mt-8">
      <Swiper
        style={
          {
            "--swiper-pagination-color": "rgb(147 51 234 )",
          } as CSSProperties
        }
        spaceBetween={50}
        slidesPerView={2}
        className="w-full h-60 "
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        grabCursor
      >
        {data.map((elem) => {
          return (
            <SwiperSlide style={{ width: "680px" }} key={elem.id}>
              <div className="flex justify-between flex-col h-3/4 border-l-4 border-l-purple-600 p-2">
                <div className="text-2xl">
                  <h2>{elem.name}</h2>
                  <h2>{"от" + elem.cost + "₽"}</h2>
                  <p className="text-gray-400">{elem.place}</p>
                </div>
                <div className="flex justify-between text-base">
                  <Button variant="contained">
                    <a href={elem.url} target="_blank">
                      Откликнуться
                    </a>
                  </Button>

                  <Button
                    variant="outlined"
                    onClick={() => setShowPhone(!showPhone)}
                  >
                    {showPhone ? elem.phone : "Показать контакты"}
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
