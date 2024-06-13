import { useQueryClient } from "@tanstack/react-query";
import { useUploadLogo } from "./api/logo";
import { Button } from "../../shared/components";
import { AddOrganizationForm } from "../addOrganization/addOrganizationForm";
import { AddFutureForm } from "../addFuture/ui";
import { decodeJwt } from "../../shared/helpers/decodeJwt";

export const Settings = () => {
  const queryClient = useQueryClient();
  const { mutate: uploadLogo } = useUploadLogo(queryClient);
  const role = decodeJwt().roles;

  const handleClick = async () => {
    const inputFile: HTMLInputElement = document.querySelector("#file")!;
    const file = inputFile.files;
    if (file) {
      const blob = new Blob([file[0]], { type: "image/png" });
      uploadLogo(blob);
    }
  };

  return (
    <div>
      <input type="file" id="file" />
      <br />
      <Button onClick={handleClick} className="mt-4" variant="outlined">
        Добавить
      </Button>
      {role[0] === "RESOURCES_DEPARTMENT" ? (
        <>
          <AddOrganizationForm />
          <AddFutureForm />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
