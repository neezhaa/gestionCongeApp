import { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("authToken");
    return token ? { token } : null;
  });

//   const navigate = useNavigate();

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuth({ token });
    window.location.href = "/dashboard";
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuth(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
