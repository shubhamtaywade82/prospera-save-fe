import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// Define the User type based on your user profile
interface User {
  name: string;
  // Add other properties from your user profile here
}

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {user ? "Welcome, " + user.name : "Welcome, Guest"}
        </Typography>
        {user ? (
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button color="inherit">Login</Button>
          </Link>
        )}
        {user ? (
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Button color="inherit">Edit Profile</Button>
          </Link>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

Header.displayName = "Header";

export default Header;
