import { Outlet, useNavigate } from "react-router-dom";
import { Aside, Header } from "../../widgets";
import { useContext, useEffect } from "react";
import { RoleContext } from "../context";

export const RootLayot = () => {
  const navigate = useNavigate();
  const { role } = useContext(RoleContext);

  useEffect(() => {
    if (!role[0]) navigate("/Login");
  }, []);
  return (
    <div className="grid grid-cols-root grid-rows-root gap-y-6 gap-x-12">
      <Header />
      <Aside />
      <Outlet />
    </div>
  );
};
