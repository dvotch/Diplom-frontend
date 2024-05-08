import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { STUDENT_MARK_URL, TOKEN } from "../../../shared/const";

export const fetchAverageStudentMarks = async (lessonId: string) => {
  return await axios.get<string>(STUDENT_MARK_URL + "/" + lessonId, {
    headers: {
      Authorization: TOKEN(),
    },
  });
};

export const useAverageMark = (lessonId: string) => {
  return useQuery({
    queryKey: ["average student mark", lessonId],
    queryFn: () => fetchAverageStudentMarks(lessonId),
    select: ({ data }) => data,
    enabled: !!lessonId,
  });
};
