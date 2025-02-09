import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const user = localStorage.getItem("googleUser");

  return user ? <Outlet /> : <Navigate to="/signin" />;
};
