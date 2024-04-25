import { Navigate, Outlet } from "react-router-dom";
import { decodeJwt } from "../../shared/helpers/decodeJwt";

export const TeacherGuardRoute = () => {
  const token = decodeJwt();
  const isTeacher = token.roles.includes("TEACHER");
  return isTeacher ? <Outlet /> : <Navigate to="/forbidden" replace />;
};
