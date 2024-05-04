import axios from "axios";
import { ORGANIZATION_URL } from "../../../shared/const";
import { useMutation } from "@tanstack/react-query";

export const postOrganization = (data: IPostOrganization) => {
  const form = new FormData();
  form.append("logo", data.logo as Blob);
  form.append("name", data.name);
  form.append("description", data.description);
  return axios.post<IPostOrganization>(ORGANIZATION_URL, form, {
    headers: {
      "Content-Type": `multipart/form-data`,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVmNWE1OWQ3LTdlNjYtNDdkZi04MzcxLWUwMmNmNDA4OGM0YSIsImVtYWlsIjoiYWRtMiIsInJvbGVzIjpbIlJFU09VUkNFU19ERVBBUlRNRU5UIl0sInNwZWNpYWxpemF0aW9uIjoiMDkuMDIuMDcg0J_RgNC-0LPRgNCw0LzQvNC40YDQstC-0LDQvdC40LUg0LIg0LrQvtC80L_RjNGO0YLQtdGA0L3Ri9GFINGB0LjRgdGC0LXQvNCw0YUuIiwiZ3JvdXAiOjIwNSwibmFtZSI6ItCQ0JTQnNCY0J0iLCJzdXJuYW1lIjoi0J3QlSDQo9CU0JDQm9Cv0KLQrCIsImlhdCI6MTcxNDgyNjUwOCwiZXhwIjoxNzE1NDMxMzA4fQ.gH4C31QtEeEX-v7ostYOpd5YZWp3QbX_lx_5Ak0o_EY",
    },
  });
};

export const usePostOrganization = () =>
  useMutation({
    mutationFn: (data: IPostOrganization) => postOrganization(data),
  });
