// import { createContext, useState, useContext } from "react";
// // import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(() => {
//     const token = localStorage.getItem("authToken");
//     return token ? { token } : null;
//   });

// //   const navigate = useNavigate();

//   const login = (token) => {
//     localStorage.setItem("authToken", token);
//     setAuth({ token });
//     window.location.href = "/dashboard";
//   };

//   const logout = () => {
//     localStorage.removeItem("authToken");
//     setAuth(null);
//     window.location.href = "/login";
//   };

//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Check for both token and user in localStorage
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("authUser");
    return token && user ? { token, user: JSON.parse(user) } : null;
  });

  const login = (token, user) => {
    // Store both token and user data
    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", JSON.stringify(user));
    setAuth({ token, user });
    window.location.href = "/dashboard";
  };

  const logout = () => {
    // Remove both token and user data
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
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