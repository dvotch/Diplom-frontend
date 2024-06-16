import { useCredit } from "../api/credits";
import { AddRecordModalProps, ICreditPost } from "../interfaces";
import CloseIcon from "@mui/icons-material/Close";

import { useLessons } from "../api/lessons";

import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserGroup } from "../api/userGroup";
import { useGroupTeacher } from "../api/group";

export const AddRecordModal = ({ isOpen, onClose }: AddRecordModalProps) => {
  const { data: credits } = useCredit();

  const { data: group } = useGroupTeacher();
  const [selectedGroup, setSelectedGroup] = useState(205);
  const { data: lessons } = useLessons(selectedGroup);
  const { data: usersGroup } = useUserGroup(selectedGroup);
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedDateStart, setSelectedDateStart] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");
  const [selectedDateEnd, setSelectedDateEnd] = useState("");
  const queryClient = useQueryClient();
  const PostUserName = async (data: ICreditPost) => {
    const TOKEN = localStorage.getItem("token");

    return await axios.post("http://prod.dvotch.ru:3001/api/credit", data, {
      headers: {
        Authorization: TOKEN,
      },
    });
  };
  const { mutate } = useMutation({
    mutationFn: (data: ICreditPost) => PostUserName(data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ["credit teacher"] }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["credit teacher"] }),
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      date: new Date(selectedDateStart),
      deadLine: new Date(selectedDateEnd),
      lessonId: selectedLessonId,

      office: Number(selectedOffice),
      userId: selectedUserId,
    };

    try {
      setSelectedLessonId("");
      setSelectedUserId("");
      setSelectedDateStart("");
      setSelectedOffice("");
      setSelectedDateEnd("");
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
    mutate(data);
    alert("Добавлено");
  };

  return (
    <>
      {isOpen &&
        credits &&
        credits.map(() => (
          <form
            className="fixed inset-0 flex items-center justify-center h-screen bg-gray-500 bg-opacity-10 "
            onSubmit={handleSubmit}
            id="form228"
          >
            <div className="flex-row  bg-white p-4  shadow-lg w-2/12 h-10/12 rounded-lg ">
              <div className="flex justify-center">
                <h1 className="font-bold content-center text-gray-500 opacity-50 ">
                  Добавить запись
                </h1>
                <button
                  className=""
                  onClick={() => {
                    onClose();
                  }}
                >
                  <CloseIcon />
                </button>
              </div>

              <div>
                <div>
                  <div className="flex-col font-regular text-indigo-950">
                    Выберите группу
                  </div>
                  <select
                    className="w-56 border-solid mt-2 border-2 font-regular rounded-lg"
                    name="group"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(+e.target.value)}
                  >
                    <option value="" disabled>
                      Номер
                    </option>
                    {group &&
                      group.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <div className="flex-col font-regular text-indigo-950">
                    Выберите предмет
                  </div>
                  <select
                    className="w-56 border-solid mt-2 border-2 font-regular rounded-lg"
                    name="email"
                    value={selectedLessonId}
                    onChange={(e) => setSelectedLessonId(e.target.value)}
                  >
                    <option value="" disabled>
                      Название
                    </option>
                    {lessons &&
                      lessons.map((lesson) => (
                        <option key={lesson.id} value={lesson.id}>
                          {lesson.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <div className="flex-col font-regular text-indigo-950">
                    Выберите студента
                  </div>
                  <select
                    className="w-56 border-solid mt-2 border-2 font-regular rounded-lg"
                    name="email"
                    value={selectedUserId}
                    onChange={(e) => setSelectedUserId(e.target.value)}
                  >
                    <option value="" disabled>
                      ФИО
                    </option>
                    {usersGroup &&
                      usersGroup.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.name + " " + user.surname}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <div className="flex-col font-regular text-indigo-950">
                    Дата
                  </div>
                  <input
                    placeholder="Время"
                    type="datetime-local"
                    className="flex-col font-regular text-indigo-950 border-solid mt-2 border-2  font-regular rounded-lg border-black w-56"
                    value={selectedDateStart}
                    onChange={(e) => setSelectedDateStart(e.target.value)}
                  ></input>
                </div>
                <div>
                  <div className="flex-col font-regular text-indigo-950">
                    Кабинет
                  </div>
                  <input
                    placeholder="Номер"
                    className="flex-col font-regular text-indigo-950 border-solid mt-2 border-2  font-regular rounded-lg border-black w-56"
                    value={selectedOffice}
                    onChange={(e) => setSelectedOffice(e.target.value)}
                  ></input>
                </div>

                <div>
                  <div className="flex-col font-regular text-indigo-950">
                    Крайний срок
                  </div>
                  <input
                    placeholder="Время"
                    className="flex-col font-regular text-indigo-950 border-solid mt-2 border-2  font-regular rounded-lg border-black w-56"
                    value={selectedDateEnd}
                    type="datetime-local"
                    onChange={(e) => setSelectedDateEnd(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-purple-800 text-lg text-white font-bold rounded-lg mt-4 ml-4 w-24 dark:bg-purple-900 hover:opacity-50"
                  type="submit"
                >
                  Добавить
                </button>
                <button
                  className="border-[1px] border-purple-800 text-purple-800 rounded-xl hover:opacity-50  font-bold mt-4 mr-4 w-24"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Отмена
                </button>
              </div>
            </div>
          </form>
        ))}
    </>
  );
};

export default AddRecordModal;
