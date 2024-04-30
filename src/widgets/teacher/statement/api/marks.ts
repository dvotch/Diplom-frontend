import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TOKEN } from "../../../../shared/const";
import { IMark } from "../../../statement/interfaces";

export const fetchStudentMarks = async (lessonId: string) => {
  return await axios.get<IMark[]>(
    "http://prod.dvotch.ru:3001/api/student/marks/" + lessonId,
    {
      headers: {
        Authorization: TOKEN(),
      },
    }
  );
};

export const useMarks = (lessonId: string) => {
  return useQuery({
    queryKey: ["marks student", lessonId],
    queryFn: () => fetchStudentMarks(lessonId),
    select: ({ data }) => data,
    enabled: !!lessonId,
  });
};
