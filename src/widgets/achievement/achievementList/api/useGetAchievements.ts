import axios from "axios";
import {
  CATEGORIES_URL,
  STUDENT_PORTFOLIO_URL,
  TOKEN,
} from "../../../../shared/const";
import { useQuery } from "@tanstack/react-query";

export const fetchMyAchievements = async (page: string) => {
  const data = await axios.get<AchievementResponse>(
    STUDENT_PORTFOLIO_URL + "?page=" + page,
    {
      headers: {
        Authorization: TOKEN(),
      },
    }
  );
  return data.data;
};

export const fetchMCategories = async () => {
  return await axios.get<Categories[]>(CATEGORIES_URL, {
    headers: {
      Authorization: TOKEN(),
    },
  });
};

export const useGetAchievements = (page: string) => {
  return useQuery({
    queryKey: ["portfolio list", page],
    queryFn: async () => {
      const achievements = await fetchMyAchievements(page);
      console.log(achievements);
      const categories = (await fetchMCategories()).data;

      return achievements.data.map((elem) => {
        return {
          ...elem,
          categoryId: categories.find(
            (category) => category.id === elem.categoryId
          )?.name,
          lastPage: achievements.meta.totalPage,
        };
      });
    },
  });
};

interface AchievementResponse {
  data: Achievement[];
  meta: {
    totalPage: number;
  };
}

interface Achievement {
  id: string;
  categoryId: string;
  year: number;
  name: string;
  photo: string;
}

interface Categories {
  id: string;
  name: string;
}
