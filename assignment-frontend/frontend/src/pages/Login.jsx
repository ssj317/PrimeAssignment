import { useState } from "react";
import { loginUser } from "../api/auth.js";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert
} from "@mui/material";

// helper to decode JWT (no extra lib needed)
const getRoleFromToken = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch {
    return null;
  }
};

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async () => {
    setError("");

    // frontend validation
    if (!form.email || !form.password) {
      setError("Email and password are required");
      return;
    }

    try {

      console.log("Submitting login for:", form.email);
      console.log("Password entered:", form.password );
      const res = await loginUser(form);
      const token = res.data.token;

      // save token
      login(token);

      // role-based handling 
      const role = getRoleFromToken(token);

      if (role === "admin") {
        navigate("/admin"); // later you can do /admin
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={submit}
      >
        Login
      </Button>

      <Typography align="center" sx={{ mt: 2 }}>
        Don’t have an account?{" "}
        <Link to="/register">Sign up</Link>
      </Typography>
    </Container>
  );
};

export default Login;
