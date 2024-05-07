import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IUserGroup } from "../interfaces";

export const fetchUserGroup1 = async () => {
  const TOKEN = localStorage.getItem("token");
  return await axios.get<IUserGroup[]>("http://prod.dvotch.ru:3001/api/user", {
    headers: {
      Authorization: TOKEN,
    },
  });
};

export const useUserGroup1 = () => {
  return useQuery({
    queryKey: ["users group"],
    queryFn: () => fetchUserGroup1(),
    select: ({ data }) => data,
  });
};
