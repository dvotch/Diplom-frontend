import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayot } from "./layout/Root";
import { Statement } from "../widgets/statement/ui";
import Login from "../widgets/login/ui";
import { NotFound } from "../pages/404/NotFound";
import { Settings } from "../widgets";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {" "}
      <Route element={<Login />} path="/Login" />
      <Route element={<RootLayot />} path="/">
        <Route element={<Statement />} index path="statement" />
        <Route element={<Settings />} path="settings" />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Route>
  )
);
