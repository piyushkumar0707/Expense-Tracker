import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const ok = await login(email, password);
    if (!ok) setError("Invalid credentials");
    else navigate("/dashboard", { replace: true });
  };

  return (
    <div className="card page">
      <h1>Login</h1>

      <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Use: test@example.com / 123456</p>
    </div>
  );
}

export default Login;
