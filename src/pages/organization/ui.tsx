import { useState } from "react";
import { Button, Hr } from "../../shared/components";
import { OrganizationCard } from "../../widgets/organizationCard/ui";
import { OrganizationModal } from "../../widgets/organizationModal/ui";
import { useGetMyOrganizations } from "./api/useGetMyOrganizations";

export const OrganizationPage = () => {
  const { data, isLoading } = useGetMyOrganizations();
  const [openModal, setOpenModal] = useState(false);

  const modalElement = document.getElementById("modal") as HTMLDialogElement;

  const onAnimationEnd = () => {
    modalElement.classList.remove("hide");

    modalElement.close();

    modalElement.removeEventListener("animationend", onAnimationEnd);
  };

  const handleClickOpenModal = () => {
    setOpenModal(true);
    document.body.classList.add("overflow-hidden");
    document
      .querySelector("#react-portal-modal-organization")
      ?.classList.remove("hidden");
  };

  const handleClickCloseModal = () => {
    setOpenModal(!openModal);
    document
      .querySelector("#react-portal-modal-organization")
      ?.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");

    modalElement.addEventListener("animationend", onAnimationEnd);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between ">
        <h1 className=" text-5xl">Мое портфолио</h1>
        <Button variant="contained" onClick={handleClickOpenModal}>
          Оставить заявку
        </Button>
      </div>
      <Hr />
      <main>
        {isLoading ? (
          <div>Загрузка</div>
        ) : (
          data &&
          data.map((elem) => (
            <OrganizationCard
              key={elem.id}
              description={elem.description}
              name={elem.name}
              photo={elem.photo}
              id={elem.id}
            />
          ))
        )}
      </main>
      <OrganizationModal open={openModal} onClose={handleClickCloseModal} />
    </div>
  );
};
