import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { TOKEN } from "../../../shared/const";

export const getLogo = async () => {
  return await axios.get<string>("http://prod.dvotch.ru:3001/api/user/logo", {
    headers: {
      Authorization: TOKEN(),
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
