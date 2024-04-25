import { useState } from "react";
import { useCredit } from "./api";
import AddRecordModal from "./window/addNote";
import { formatDateTime } from "./api/dateConvertString";
import { useLessons } from "./api/lessons";

export const Credit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: credits, isLoading } = useCredit();
  const { data: lessons } = useLessons();
  return (
    <table className="">
      <thead className="">
        <tr className="border-b-2 border-indigo-500 ">
          <th className="">Предмет </th>
          <th className=" ">Студент</th>
          <th className=" ">Дата</th>
          <th className="">Кабинет</th>
          <th className="">Курс</th>
          <th className="">Крайний срок</th>
        </tr>
      </thead>

      <tbody>
        {isLoading ? (
          <tr>
            <td>Loading...</td>
          </tr>
        ) : (
          credits &&
          credits.map((credit, index) => (
            <tr className="border-b-2 border-indigo-500 ">
              {lessons && (
                <td className="text-center">{lessons[index].name}</td>
              )}

              <td className="text-center">{credit.userId}</td>
              <td className="text-center">
                {formatDateTime(credit.date.toString())}
              </td>
              <td className="text-center">{credit.office}</td>
              {lessons && (
                <td className="text-center">{lessons[index].group}</td>
              )}
              <td className="text-center text-red-700">
                {formatDateTime(credit.deadLine.toString())}
              </td>
            </tr>
          ))
        )}
      </tbody>

      <div className="flex">
        <button className="mr-4" onClick={() => setIsOpen(true)}>
          Добавить запись
        </button>
        <AddRecordModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <button className="">Удалить запись</button>
      </div>
    </table>
  );
};
