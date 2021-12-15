import React from "react";

import { makeStyles } from '@mui/styles';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles({
  list: {
    width: 180
  },
  info: {
    "text-align": "center",
    "font-weight": "bold"
  }
});

const NavDrawer = props => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={props.drawerOpened}
      onClose={props.toggleDrawer(false)}
    >
      <div
        className={classes.list}
        onClick={props.toggleDrawer(false)}
        onKeyDown={props.toggleDrawer(false)}
      >
        <List>
          <ListItem className={classes.info}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component="a" href="https://github.com/LogyText">
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  );
};

export default NavDrawer;
