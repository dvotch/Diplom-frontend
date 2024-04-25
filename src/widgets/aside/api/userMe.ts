import axios from "axios";
import { IUserMe } from "../interface";
import { useQuery } from "@tanstack/react-query";

export const fetchUserMe = async () => {
  const TOKEN = localStorage.getItem("token");
  return await axios.post<IUserMe[]>("http://prod.dvotch.ru:3001/api/user/me", {
    headers: {
      Authorization: TOKEN,
    },
  });
};

export const useUserMe = () => {
  return useQuery({
    queryKey: ["infoMe"],
    queryFn: () => fetchUserMe(),
    select: ({ data }) => data,
  });
};
