import axios from "axios";
import { STUDENT_ORGANIZATION_URL, TOKEN } from "../../../shared/const";
import { useMutation } from "@tanstack/react-query";

interface IApplication {
  organizationId: string;
  whyYouText: string;
}
export const PostApplicationToOrganization = (data: IApplication) => {
  return axios.post<IApplication>(
    STUDENT_ORGANIZATION_URL,
    { ...data, status: false },
    {
      headers: {
        Authorization: TOKEN(),
        "Content-Type": `application/json`,
      },
    }
  );
};

export const usePostApplication = () =>
  useMutation({
    mutationFn: (data: IApplication) => PostApplicationToOrganization(data),
  });
