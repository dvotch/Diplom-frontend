import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayot } from "../layout/Root";
import { Statement } from "../../widgets/statement/ui";
import { StatementTeacher } from "../../widgets/teacher/statement/ui";
import Login from "../../widgets/login/ui";
import { NotFound } from "../../pages/404/NotFound";
import { Settings } from "../../widgets";
import { StudentGuardRoute } from "./StudentGuardRoute";
import { Forbidden } from "../../pages/403/Forbidden";
import { PortfolioPage } from "../../pages/portfolio/ui";
import { Credit } from "../../widgets/teacher/credit/ui";
import { TeacherGuardRoute } from "./StudentGuardRoute copy";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Login />} path="/Login" />

      <Route element={<RootLayot />} path="/">
        <Route element={<StudentGuardRoute />}>
          <Route element={<Statement />} path="student/statement" />
        </Route>
        <Route element={<TeacherGuardRoute />}>
          <Route element={<Credit />} path="teacher/credit" />
          <Route element={<StatementTeacher />} path="teacher/statement" />
        </Route>
        <Route element={<Settings />} path="settings" />
        <Route element={<PortfolioPage />} path="portfolio" />
      </Route>
      <Route element={<Forbidden />} path="forbidden" />
      <Route element={<NotFound />} path="*" />
    </Route>
  )
);
