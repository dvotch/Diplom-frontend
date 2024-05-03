import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IMark } from "../interfaces";
import { TOKEN } from "../../../../shared/const";

export const fetchUsersMarksByLesson = async (
  userId: string,
  lessonId: string
) => {
  return await axios.get<IMark[]>(
    "http://prod.dvotch.ru:3001/api/mark/" + lessonId + "/" + userId,
    {
      headers: {
        Authorization: TOKEN(),
      },
    }
  );
};

export const useUsersMarks = (userId: string, lessonId: string) => {
  return useQuery({
    queryKey: ["marks student", userId, lessonId],
    queryFn: () => fetchUsersMarksByLesson(userId, lessonId),
    select: ({ data }) => data,
    enabled: !!lessonId,
  });
};
