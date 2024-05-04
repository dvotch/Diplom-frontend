import axios from "axios";
import { STUDENT_ORGANIZATION_URL, TOKEN } from "../../../shared/const";
import { QueryClient, useMutation } from "@tanstack/react-query";

export const deleteUserOrganization = (id: string) => {
  return axios.delete(STUDENT_ORGANIZATION_URL + "/" + id, {
    headers: { Authorization: TOKEN() },
  });
};

export const useLeaveFromOrganization = (queryClient: QueryClient) =>
  useMutation({
    mutationFn: (id: string) => deleteUserOrganization(id),
  });
