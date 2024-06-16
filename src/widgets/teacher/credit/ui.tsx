import { useState } from "react";
import { useCredit } from "./api";
import AddRecordModal from "./window/addNote";
import { formatDateTime } from "./api/dateConvertString";

import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ILesson, IUser } from "./interfaces";
import { useUserGroup1 } from "./api/userGroupAll";

import { useLessonsAll } from "./api/lessonsAll";

export const Credit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: users } = useUserGroup1();
  const { data: credits, isLoading } = useCredit();
  const { data: lessons } = useLessonsAll();
  const lessonsById: { [key: string]: ILesson } | undefined = lessons?.reduce(
    (acc, lesson) => {
      return { ...acc, [lesson.id]: lesson };
    },
    {}
  );

  const usersById: { [key: string]: IUser } | undefined = users?.reduce(
    (acc, user) => {
      return { ...acc, [user.id]: user };
    },
    {}
  );

  const queryClient = useQueryClient();
  const DeleteUserName = async (creditId: string) => {
    const TOKEN = localStorage.getItem("token");

    return await axios.delete(
      "http://prod.dvotch.ru:3001/api/credit/" + creditId,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
  };
  const { mutate } = useMutation({
    mutationFn: (creditId: string) => DeleteUserName(creditId),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["credit teacher"] }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["credit teacher"] }),
  });

  const handleDelete = async (creditId: string) => {
    try {
      DeleteUserName(creditId);
      mutate(creditId);
      alert("Запись удалена");
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-4xl dark:text-white mb-4">Задолженности</h1>
      <div className="flex-col flex justify-center">
        <table className=" ">
          <thead className="">
            <tr className="border-b-2 border-Neutral-900  dark:text-white">
              <th className="w-60">Предмет </th>
              <th className="w-60">Студент</th>
              <th className="w-60 ">Дата</th>
              <th className="w-60">Кабинет</th>
              <th className="w-60">Группа</th>
              <th className="w-60">Крайний срок</th>
            </tr>
          </thead>

          <tbody className="dark:text-white">
            {isLoading ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              credits &&
              credits.map((credit, index) => (
                <tr key={index} className="border-b-2 border-Neutral-900 ">
                  {lessonsById && lessonsById[credit.lessonId] && (
                    <td className="text-center">
                      {lessonsById[credit.lessonId].name}
                    </td>
                  )}

                  {usersById && usersById[credit.userId] && (
                    <td className="text-center ">
                      {usersById[credit.userId].name +
                        " " +
                        usersById[credit.userId].surname}
                    </td>
                  )}
                  <td className="text-center">
                    {formatDateTime(credit.date.toString())}
                  </td>
                  <td className="text-center">{credit.office}</td>
                  {lessonsById && lessonsById[credit.lessonId] && (
                    <td className="text-center">
                      {lessonsById[credit.lessonId].group}
                    </td>
                  )}
                  <td className="text-center text-red-700">
                    {formatDateTime(credit.deadLine.toString())}
                  </td>
                  <button onClick={() => handleDelete(credit.id)}>
                    Удалить
                  </button>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className=" flex justify-center ">
          <button
            className="mr-4 mt-2 dark:text-white hover:opacity-50  opacity-70 font-bold "
            onClick={() => setIsOpen(true)}
          >
            Добавить запись
          </button>

          <AddRecordModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};
