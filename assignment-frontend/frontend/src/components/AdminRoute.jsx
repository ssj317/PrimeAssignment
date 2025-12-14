import { Navigate } from "react-router-dom";

const getRoleFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return JSON.parse(atob(token.split(".")[1])).role;
  } catch {
    return null;
  }
};

const AdminRoute = ({ children }) => {
  const role = getRoleFromToken();
  return role === "admin" ? children : <Navigate to="/" />;
};

export default AdminRoute;
