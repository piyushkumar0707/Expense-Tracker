import { createContext, useEffect, useMemo, useState } from "react";
import { mockLogin } from "./mockBackend";
import { decodeToken, isTokenExpired } from "./tokenUtils";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const isAuth = !!token && !isTokenExpired(token);

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const login = async (email, password) => {
  try {
    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) return false;

    const data = await res.json();
    setToken(data.token);
    setUser(data.user);
    return true;
  } catch {
    return false;
  }
};


  // 🔥 AUTO-LOGOUT EFFECT
  useEffect(() => {
    if (!token) return;

    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) {
      logout();
      return;
    }

    const timeout = decoded.exp - Date.now();

    if (timeout <= 0) {
      logout();
      return;
    }

    const timer = setTimeout(logout, timeout);
    return () => clearTimeout(timer);
  }, [token]);

  // Persist auth
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
