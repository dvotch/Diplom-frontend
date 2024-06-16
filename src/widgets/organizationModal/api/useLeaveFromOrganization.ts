import axios from "axios";
import { STUDENT_ORGANIZATION_URL, TOKEN } from "../../../shared/const";
import { QueryClient, useMutation } from "@tanstack/react-query";

export const deleteUserOrganization = (id: string) => {
  return axios.delete(STUDENT_ORGANIZATION_URL + "/" + id, {
    headers: { Authorization: TOKEN() },
  });
};

export const useLeaveFromOrganization = (QueryClient: QueryClient) =>
  useMutation({
    mutationFn: (id: string) => deleteUserOrganization(id),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["all organizations"] });
      QueryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
    onSettled: () => {
      QueryClient.invalidateQueries({ queryKey: ["all organizations"] });
      QueryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
    onMutate: () => {
      QueryClient.invalidateQueries({ queryKey: ["all organizations"] });
      QueryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
    onError: () => {
      QueryClient.invalidateQueries({ queryKey: ["all organizations"] });
      QueryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
  });
