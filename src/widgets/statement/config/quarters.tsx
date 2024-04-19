import { evenMonths, oddMonths } from "./months";

export const Quarter = ({ odd }: { odd: boolean }) => {
  const days: number[] = [];
  for (let i = 1; i <= 31; i++) days.push(i);
  const months = odd ? oddMonths : evenMonths;

  return (
    <table className="table-fixed border-2 border-black row-start-3 h-1/2">
      <thead>
        <tr>
          <th className="w-20"></th>
          {days.map((value) => {
            return (
              <th className="border-[1px] border-red-500  w-6">{value}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {months.map((val) => {
          return (
            <tr className="border-[1px] border-red-500 text-center">
              <td>{val}</td>
              {days.map(() => {
                return <td className="border-[1px] border-red-500">{}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
