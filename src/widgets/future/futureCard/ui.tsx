import { Button } from "../../../shared/components";
import { ILearn } from "../interfaces";

export const FutureCard = ({ data }: { data: ILearn[] }) => {
  return (
    <div className="mt-12 flex flex-col gap-6 w-5/6 ">
      {data.map((elem) => {
        return (
          <div
            key={elem.id}
            className="bg-white flex rounded-xl text-xl gap-4 p-4 border-[1px] shadow-lg dark:bg-slate-900 dark:border-rose-600"
          >
            <div className="relative w-1/5">
              <img src={elem.photo} />
              <p className="absolute text-white bottom-3 left-3">
                {"от " + elem.cost + " ₽/ год"}
              </p>
            </div>

            <div className="flex flex-col gap-2 dark:text-white w-4/5">
              <h2>{elem.place}</h2>
              <p className="font-medium w-5/6">{elem.name}</p>
              <p>{elem.description}</p>
              <Button variant="contained" className="w-fit">
                <a href={elem.url} target="_blank">
                  Откликнуться
                </a>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
