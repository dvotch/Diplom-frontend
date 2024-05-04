import axios from "axios";
import { STUDENT_ORGANIZATION_URL, TOKEN } from "../../../shared/const";
import { useMutation } from "@tanstack/react-query";

export const deleteUserOrganization = (id: string) => {
  return axios.delete(STUDENT_ORGANIZATION_URL + "/" + id, {
    headers: { Authorization: TOKEN() },
  });
};

export const useLeaveFromOrganization = () =>
  useMutation({
    mutationFn: (id: string) => deleteUserOrganization(id),
  });
