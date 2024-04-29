import { useGetLogo } from "./api/logo";
import { decodeJwt } from "../../shared/helpers/decodeJwt";
import { LinksStudent, LinksTeacher } from "./config/links";
import { BaseLink } from "../../shared/components";
import clsx from "clsx";
import { Role } from "./config/role";

export const Aside = () => {
  const { data, isLoading, isRefetching } = useGetLogo();
  const decode = decodeJwt();
  const linksMenu = decode.roles.includes("STUDENT")
    ? LinksStudent
    : LinksTeacher;
  return (
    <aside className=" py-8 border-[1px] border-purple-900 text-sub-100 text-lg grid place-items-center mb-4 ml-8 row-start-2 dark:border-rose-600">
      {isLoading || isRefetching ? (
        <div>Loading image...</div>
      ) : (
        <img src={data} id="img" className="mix-blend-multiply" width={150} />
      )}
      <h2 className="text-sub-100 text-2xl dark:text-white">
        {decode.name + " " + decode.surname}
      </h2>
      <span className="px-12 py-1 bg-purple-600  text-white font-bold rounded-xl mt-5 dark:bg-purple-900">
        {Role[decode.roles[0]]}
      </span>
      <p className="mt-5">Зеленодольск, Татарстан</p>
      <p className="w-64 text-center mt-2">{decode.specialization}</p>
      <p className="mt-2">{decode.group + " группа"}</p>
      <ul className="mt-6 w-60 ">
        {linksMenu.map((link, index) => (
          <li key={index}>
            <BaseLink
              to={link.path}
              className={clsx(index === 0 ? "text-black" : "")}
            >
              {link.text}
            </BaseLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
