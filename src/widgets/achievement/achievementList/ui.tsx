import { useEffect, useState } from "react";
import { Button, Hr } from "../../../shared/components";
import { useGetAchievements } from "./api/useGetAchievements";

export const AchievementList = () => {
  const [page, setPage] = useState("0");
  const { data, isLoading } = useGetAchievements(page);
  console.log(data);

  const handleClickChangeCurrentPage = (
    event: React.SyntheticEvent<HTMLDivElement>
  ) => {
    if (event.target instanceof HTMLButtonElement) {
      setPage(event.target.value);
    }
  };
  useEffect(() => {
    document.querySelector(".achievement-list")?.scrollIntoView();
  }, [page]);

  return (
    <>
      <h2 className="text-3xl mt-8">Загруженные достижения</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data &&
        data.map((achievement) => (
          <div>
            <Hr />
            <div className="grid h-40 w-10/12 grid-cols-achievementList items-center text-xl mt-4">
              <img
                src={achievement.photo}
                alt="фотография достижения"
                width={110}
              />
              <div>
                <h4 className="font-bold">{achievement.name}</h4>
                <span className="text-gray-400">{achievement.year}</span>
              </div>
              <p className="text-gray-400">{achievement.categoryId}</p>
              <Button className="">Скачать</Button>
            </div>
          </div>
        ))
      )}
      <div
        onClick={handleClickChangeCurrentPage}
        className="flex gap-6 achievement-list"
      >
        {data &&
          new Array(Math.round(data[0].lastPage / 2))
            .fill(" ")
            .map((_, index) => (
              <Button value={index.toString()}>{index + 1}</Button>
            ))}
      </div>
    </>
  );
};
