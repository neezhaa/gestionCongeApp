import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
