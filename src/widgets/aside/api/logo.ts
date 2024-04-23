import axios from "axios";

import { useQuery } from "@tanstack/react-query";

export const getLogo = async () => {
  const TokenUser = localStorage.getItem("token");
  return await axios.get<string>("http://prod.dvotch.ru:3001/api/user/logo", {
    headers: {
      Authorization: TokenUser,
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
