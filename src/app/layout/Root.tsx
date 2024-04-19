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
    <div>
      <Header />
      <Aside />
      <Outlet />
    </div>
  );
};
