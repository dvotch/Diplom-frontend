import clsx from "clsx";

interface props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string;
  value?: string;
  type?: "submit" | "reset" | "button";
}
export const Button = ({
  children,
  onClick,
  className,
  value,
  type,
}: props) => {
  return (
    <button
      className={clsx(
        "border-[1px] border-violet-900 text-violet-900 rounded-xl px-10 py-2 font-bold text-xl",
        className
      )}
      onClick={onClick}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
};
