import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export const ProtectedRoutes = () => {
  const { currentUser } = useGlobalContext();

  if (currentUser) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};
