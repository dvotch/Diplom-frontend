import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CATEGORIES_URL, TOKEN } from "../../../../shared/const";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    select: ({ data }) => {
      return data;
    },
  });
};

export const fetchCategories = async () => {
  return await axios.get<Categories[]>(CATEGORIES_URL, {
    headers: {
      Authorization: TOKEN(),
    },
  });
};

interface Categories {
  id: string;
  name: string;
}
