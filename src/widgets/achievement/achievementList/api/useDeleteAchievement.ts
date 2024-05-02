import axios from "axios";
import { PORTFOLIO_URL, TOKEN } from "../../../../shared/const";
import { QueryClient, useMutation } from "@tanstack/react-query";

export const deleteUserAchievement = (id: string) => {
  return axios.delete(PORTFOLIO_URL + "/" + id, {
    headers: {
      Authorization: TOKEN(),
    },
  });
};

export const useDeleteAchievement = (queryClient: QueryClient) =>
  useMutation({
    mutationFn: (id: string) => deleteUserAchievement(id),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["portfolio list"] }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["portfolio list"] }),
  });
