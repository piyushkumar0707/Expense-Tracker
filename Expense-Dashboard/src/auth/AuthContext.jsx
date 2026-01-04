import { createContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const isAuth = !!user;

  const login = (email, password) => {
    // Simulated auth check (replace with API later)
    if (email === "test@example.com" && password === "123456") {
      const fakeUser = { email };
      setUser(fakeUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  // persist auth
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const value = useMemo(
    () => ({ user, isAuth, login, logout }),
    [user, isAuth]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
