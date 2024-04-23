import axios from "axios";
import { STUDENT_TOKEN } from "../../../shared/const";
import { useQuery } from "@tanstack/react-query";

export const getLogo = async () => {
  return await axios.get<string>("http://localhost:3001/api/user/logo", {
    headers: {
      Authorization: STUDENT_TOKEN,
    },
  });
};

export const useGetLogo = () => {
  return useQuery({
    queryKey: ["logo"],
    queryFn: getLogo,
    select: ({ data }) => {
      return data;
    },
  });
};
