import { useQueryClient } from "@tanstack/react-query";
import { Quarter } from "./config/quarters";

export const Statement = () => {
  const queryClient = useQueryClient();
  return (
    <div className=" grid grid-cols-statement grid-rows-statement pr-5">
      <h1 className=" text-5xl">Журнал</h1>
      <div className="flex ml-20 pt-2">
        <button className="active grow">1 семестр</button>
        <button className="grow">2 семестр</button>
        <button className="grow">3 семестр</button>
        <button className="grow">4 семестр</button>
        <button className="grow">5 семестр</button>
        <button className="grow">6 семестр</button>
        <button className="grow">7 семестр</button>
        <button className="grow">8 семестр</button>
      </div>
      <div className="row-start-3 flex flex-col gap-y-8 mt-8">
        <button className="text-left">Русский язык</button>
        <button className="text-left">Математика</button>
        <button className="text-left">Физ-ра</button>
        <button className="text-left">ОБЖД</button>
      </div>
      <Quarter odd={false} />
    </div>
  );
};
