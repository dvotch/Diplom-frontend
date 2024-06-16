import { QueryClient } from "@tanstack/react-query";
import { Button, Hr } from "../../shared/components";
import { useLeaveFromOrganization } from "../organizationModal/api/useLeaveFromOrganization";
import { memo } from "react";

interface props {
  name: string;
  description: string;
  photo: string;
  id: string;
}

export const OrganizationCard = memo(
  ({ name, description, photo, id }: props) => {
    const queryClient = new QueryClient();
    const { mutate: leaveFromOrganization } =
      useLeaveFromOrganization(queryClient);

    const handleClickLeave = () => {
      leaveFromOrganization(id);
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
    };

    return (
      <>
        <div className="grid grid-rows-organizationCard grid-cols-organizationCard h-60 gap-x-4 mt-4 gap-4">
          <img
            src={photo}
            alt="Лого организации"
            className="row-span-3 self-center dark:text-white"
          />
          <h2 className="col-span-3 text-2xl dark:text-white">{name}</h2>
          <p className="col-span-3 text-xl text-gray-400 overflow-auto">
            {description}
          </p>
          <Button variant="outlined" onClick={handleClickLeave}>
            Выйти
          </Button>
        </div>
        <Hr />
      </>
    );
  }
);
