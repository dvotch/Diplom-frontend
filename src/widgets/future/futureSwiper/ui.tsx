import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Button } from "../../../shared/components";
import { IWork } from "../interfaces";
import { CSSProperties, useContext } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { RoleContext } from "../../../app/context";

export const FutureSwiper = ({ data }: { data: IWork[] }) => {
  const { theme } = useContext(RoleContext);
  const paginationColor = theme ? "rgb(225 29 72 )" : "rgb(147 51 234 )";

  const handleClickShowPhone = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.children[0].classList.toggle("hidden");
    event.currentTarget.children[1].classList.toggle("hidden");
  };

  return (
    <div className="w-[1224px] mt-8">
      <Swiper
        style={
          {
            "--swiper-pagination-color": paginationColor,
            "--swiper-pagination-bullet-inactive-color": paginationColor,
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
              <div className="flex justify-between flex-col h-3/4 border-l-4 border-l-purple-600 p-2 dark:border-rose-600">
                <div className="text-2xl dark:text-white">
                  <h2>{elem.name}</h2>
                  <h2>{"от " + elem.cost + "₽"}</h2>
                  <p className="text-gray-400 dark:text-sub-100">
                    {elem.place}
                  </p>
                </div>
                <div className="flex justify-between text-base">
                  <Button variant="contained">
                    <a href={elem.url} target="_blank">
                      Откликнуться
                    </a>
                  </Button>

                  <Button
                    variant="outlined"
                    onClick={handleClickShowPhone}
                    className="w-72"
                  >
                    <p>Показать контакты</p>
                    <p className="hidden">{elem.phone}</p>
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
