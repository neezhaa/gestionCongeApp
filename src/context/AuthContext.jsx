import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("authUser");
    return token && user ? { token, user: JSON.parse(user) } : null;
  });

  const login = (token, user) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", JSON.stringify(user));
    setAuth({ token, user });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);