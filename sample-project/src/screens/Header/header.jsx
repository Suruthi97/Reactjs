import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import React from "react";
import "../../App.scss";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/images/logo.svg";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

function HeaderContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <img src={logo} className="app-logo" alt="logo" />
          </IconButton>

          <Divider orientation="vertical" flexItem sx={{ margin: "10px" }} />
                    <Typography variant="h3" component="div" sx={{ margin: '10px'  }}>
            {props.title}
          </Typography>
          {props.isToken ? (
            <Box className="logoutButton">
              <Button variant="contained"
              onClick={props.handleLogout}
              >Logout</Button>
            </Box>
            ) : null}
        </Toolbar>
      </Box>
    </React.Fragment>
  );
}
export default HeaderContainer;
