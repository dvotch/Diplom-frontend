import { Outlet, useNavigate } from "react-router-dom";
import { Aside, Header } from "../../widgets";
import { useContext, useEffect } from "react";
import { RoleContext } from "../context";

export const RootLayot = () => {
  const navigate = useNavigate();
  const { setRole } = useContext(RoleContext);

  useEffect(() => {
    const TokenUser = localStorage.getItem("token");

    if (TokenUser) {
      setRole([TokenUser]);
      navigate("/statement");
    }
    if (!TokenUser) navigate("/Login");
  }, []);
  return (
    <div className="">
      <div className="grid grid-cols-root grid-rows-root gap-y-6 gap-x-12 dark:bg-slate-900">
        <Header />
        <Aside />
        <Outlet />
      </div>
    </div>
  );
};
