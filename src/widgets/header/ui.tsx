import Logo from "../../shared/assets/zmk.png";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import RoomIcon from "@mui/icons-material/Room";
import { Link } from "react-router-dom";
import { Button } from "../../shared/components";

export const Header = () => {
  return (
    <header className="px-6 pt-8 pb-2 border-b-2 border-gray-200 col-span-2">
      <div className="flex justify-between">
        <div className="flex ">
          <Link to="/">
            <img src={Logo} width={50} />
          </Link>
          <p className="fonst-sans text-base text-sub-100 ml-2">
            ЗМК <br /> Зеленодольский механический колледж
          </p>
        </div>
        <div className="flex">
          <Brightness3Icon sx={{ fontSize: 40 }} />
          <RoomIcon sx={{ fontSize: 40 }} className="ml-4" />
          <div className="fonst-sans text-sub-100 flex justify-center items-center">
            <span className="">Зеленодольск</span>
          </div>
          <Button>Выйти</Button>
        </div>
      </div>
      <nav className="mt-4 ml-8">
        <Link
          to="/profile"
          className="fonst-sans text-base text-text-100 align-middle border-b-4 border-violet-900 pb-2"
        >
          Мой профиль
        </Link>
        <Link
          to="/settings"
          className="fonst-sans text-base text-text-100 align-middle ml-2"
        >
          Настройки
        </Link>
      </nav>
    </header>
  );
};
