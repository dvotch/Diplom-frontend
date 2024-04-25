import axios from "axios";
import { ICredit } from "../interfaces";
import { useQuery } from "@tanstack/react-query";

export const fetchTeacherCredit = async () => {
  const TOKEN = localStorage.getItem("token");
  return await axios.get<ICredit[]>(
    "http://prod.dvotch.ru:3001/api/credit/teacher",
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );
};

export const useCredit = () => {
  return useQuery({
    queryKey: ["credit teacher"],
    queryFn: () => fetchTeacherCredit(),
    select: ({ data }) => data,
  });
};
