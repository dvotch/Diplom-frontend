import { Outlet, useNavigate } from "react-router-dom";
import { Aside, Header } from "../../widgets";
import { useContext, useEffect } from "react";
import { RoleContext } from "../context";
import { Footer } from "../../widgets/footer/ui";

export const RootLayot = () => {
  const navigate = useNavigate();
  const { setRole } = useContext(RoleContext);

  useEffect(() => {
    const TokenUser = localStorage.getItem("token");

    if (!TokenUser) return navigate("/Login");
    setRole([TokenUser]);
  }, []);
  return (
    <div className="h-screen">
      <div className="grid grid-cols-root grid-rows-root gap-y-6 gap-x-12 dark:bg-slate-900">
        <Header />
        <Aside />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
