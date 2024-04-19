import { Outlet } from "react-router-dom";
import { Aside, Header } from "../../widgets";

export const RootLayot = () => {
  return (
    <div className="grid grid-cols-root grid-rows-root gap-y-6 gap-x-12">
      <Header />
      <Aside />
      <Outlet />
    </div>
  );
};
