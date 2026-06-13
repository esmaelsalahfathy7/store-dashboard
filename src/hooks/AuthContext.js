import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(() => {
    return !!localStorage.getItem("user");
  });

  function LogIn(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLogged(true);
  }

  function LogOut() {
    localStorage.removeItem("user");
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider value={{ isLogged, LogIn, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
