import { useState } from "react";
import { useCredit } from "./api";
import AddRecordModal from "./window/addNote";
import { formatDateTime } from "./api/dateConvertString";
import { useLessons } from "./api/lessons";
import React from "react";
import { useUserName } from "./api/userName";

export const Credit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: users } = useUserName();
  const { data: credits, isLoading } = useCredit();
  const { data: lessons } = useLessons();
  const lessonsById =
    lessons &&
    lessons.reduce((acc, lesson) => {
      acc[lesson.id] = lesson;
      return acc;
    }, {});

  const usersById =
    users &&
    users.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  return (
    <div className="">
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
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex flex justify-center ">
          <button
            className="mr-4 mt-2 dark:text-white hover:opacity-50 opacity-70 font-bold "
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
