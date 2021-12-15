import React, { useState, useContext } from "react";
import { makeStyles } from '@mui/styles';
import { Menu, Brightness4, Brightness7 } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip
} from "@mui/material";

import Store from "../store/context";
import NavDrawer from "./NavDrawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = () => {
  const { state, dispatch } = useContext(Store);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const classes = useStyles();
  let mode;
  const changeTheme = (mode) => {
    if (state.myTheme === "dark") {
      mode = "light";
    } else {
      mode = "dark";
    }
    dispatch({ type: "THEME", payload: mode });
  };

  const ToggleButton = () => {
    if (state.myTheme === "dark") {
      return <Brightness7 />;
    } else {
      return <Brightness4 />;
    }
  };
  const toggleDrawer = booleanValue => () => {
    setDrawerOpened(booleanValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo List App
          </Typography>

          <Tooltip title="Toggle light/dark theme">
            <IconButton color="inherit" onClick={() => changeTheme(mode)}>
              <ToggleButton />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <NavDrawer drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default NavBar;
