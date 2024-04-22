import { createContext, useState } from "react";

export interface context {
  role: string[];
  setRole: (role: string[]) => void;
}
export const RoleContext = createContext<context>({
  role: [""],
  setRole: () => {},
});

export const Context = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState([""]);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
