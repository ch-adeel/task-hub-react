import React from "react";
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <Grid Container spacing={3} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{           
            // backgroundColor: "#f4f6f8", // Light grey/blue background
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <CssBaseline />

          <Paper elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          width: "100%",
          borderRadius: 2,
          border: "1px solid #e0e0e0", // The border you requested
          mx: 2, // Margin for mobile responsiveness
        }}>

          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
              >
              Login
            </Button>
            <Grid container justifyContent={"flex-start"}>
              <Grid item>
                <Link to="/register">Don't have an account? Register</Link>
              </Grid>
            </Grid>
          </Box>
              </Paper>
        </Box>
      </Grid>
    </>
  );
};

export default login;
