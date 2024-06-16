import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { Button } from "../../shared/components";
import { useEffect, useState } from "react";
import { useGetSpecializations } from "./api/useGetSpecializations";
import { usePostFuture } from "./api/usePostFuture";

export type Inputs = {
  name: string;
  description: string | null;
  cost: number;
  phone: string | null;
  place: string;
  specializationId: string;
  url: string;
  work: boolean;
  photo: FileList | Blob | null;
};

export const AddFutureForm = () => {
  const { register, handleSubmit, control, reset } = useForm<Inputs>({
    defaultValues: { description: null, phone: null, photo: null },
  });
  const { data: specializations } = useGetSpecializations();
  const { mutate: postFuture } = usePostFuture();
  const [fileName, setFileName] = useState("");

  const checked = useWatch({
    control,
    name: "work",
    defaultValue: false,
  });

  useEffect(() => {
    const inputFileText = document.querySelector("#filefuture");
    if (inputFileText instanceof HTMLInputElement)
      inputFileText.addEventListener("change", () => {
        if (inputFileText.files && inputFileText.files[0])
          setFileName(inputFileText.files[0].name);
      });
  }, [checked]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.cost = +data.cost;
    const inputFile = document.querySelector("#filefuture");
    if (inputFile instanceof HTMLInputElement) {
      const file = inputFile.files || "";
      data.photo = new Blob([file[0]], { type: "image/png" });
    }
    postFuture(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[520px] mt-8 flex flex-col gap-3"
    >
      <h2 className="text-purple-600 text-3xl font-bold place-self-center">
        Зарегистрировать будущее
      </h2>

      <label>
        Рабочее место:
        <input type="checkbox" {...register("work")} className="ml-2" />
      </label>

      <label>
        Введите название:
        <input
          {...register("name")}
          className="w-full border-2 border-gray-200 p-2 mt-2"
          required
          placeholder="Введите название организации"
        />
      </label>

      <label>
        {checked ? "Оплата за работу" : "Стоимость обучения"}:
        <input
          placeholder={checked ? "Оплата" : "Cтоимость"}
          {...register("cost")}
          required
          type="number"
          className="w-full border-2 border-gray-200 p-2 mt-2"
        />
      </label>

      <label>
        Адрес сайта:
        <input
          placeholder="Адрес сайта"
          {...register("url")}
          required
          className="w-full border-2 border-gray-200 p-2 mt-2"
        />
      </label>

      <label>
        Примерное месторасположение:
        <input
          placeholder="Где находится организация"
          {...register("place")}
          required
          className="w-full border-2 border-gray-200 p-2 mt-2"
        />
      </label>

      <label>
        Специальность:
        <div className="select mt-2 w-full">
          <select
            {...register("specializationId")}
            className="indent-4"
            required
            defaultValue=""
          >
            <option value="" hidden>
              Выберите из списка
            </option>
            {specializations &&
              specializations.map((spec) => (
                <option value={spec.id} key={spec.id}>
                  {spec.name}
                </option>
              ))}
          </select>
        </div>
      </label>

      {!checked && (
        <label>
          Описание учебного заведения:
          <div className="mt-2">
            <textarea
              placeholder="Расскажите об учебном заведении ..."
              {...register("description", { value: null })}
              required
              className="w-full border-2 border-gray-200 h-32 resize-none p-2"
            />
          </div>
        </label>
      )}

      {checked && (
        <label>
          Номер телефона:
          <input
            placeholder="Номер телефона"
            {...register("phone")}
            required
            className="w-full border-2 border-gray-200 p-2 mt-2"
          />
        </label>
      )}

      {!checked && (
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
                id="filefuture"
                {...register("photo")}
              />
              <span className="input-file-btn">Выберите файл</span>
            </div>
          </label>
        </section>
      )}

      <menu className="flex mt-4">
        <Button variant="contained" className="px-4" type="submit">
          Отправить
        </Button>
      </menu>
    </form>
  );
};
