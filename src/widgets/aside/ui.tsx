import { Link } from "react-router-dom";
import { useGetLogo } from "./api/logo";
import { useUserMe } from "./api";
import { useState } from "react";

export const Aside = () => {
  const { data, isLoading, isRefetching } = useGetLogo();
  const { data: infoMe } = useUserMe();

  return (
    <div className="">
      <aside className=" py-8 border-[1px] border-purple-900 dark:border-rose-600 text-sub-100 text-lg grid place-items-center mb-4 ml-8 row-start-2 dark:bg-slate-900">
        {isLoading || isRefetching ? (
          <div>Loading image...</div>
        ) : (
          <img src={data} id="img" className="mix-blend-multiply" width={150} />
        )}
        <h2 className="text-sub-100 text-2xl dark:text-white">Титов Игорь</h2>(
        <span className="px-12 py-1 bg-purple-600  text-white font-bold rounded-xl mt-5 dark:text-white dark:bg-rose-600">
          Cтудент
        </span>
        )<p className="mt-5 dark:text-white">Зеленодольск, Татарстан</p>
        {infoMe &&
          infoMe.map((infoMe) => (
            <p className="w-64 text-center mt-2 dark:text-white">
              {infoMe.specialization}
            </p>
          ))}
        <p className="mt-2 dark:text-white">4 курс 205 группа</p>
        <ul className="mt-6 w-60">
          <li>
            <Link
              to="/statement"
              className="border-[1px] border-purple-900 dark:border-rose-600 py-2 text-black grow grid place-items-center rounded-lg mt-4 dark:text-white dark:active:text-opacity-35 "
            >
              Журнал
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="dark:active:text-opacity-35 border-[1px] dark:border-rose-600 border-purple-900 py-2 text-center text-sub-100 grid place-items-center rounded-lg mt-4"
            >
              Мое портфолио
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="dark:active:text-opacity-35 border-[1px] dark:border-rose-600 border-purple-900 py-2 text-sub-100 grid place-items-center rounded-lg mt-4"
            >
              Членство
            </Link>
          </li>
          <li>
            <Link
              to="/credit"
              className="dark:active:text-opacity-35 border-[1px] dark:border-rose-600 border-purple-900 py-2 text-sub-100 grid place-items-center rounded-lg mt-4"
            >
              Задолженности
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="dark:active:text-opacity-35 border-[1px] dark:border-rose-600 border-purple-900 py-2 text-sub-100 grid place-items-center rounded-lg mt-4"
            >
              Возможности
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};
