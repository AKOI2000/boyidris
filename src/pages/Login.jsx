import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://boyidrisbe.onrender.com/admin/login", {
        method: "POST",
        credentials: "include", // important for cookies
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/dashboard"); // redirect on success
      } else if (data.message) {
        setError(data.message);
      } else {
        setError("Login failed. Try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="background-login">
      <div className="login">
        <div className="login-bg">
          <img src="/Images/Login.jpg" alt="Login Background" />
        </div>

        <form className="form-login" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button onClick={togglePassword}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <small style={{ color: "red" }}>{error}</small>}

          <button type="submit" className="form-btn" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
