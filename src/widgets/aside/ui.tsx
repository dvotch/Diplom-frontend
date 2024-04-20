import { Link } from "react-router-dom";
import Avatart from "../../shared/assets/аватар.jpeg";

export const Aside = () => {
  return (
    <aside className=" py-8 border-[1px] border-purple-900 text-sub-100 text-lg grid place-items-center mb-4 ml-8 row-start-2">
      <img src={Avatart} className="mix-blend-multiply" />
      <h2 className="text-sub-100 text-2xl">Титов Игорь</h2>
      <span className="px-12 py-1 bg-purple-600  text-white font-bold rounded-xl mt-5">
        Студент
      </span>
      <p className="mt-5">Зеленодольск, Татарстан</p>
      <p className="w-64 text-center mt-2">
        09.02.07 "Программирование в компьютерных сетях"
      </p>
      <p className="mt-2">4 курс 205 группа</p>
      <ul className="mt-6 w-60">
        <li>
          <Link
            to="/statement"
            className="border-[1px] border-purple-900 py-2 text-black grow grid place-items-center rounded-lg mt-4"
          >
            Журнал
          </Link>
        </li>
        <li>
          <Link
            to="/#"
            className="border-[1px] border-purple-900 py-2 text-center text-sub-100 grid place-items-center rounded-lg mt-4"
          >
            Мое портфолио
          </Link>
        </li>
        <li>
          <Link
            to="/#"
            className="border-[1px] border-purple-900 py-2 text-sub-100 grid place-items-center rounded-lg mt-4"
          >
            Членство
          </Link>
        </li>
        <li>
          <Link
            to="/#"
            className="border-[1px] border-purple-900 py-2 text-sub-100 grid place-items-center rounded-lg mt-4"
          >
            Задолженности
          </Link>
        </li>
        <li>
          <Link
            to="/#"
            className="border-[1px] border-purple-900 py-2 text-sub-100 grid place-items-center rounded-lg mt-4"
          >
            Возможности
          </Link>
        </li>
      </ul>
    </aside>
  );
};
