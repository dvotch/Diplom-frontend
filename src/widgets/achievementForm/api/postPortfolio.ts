import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { PORTFOLIO_URL, TOKEN } from "../../../shared/const";
import { Inputs } from "../ui";

type dto = {
  userId: string;
} & Inputs;

export const postPortfolio = (dto: dto) => {
  return axios.post(PORTFOLIO_URL, dto, {
    headers: {
      "Content-Type": `multipart/form-data`,
      Authorization: TOKEN(),
    },
  });
};

export const useUploadPortfolio = (client: QueryClient) =>
  useMutation({
    mutationFn: (dto: dto) => {
      return postPortfolio(dto);
    },
    // onSuccess: () => {
    //   client.invalidateQueries({ queryKey: ["categories"] });
    // },
    // onSettled: () => {
    //   client.invalidateQueries({ queryKey: ["categories"] });
    // },
  });
