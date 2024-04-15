import { createBrowserRouter } from "react-router-dom";
import { RootLayot } from "./layout/Root";
import { StatementPage } from "../pages/StatementPage";
import { ProfilePage } from "../pages/ProfilePage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayot />,
    children: [
      {
        path: "statement",
        element: <StatementPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
