import axios from "axios";
import { ORGANIZATION_URL, TOKEN } from "../../../shared/const";
import { useMutation } from "@tanstack/react-query";

export const postOrganization = (data: IPostOrganization) => {
  const form = new FormData();
  form.append("logo", data.logo as Blob);
  form.append("name", data.name);
  form.append("description", data.description);
  return axios.post<IPostOrganization>(ORGANIZATION_URL, form, {
    headers: {
      "Content-Type": `multipart/form-data`,
      Authorization: TOKEN(),
    },
  });
};

export const usePostOrganization = () =>
  useMutation({
    mutationFn: (data: IPostOrganization) => postOrganization(data),
  });
