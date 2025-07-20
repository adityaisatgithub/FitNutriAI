import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate("/login");
    console.log("Login button clicked");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              FitNutriAI
            </Link>
          </Typography>
          <Button color="inherit" onClick={handleCLick}>
            Login / Signup
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
