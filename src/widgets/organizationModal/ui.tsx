import { SubmitHandler, useForm } from "react-hook-form";
import { useGetOrganizations } from "./api/useGetOrganizations";
import { Button } from "../../shared/components";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import ReactPortal from "../../shared/components/portals/portal";
import { usePostApplication } from "./api/usePostApplication";
import { QueryClient } from "@tanstack/react-query";

export type Inputs = {
  organizationId: string;
  whyYouText: string;
};

interface props {
  open: boolean;
  onClose: React.MouseEventHandler;
}

export const OrganizationModal = ({ open, onClose }: props) => {
  const client = new QueryClient();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { data: organizations } = useGetOrganizations();
  const { mutate: postApplication } = usePostApplication(client);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    postApplication(data);
    document
      .querySelector("#react-portal-modal-organization")
      ?.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    reset();
  };

  if (!open) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-organization">
      <div className="w-screen h-screen absolute bg-slate-200/70 top-0 left-0 grid place-items-center ">
        <div className="p-4 w-[480px] h-[520px] bg-white dark:bg-slate-800 rounded-lg">
          <form
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 flex flex-col w-full gap-3 font-medium"
          >
            <button
              onClick={onClose}
              className="text-purple-600 place-self-end dark:text-white"
            >
              <DisabledByDefaultIcon sx={{ fontSize: 40 }} />
            </button>

            <h2 className="text-purple-600 text-3xl font-bold place-self-center dark:text-white">
              Подача заявки
            </h2>
            <section className="mt-4 w-4/5 dark:text-white">
              <label>
                Выберите организацию:
                <div className="select mt-2 w-full dark:before:border-rose-600 dark:after:border-rose-600 dark:border-rose-600 ">
                  <select
                    {...register("organizationId")}
                    className="indent-4"
                    required
                    defaultValue=""
                  >
                    <option value="" hidden>
                      Выберите из списка
                    </option>
                    {organizations &&
                      organizations.map((elem) => (
                        <option value={elem.id}>{elem.name}</option>
                      ))}
                  </select>
                </div>
              </label>
            </section>
            <section className="w-4/5 dark:text-white ">
              <label>
                Почему именно вы должны стать участником:
                <div className="mt-2">
                  <textarea
                    placeholder="Напишите почему ..."
                    {...register("whyYouText")}
                    required
                    className="w-full border-2 border-gray-200 h-32 resize-none p-2 dark:border-rose-600"
                  />
                </div>
              </label>
            </section>
            <menu className="flex justify-center">
              <Button variant="contained" className="px-4" type="submit">
                Отправить
              </Button>
            </menu>
          </form>
        </div>
      </div>
    </ReactPortal>
  );
};
