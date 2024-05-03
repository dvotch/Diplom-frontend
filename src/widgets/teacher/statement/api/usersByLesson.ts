import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IStatement } from "../interfaces";
import { TOKEN } from "../../../../shared/const";

export const fetchUsersByLesson = async (lessonId: string) => {
  return await axios.get<IStatement[]>(
    "http://prod.dvotch.ru:3001/api/statement/teacher/" + lessonId,
    {
      headers: {
        Authorization: TOKEN(),
      },
    }
  );
};

export const useUsers = (lessonId: string) => {
  return useQuery({
    queryKey: ["marks student", lessonId],
    queryFn: () => fetchUsersByLesson(lessonId),
    select: ({ data }) => data,
    enabled: !!lessonId,
  });
};
