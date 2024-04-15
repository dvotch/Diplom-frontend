import { Outlet } from "react-router-dom";
import { Aside, Header } from "../../widgets";

export const RootLayot = () => {
  return (
    <div>
      <Header />
      <Aside />
      <Outlet />
    </div>
  );
};
