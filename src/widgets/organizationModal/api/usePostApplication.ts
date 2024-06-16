import axios from "axios";
import { STUDENT_ORGANIZATION_URL, TOKEN } from "../../../shared/const";
import { QueryClient, useMutation } from "@tanstack/react-query";

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

export const usePostApplication = (client: QueryClient) =>
  useMutation({
    mutationFn: (data: IApplication) => PostApplicationToOrganization(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all organizations"] });
      client.invalidateQueries({ queryKey: ["organizations"] });
    },
    onSettled: () => {
      client.invalidateQueries({ queryKey: ["all organizations"] });
      client.invalidateQueries({ queryKey: ["organizations"] });
    },
    onMutate: () => {
      client.invalidateQueries({ queryKey: ["all organizations"] });
      client.invalidateQueries({ queryKey: ["organizations"] });
    },
    onError: () => {
      client.invalidateQueries({ queryKey: ["all organizations"] });
      client.invalidateQueries({ queryKey: ["organizations"] });
    },
  });
