import { useQueryClient } from "@tanstack/react-query";
import { useUploadLogo } from "./api/logo";
import { Button } from "../../shared/components";

export const Settings = () => {
  const queryClient = useQueryClient();
  const { mutate: uploadLogo } = useUploadLogo(queryClient);

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
      <Button onClick={handleClick} className="mt-4">
        Добавить
      </Button>
    </div>
  );
};
