import clsx from "clsx";
import React from "react";

interface props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  value?: string;
  type?: "submit" | "reset" | "button";
  variant: "text" | "contained" | "outlined";
}

const typeButton = (type: "text" | "contained" | "outlined") => {
  if (type === "contained")
    return "bg-purple-600 text-white px-10 py-2 dark:text-white dark:bg-rose-600";
  if (type === "text") return "bg-white text-violet-900 px-0 py-0";
  return "border-[1px] border-violet-900 text-violet-900 px-10 py-2 dark:text-white dark:border-red-600";
};

export const Button = React.memo(
  ({ children, onClick, className, value, type, variant }: props) => {
    const baseStyle = typeButton(variant);

    return (
      <button
        className={clsx("rounded-xl  font-bold text-xl", baseStyle, className)}
        onClick={onClick}
        type={type}
        value={value}
      >
        {children}
      </button>
    );
  }
);
