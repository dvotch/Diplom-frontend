import Logo from "../../shared/assets/zmk.png";

import Brightness3Icon from "@mui/icons-material/Brightness3";
import RoomIcon from "@mui/icons-material/Room";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../shared/components";
import { QueryCache } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const cache = new QueryCache();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
    cache.clear();
  };
  const handleRedirect = () => {
    window.open(
      "https://yandex.ru/maps/org/zelenodolskiy_mekhanicheskiy_kolledzh/1168389123/?ll=48.488733%2C55.851040&z=16.49",
      "_blank"
    );
  };
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="  border-b-2 border-gray-200 col-span-2">
      <header className="px-6 pt-8 pb-2 border-b-2 border-gray-200  col-span-2 dark:bg-slate-900">
        <div className="flex justify-between ">
          <div className="flex ">
            <Link to="/">
              <img
                className="dark:mix-blend-screen hover:opacity-50 "
                src={Logo}
                width={50}
              />
            </Link>
            <p className="fonst-sans text-base text-sub-100 ml-2">
              ЗМК <br /> Зеленодольский механический колледж
            </p>
          </div>
          <div className="flex">
            {theme === "light" ? (
              <button className="w-10 h-10 mt-2 " onClick={handleThemeSwitch}>
                <Brightness3Icon
                  sx={{ fontSize: 40 }}
                  className="visible hover:opacity-50 "
                />
              </button>
            ) : (
              <button className="w-10 h-10 mt-2 " onClick={handleThemeSwitch}>
                <svg
                  className="w-8 h-8 text-orange-600  hover:opacity-50  dark:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </button>
            )}

            <div className="fonst-sans text-sub-100 flex justify-center items-center">
              <RoomIcon sx={{ fontSize: 40 }} className="ml-4" />
              <span onClick={handleRedirect} className="">
                <button className="mr-4 dark:text-white hover:opacity-50 ">
                  Зеленодольск
                </button>
              </span>
            </div>
            <Button className="hover:opacity-50  " onClick={handleLogout}>
              Выйти
            </Button>
          </div>
        </div>
        <nav className="mt-4 ml-8">
          <Link
            to="/"
            className="fonst-sans text-base text-text-100 align-middle hover:opacity-50   pb-2 dark:text-white "
          >
            Мой профиль
          </Link>
          <Link
            to="/settings"
            className="fonst-sans text-base text-text-100 align-middle ml-4 hover:opacity-50  pb-2 dark:text-white "
          >
            Настройки
          </Link>
        </nav>
      </header>
    </div>
  );
};
