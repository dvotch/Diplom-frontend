import { formatDateTime } from "../../widgets/teacher/credit/api";
import { useGetStudentCredits } from "./api/useGetCredits";

export const StudentCreditPage = () => {
  const { data: credits, isLoading } = useGetStudentCredits();
  console.log(credits);
  return (
    <div className="">
      <h1 className="text-4xl dark:text-white mb-4">Задолжности</h1>
      <div className="flex-col flex justify-center">
        <table className=" ">
          <thead className="">
            <tr className="border-b-2 border-Neutral-900  dark:text-white">
              <th className="w-60">Предмет </th>
              <th className="w-60">Преподаватель</th>
              <th className="w-60">Дата</th>
              <th className="w-60">Кабинет</th>
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
                  <td className="text-center">{credit.lesson}</td>
                  <td className="text-center">
                    {credit.surname +
                      " " +
                      credit.name.slice(0, 1) +
                      ". " +
                      credit.patronymic.slice(0, 1) +
                      "."}
                  </td>
                  <td className="text-center">
                    {formatDateTime(credit.date.toString())}
                  </td>
                  <td className="text-center">{credit.office}</td>
                  <td className="text-center text-red-700">
                    {formatDateTime(credit.deadLine.toString())}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className=" flex justify-center "></div>
      </div>
    </div>
  );
};
