import { useState } from "react";
import { registerUser } from "../api/auth.js";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert
} from "@mui/material";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // simple email regex (sufficient for frontend)
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submit = async () => {
    setError("");

    // required fields check
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    // email validation
    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // password validation
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        fullWidth
        label="Name"
        margin="normal"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

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
        helperText="Password must be at least 6 characters"
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
        Register
      </Button>
    </Container>
  );
};

export default Register;
