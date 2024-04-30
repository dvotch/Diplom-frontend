import clsx from "clsx";
import { Link } from "react-router-dom";

interface props {
  children: React.ReactNode;
  to: string;
  className?: string;
}
export const BaseLink = ({ children, to, className }: props) => {
  return (
    <Link
      to={to}
      className={clsx(
        "border-[1px] border-purple-900 py-2 dark:border-rose-600 dark:text-white  grow grid place-items-center rounded-lg mt-4 hover:opacity-50",
        className
      )}
    >
      {children}
    </Link>
  );
};
