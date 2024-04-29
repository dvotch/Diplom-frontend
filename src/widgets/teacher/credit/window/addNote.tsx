import { useCredit } from "../api/credits";
import { AddRecordModalProps, ICredit } from "../interfaces";
import CloseIcon from "@mui/icons-material/Close";

import { useLessons } from "../api/lessons";

import { useUserGroup } from "../api/userGroup";
import { useState } from "react";
import axios from "axios";

export const AddRecordModal = ({ isOpen, onClose }: AddRecordModalProps) => {
  const { data: lessons } = useLessons();
  const { data: credits } = useCredit();

  const { data: usersGroup } = useUserGroup("205");

  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedDateStart, setSelectedDateStart] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");
  const [selectedDateEnd, setSelectedDateEnd] = useState("");

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
      const PostUserName = async () => {
        const TOKEN = localStorage.getItem("token");
        return await axios.post("http://prod.dvotch.ru:3001/api/credit", data, {
          headers: {
            Authorization: TOKEN,
          },
        });
      };
      const response = await PostUserName();
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  return (
    <>
      {isOpen &&
        credits &&
        credits.map((credit, index) => (
          <form
            className="fixed inset-0 flex items-center justify-center  bg-opacity-30 "
            onSubmit={handleSubmit}
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
                    Выберите предмет
                  </div>
                  <select
                    className="w-56 border-solid mt-2 border-2  font-regular rounded-lg"
                    name="email"
                    value={selectedLessonId}
                    onChange={(e) => setSelectedLessonId(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Название
                    </option>
                    {lessons &&
                      lessons.map((lessons) => (
                        <option value={credit.lessonId}>{lessons.name}</option>
                      ))}
                  </select>
                </div>
                <div>
                  <div className="flex-col font-regular text-indigo-950">
                    Выберите студента
                  </div>
                  <select
                    className="w-56 border-solid mt-2 border-2  font-regular rounded-lg"
                    name="email"
                    value={selectedUserId}
                    onChange={(e) => setSelectedUserId(e.target.value)}
                  >
                    <option value=" " disabled selected>
                      ФИО
                    </option>
                    {usersGroup &&
                      usersGroup.map((usersGroup) => (
                        <option value={credit.userId}>
                          {usersGroup.name + " " + usersGroup.surname}
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
                  className="bg-purple-800 text-lg text-white font-bold rounded-lg mt-4 ml-4 w-24 dark:bg-purple-900"
                  type="submit"
                >
                  Добавить
                </button>
                <button
                  className="border-[1px] border-purple-800 text-purple-800 rounded-xl   font-bold mt-4 mr-4 w-24"
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
