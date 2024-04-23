import clsx from "clsx";

interface props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string;
}
export const Button = ({ children, onClick, className }: props) => {
  return (
    <button
      className={clsx(
        "border-[1px] border-violet-900 text-violet-900 rounded-xl px-10 py-2 font-bold text-xl",
        className
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
