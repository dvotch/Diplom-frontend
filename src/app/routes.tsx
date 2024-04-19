import { createBrowserRouter } from "react-router-dom";
import { RootLayot } from "./layout/Root";
import { Statement } from "../widgets/statement/ui";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayot />,
    children: [
      {
        path: "statement",
        element: <Statement />,
      },
    ],
  },
]);
