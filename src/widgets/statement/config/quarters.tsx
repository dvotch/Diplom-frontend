import { IMark } from "../interfaces";
import { evenMonths, oddMonths } from "./months";

export const Quarter = ({ odd, marks }: { odd: boolean; marks: IMark[] }) => {
  const months = odd ? Object.entries(oddMonths) : Object.entries(evenMonths);
  console.log(months);
  const days: number[] = [];

  for (let i = 1; i <= 31; i++) days.push(i);

  type TMarks = {
    [key: string]: number;
  };

  const editMarks: TMarks = {};
  marks.map((data) => {
    const date = new Date(data.date);
    const day =
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
    const month =
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth().toString();
    editMarks[month + day] = data.mark;
  });

  return (
    <table className="table-fixed border-2 border-black row-start-3 h-1/2 dark:border-white">
      <thead>
        <tr>
          <th className="w-20"></th>
          {days.map((value) => {
            return (
              <th className="border-[1px] border-red-500  w-6" key={value}>
                {value}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {months.map((month) => {
          return (
            <tr
              className="border-[1px] border-red-500 text-center"
              key={month[1]}
            >
              <td>{month[1]}</td>
              {days.map((day) => {
                const currentDay = day < 10 ? "0" + day : day;
                return (
                  <td
                    className="border-[1px] border-red-500"
                    key={month[1] + day}
                  >
                    {editMarks.hasOwnProperty(month[0] + currentDay)
                      ? editMarks[month[0] + currentDay]
                      : ""}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
