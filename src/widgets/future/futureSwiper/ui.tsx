import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Button } from "../../../shared/components";
import { IWork } from "../interfaces";
import { useState } from "react";

export const FutureSwiper = ({ data }: { data: IWork[] }) => {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div className="w-[1224px] mt-8">
      <Swiper spaceBetween={50} slidesPerView={2} className="w-full h-44">
        {data.map((elem) => {
          return (
            <SwiperSlide>
              <div className="flex justify-between flex-col h-full border-l-4 border-l-purple-600 p-2">
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
