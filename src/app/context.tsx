import { createContext, useState } from "react";

export interface context {
  role: string[];
  setRole: (role: string[]) => void;
  theme: string;
  setTheme: (theme: "" | "dark") => void;
}

export const RoleContext = createContext<context>({
  role: [""],
  setRole: () => {},
  theme: "",
  setTheme: () => {},
});

export const Context = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState([""]);
  const [theme, setTheme] = useState("");
  return (
    <RoleContext.Provider value={{ role, setRole, theme, setTheme }}>
      {children}
    </RoleContext.Provider>
  );
};
