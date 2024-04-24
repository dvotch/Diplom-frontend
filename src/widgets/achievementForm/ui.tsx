import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { years } from "./config/years";

type Inputs = {
  name: string;
  year: number;
  categoryId: number;
  photo: File;
};

export const AchievementForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-11 flex flex-col gap-6 text-xl"
    >
      <label className="w-[600px]">
        Название файла:
        <br />
        <input
          type="text"
          placeholder="Название"
          {...register("name")}
          className="border-gray-200 border-2 rounded-lg px-4 py-2 mt-2 w-[600px]"
        />
      </label>
      <label>
        Год:
        <div className="select mt-2 ">
          <select {...register("year")} className="indent-4" required>
            <option selected disabled value="" hidden>
              Выберите из списка
            </option>
            {years.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>
        </div>
      </label>
      <label>
        Категория:
        <div className="select mt-2">
          <select {...register("categoryId")} className="indent-4" required>
            <option selected disabled value="" hidden>
              Выберите из списка
            </option>
            <option>Выберите из списка</option>
            <option>Выберите из списка</option>
          </select>
        </div>
      </label>
      <label className="input-file">
        Загрузить фотографию
        <br />
        <span className="input-file-text"></span>
        <input type="file" {...register("photo")} />
        <span className="input-file-btn">Выберите файл</span>
      </label>
    </form>
  );
};
