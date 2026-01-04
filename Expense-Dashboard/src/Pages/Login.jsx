import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

function Login() {
  const { login, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuth) {
    navigate("/dashboard", { replace: true });
  }

  const submit = () => {
    const ok = login(email, password);
    if (!ok) setError("Invalid credentials");
    else navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={submit}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Use: test@example.com / 123456</p>
    </div>
  );
}

export default Login;
