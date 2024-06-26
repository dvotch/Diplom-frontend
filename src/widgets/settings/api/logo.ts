import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TOKEN } from "../../../shared/const";

export const uploadLogo = (file: Blob) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post("http://prod.dvotch.ru:3001/api/user/logo", formData, {
    headers: {
      "Content-Type": `multipart/form-data`,
      Authorization: TOKEN(),
    },
  });
};

export const useUploadLogo = (client: QueryClient) =>
  useMutation({
    mutationFn: (file: Blob) => {
      return uploadLogo(file);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["logo"] });
    },
    onSettled: () => {
      client.invalidateQueries({ queryKey: ["logo"] });
    },
  });
