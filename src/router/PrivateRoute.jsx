// import useIsAuthenticated from "react-auth-kit"
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({children}) => {
//     const isAuthenticated = useIsAuthenticated();
//     return isAuthenticated() ? children : 
//       <Navigate to="/login" />;  
// };
// export default PrivateRoute;


import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
