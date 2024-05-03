import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getAverageMark = async (lesson: string, userId: string) => {
  const TOKEN = localStorage.getItem("token");

  return await axios.get(
    "http://prod.dvotch.ru:3001/api/mark/averageMarks/" + lesson + "/" + userId,
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );
};
export const useAverageMarks = (lesson: string, userId: string) => {
  return useQuery({
    queryKey: ["averageMark student", lesson, userId],
    queryFn: () => getAverageMark(lesson, userId),
    select: ({ data }) => data,
  });
};
