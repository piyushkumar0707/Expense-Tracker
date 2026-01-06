import { createContext, useEffect, useMemo, useState } from "react";
import { mockLogin } from "./mockBackend";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const isAuth = !!token;

  const login = async (email, password) => {
    try {
      const data = await mockLogin(email, password);
      setToken(data.token);
      setUser(data.user);
      return true;
    } catch {
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");

    user
      ? localStorage.setItem("user", JSON.stringify(user))
      : localStorage.removeItem("user");
  }, [token, user]);

  const value = useMemo(
    () => ({ token, user, isAuth, login, logout }),
    [token, user, isAuth]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
