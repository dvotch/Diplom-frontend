import { useCallback, useState } from "react";
import { Button, Hr } from "../../../shared/components";
import { useGetAchievements } from "./api/useGetAchievements";
import { useDeleteAchievement } from "./api/useDeleteAchievement";
import { useQueryClient } from "@tanstack/react-query";
import { Pagination } from "./components/paginationButton";

export const AchievementList = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetAchievements(page);

  const handleClickDeleteAchievement = (
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    if (event.target instanceof HTMLButtonElement)
      deleteAchievement(event.target.value);
  };

  const quertClient = useQueryClient();
  const { mutate: deleteAchievement } = useDeleteAchievement(quertClient);

  const ROWS_PER_PAGE = 2;

  const getTotalPageCount = (rowCount: number): number =>
    Math.ceil(rowCount / ROWS_PER_PAGE);

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = data ? getTotalPageCount(data[0]?.lastPage) : current;
    console.log(next, total);
    setPage(next < total ? next : current);
  }, [page, data]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev >= 0 ? prev : current);
  }, [page]);

  return (
    <>
      <h2 className="text-3xl mt-8 dark:text-white">Загруженные достижения</h2>
      {isLoading ? (
        <div className="h-80">Loading...</div>
      ) : (
        data &&
        data.map((achievement) => (
          <div key={achievement.id}>
            <Hr />
            <div className="grid h-40 w-10/12 grid-cols-achievementList items-center text-xl mt-4">
              <img
                src={achievement.photo}
                alt="фотография достижения"
                width={110}
                className="text-white"
              />
              <div>
                <h4 className="font-bold dark:text-white">
                  {achievement.name}
                </h4>
                <span className="text-gray-400 dark:text-sub-100">
                  {achievement.year}
                </span>
              </div>
              <p className="text-gray-400 dark:text-sub-100">
                {achievement.categoryId}
              </p>
              <div className="flex gap-6">
                <Button variant="outlined">Скачать</Button>
                <Button
                  variant="outlined"
                  value={achievement.id}
                  onClick={handleClickDeleteAchievement}
                >
                  Удалить
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="flex gap-6 achievement-list">
        {data && data?.length > 0 && (
          <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: page === 0,
              right: page === getTotalPageCount(data[0].lastPage),
            }}
            nav={{ current: page, total: getTotalPageCount(data[0].lastPage) }}
          />
        )}
      </div>
    </>
  );
};
