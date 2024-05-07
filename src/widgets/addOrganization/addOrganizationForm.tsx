import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../shared/components";
import { useEffect, useState } from "react";
import { usePostOrganization } from "./api/usePostOrganization";

export type Inputs = {
  name: string;
  description: string;
  logo: FileList | Blob;
};

export const AddOrganizationForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { mutate: postOrganization } = usePostOrganization();
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const inputFileText = document.querySelector("#fileorg");
    if (inputFileText instanceof HTMLInputElement)
      inputFileText.addEventListener("change", () => {
        if (inputFileText.files && inputFileText.files[0])
          setFileName(inputFileText.files[0].name);
      });
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const inputFile: HTMLInputElement = document.querySelector("#fileorg")!;
    const file = inputFile.files;
    if (file) {
      data.logo = new Blob([file[0]], { type: "image/png" });
      postOrganization(data);
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[520px] mt-8 flex flex-col gap-3"
    >
      <h2 className="text-purple-600 text-3xl font-bold place-self-center">
        Зарегистрировать организацию
      </h2>
      <section className="mt-4 w-4/5">
        <label>
          Введите название:
          <div className=" mt-2 w-full ">
            <input
              {...register("name")}
              className="w-full border-2 p-1"
              required
              placeholder="введите название организации"
            />
          </div>
        </label>
      </section>
      <section className="w-4/5">
        <label>
          Описание организации:
          <div className="mt-2">
            <textarea
              placeholder="Расскажите о себе ..."
              {...register("description")}
              required
              className="w-full border-2 border-gray-200 h-32 resize-none p-2"
            />
          </div>
        </label>
      </section>
      <section>
        <label className="input-file w-[400px]">
          Загрузить фотографию:
          <br />
          <div className="mt-2 flex">
            <span className="input-file-text flex-1 ">
              <div className="w-[95%] text-nowrap overflow-hidden">
                {fileName}
              </div>
            </span>
            <input
              type="file"
              className=""
              id="fileorg"
              {...register("logo")}
            />
            <span className="input-file-btn">Выберите файл</span>
          </div>
        </label>
      </section>

      <menu className="flex mt-4">
        <Button variant="contained" className="px-4" type="submit">
          Отправить
        </Button>
      </menu>
    </form>
  );
};
