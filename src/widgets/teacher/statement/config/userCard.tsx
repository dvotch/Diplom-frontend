import axios from "axios";
import { useUsersMarks } from "../api/marks";
import { IUser } from "../interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAverageMarks } from "../api/averageMark";

export const UserCard = ({
  user,
  lesson,
  monthCompare,
  selectedMark,
}: {
  user: IUser;
  lesson: string;
  monthCompare: string;
  selectedMark: string;
}) => {
  const days: number[] = [];
  for (let i = 1; i <= 31; i++) days.push(i);
  const { data: marks } = useUsersMarks(user.id, lesson);
  const { data: averageMark } = useAverageMarks(lesson, user.id);

  const filteredMarks = marks?.filter((element) => {
    const date = new Date(element.date).getMonth().toString();
    return date === monthCompare;
  });

  const getStatement = async (lesson: string, userId: string) => {
    const TOKEN = localStorage.getItem("token");

    return await axios.get(
      "http://prod.dvotch.ru:3001/api/statement/teacher/" +
        lesson +
        "/" +
        userId,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
  };

  const postMark = (day: number, statementId: string) => {
    const TOKEN = localStorage.getItem("token");

    const currentDate = new Date();
    currentDate.setDate(day);
    currentDate.setMonth(+monthCompare);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setHours(0);
    currentDate.setMilliseconds(0);
    return axios.post(
      "http://prod.dvotch.ru:3001/api/mark",
      {
        date: currentDate.toISOString(),

        mark: selectedMark,
        statementId: statementId,
      },
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (day: number) => {
      const { data } = await getStatement(lesson, user.id);
      const statementId = data[0];
      await postMark(day, statementId);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["marks student"] }),
        queryClient.invalidateQueries({ queryKey: ["averageMark student"] });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["marks student"] }),
        queryClient.invalidateQueries({ queryKey: ["averageMark student"] });
    },
  });

  const handleCellClick = async (day: number) => {
    const { data } = await getStatement(lesson, user.id);
    const statementId = data[0];
    try {
      await mutate(day, statementId);
    } catch (error) {}
  };
  return (
    <tr className="border-[1px] border-red-500 text-center">
      <td>{user.name + " " + user.surname}</td>

      {days.map((day) => {
        const currentDate = new Date();
        currentDate.setDate(day);
        const currentMark = filteredMarks?.find(
          (item) => new Date(item.date).getDate() === currentDate.getDate()
        );

        if (day === currentDate.getDay()) {
          filteredMarks?.shift();
        }

        return (
          <td
            className="border-[1px] border-red-500"
            onClick={() => handleCellClick(day)}
          >
            <button>{currentMark ? currentMark.mark.toString() : ""}</button>
          </td>
        );
      })}

      <div className="text-center">
        {averageMark !== undefined ? averageMark.toFixed(2) : "нет оценок"}
      </div>
    </tr>
  );
};
