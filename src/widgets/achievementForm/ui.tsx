import { useForm, SubmitHandler } from "react-hook-form";
import { years } from "./config/years";
import { useEffect, useState } from "react";
import { useGetCategories } from "./api/categories";
import { useUploadPortfolio } from "./api/postPortfolio";
import { useQueryClient } from "@tanstack/react-query";
import { decodeJwt } from "../../shared/helpers/decodeJwt";

export type Inputs = {
  name: string;
  year: number;
  categoryId: number;
  photo: FileList | Blob;
};

export const AchievementForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const [fileName, setFileName] = useState("");
  const { data: categories } = useGetCategories();
  const queryClient = useQueryClient();
  const { mutate: postPortfolio } = useUploadPortfolio(queryClient);

  useEffect(() => {
    const inputFileText = document.querySelector(
      "input[type=file]"
    ) as HTMLInputElement;
    inputFileText.addEventListener("change", (e: Event) => {
      if (inputFileText.files && inputFileText.files[0])
        setFileName(inputFileText.files[0].name);
    });
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.photo instanceof FileList) {
      data.photo = new Blob([data.photo[0]], { type: "image/png" });
      const userId = decodeJwt().id;
      postPortfolio({ userId, ...data });
    }

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-11 flex flex-col gap-6 text-xl w-[600px]"
    >
      <label className="">
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
              <option value={+year}>{year}</option>
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
            {categories &&
              categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
      </label>
      <label className="input-file w-[400px]" htmlFor="file">
        Загрузить фотографию:
        <br />
        <div className="mt-2 flex">
          <span className="input-file-text flex-1 ">
            <div className="w-[95%] text-nowrap overflow-hidden">
              {fileName}
            </div>
          </span>
          <input type="file" className="" id="file" {...register("photo")} />
          <span className="input-file-btn">Выберите файл</span>
        </div>
      </label>
      <button type="submit">submit</button>
    </form>
  );
};
