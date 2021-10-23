import React, { useState } from "react";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { ArrowDropUp, Tv } from "@material-ui/icons";
import { useStyles } from "./Footer.styles";

export const Footer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectColor, setSelectColor] = useState({ background: "transparent" });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelectColor({ background: "rgba(0,0,0,0.5)" });
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectColor({ background: "transparent" });
  };

  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      style={{
        top: "auto",
        bottom: 0,
        marginTop: "30px",
        backgroundColor: "#212121",
      }}
    >
      {/*<BottomNavigation value={0} onChange={(event, newValue) => {}}>*/}
      {/*<BottomNavigationAction label="One" icon={<Person />} />*/}
      {/*<BottomNavigationAction label="Two" icon={<Person />} />*/}
      {/*</BottomNavigation>*/}
      <Grid container>
        <Grid
          item
          style={{
            display: "flex",
            margin: "5px",
            alignItems: "center",
            color: "#616161",
          }}
        >
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            className={classes.footerItemTv}
          >
            <Tv style={{ width: "14px", height: "14px" }} />
            <Typography
              style={{
                marginLeft: "5px",
                fontSize: "13px",
              }}
            >
              Watch on TV
            </Typography>
          </Grid>
          <Typography
            style={{ marginLeft: "10px", fontSize: "13px" }}
            className={classes.footerItems}
          >
            Applications
          </Typography>
          <Typography
            style={{ marginLeft: "10px", fontSize: "13px" }}
            className={classes.footerItems}
          >
            Contact Us
          </Typography>
          <Typography
            style={{ marginLeft: "10px", fontSize: "13px" }}
            className={classes.footerItems}
          >
            Rules
          </Typography>
          <Typography
            style={{ marginLeft: "10px", fontSize: "13px" }}
            className={classes.footerItems}
          >
            FAQ
          </Typography>
          <Typography
            style={{ marginLeft: "10px", fontSize: "13px" }}
            className={classes.footerItems}
          >
            Jobs
          </Typography>
          <Button
            style={selectColor}
            disableRipple
            onClick={handleClick}
            className={classes.otherLinks}
          >
            <Typography style={{ fontSize: "13px" }}>Other Links</Typography>
            <ArrowDropUp />
          </Button>
          <Menu
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            style={{ marginTop: "-20px" }}
            classes={{ paper: classes.menu }}

            // MenuListProps={{
            //   onMouseLeave: handleClose,
            // }}
          >
            <MenuItem
              style={{ fontSize: "13px" }}
              className={classes.menu_items}
            >
              Logo
            </MenuItem>
            <MenuItem
              style={{ fontSize: "13px" }}
              className={classes.menu_items}
            >
              Internet Traffic
            </MenuItem>
            <MenuItem
              style={{ fontSize: "13px" }}
              className={classes.menu_items}
            >
              Download Films
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </AppBar>
  );
};
