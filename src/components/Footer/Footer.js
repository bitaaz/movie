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
import {
  ArrowDropUp,
  Instagram,
  Telegram,
  Tv,
  Twitter,
} from "@material-ui/icons";
import { useStyles } from "./Footer.styles";

export const Footer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElSocialMedias, setAnchorElSocialMedias] = useState(null);

  const [selectColor, setSelectColor] = useState({ background: "transparent" });
  const [selectColorSocialMedias, setSelectColorSocialMedias] = useState({
    background: "transparent",
  });

  const open = Boolean(anchorEl);
  const socialMediasOpen = Boolean(anchorElSocialMedias);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelectColor({ background: "rgba(0,0,0,0.5)" });
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectColor({ background: "transparent" });
  };

  const handleClickSocialMedias = (event) => {
    setAnchorElSocialMedias(event.currentTarget);
    setSelectColorSocialMedias({ background: "rgba(0,0,0,0.5)" });
  };
  const handleCloseSocialMedias = () => {
    setAnchorElSocialMedias(null);
    setSelectColorSocialMedias({ background: "transparent" });
  };

  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Grid container>
        <Grid item className={classes.leftGrid}>
          <Grid className={classes.footerItemTv}>
            <Tv className={classes.tvLogo} />
            <Typography className={classes.tvText}>Watch on TV</Typography>
          </Grid>
          <Typography className={classes.footerItems}>Applications</Typography>
          <Typography className={classes.footerItems}>Contact Us</Typography>
          <Typography className={classes.footerItems}>Rules</Typography>
          <Typography className={classes.footerItems}>FAQ</Typography>
          <Typography className={classes.footerItems}>Jobs</Typography>
          <Button
            style={selectColor}
            disableRipple
            onClick={handleClick}
            className={classes.menuButton}
          >
            <Typography className={classes.menuButtonText}>
              Other Links
            </Typography>
            <ArrowDropUp />
          </Button>
          <Menu
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            classes={{ paper: classes.menu }}
            disableScrollLock={true}
          >
            <MenuItem className={classes.menu_items}>Logo</MenuItem>
            <MenuItem className={classes.menu_items}>Internet Traffic</MenuItem>
            <MenuItem className={classes.menu_items}>Download Films</MenuItem>
          </Menu>
        </Grid>
        <Grid className={classes.rightGrid}>
          <Button
            style={selectColorSocialMedias}
            disableRipple
            onClick={handleClickSocialMedias}
            className={classes.menuButton}
          >
            <Typography className={classes.menuButtonText}>
              Social Medias
            </Typography>
            <ArrowDropUp />
          </Button>
          <Menu
            open={socialMediasOpen}
            onClose={handleCloseSocialMedias}
            anchorEl={anchorElSocialMedias}
            style={{ marginTop: "-20px" }}
            classes={{ paper: classes.socialMediasMenu }}
            disableScrollLock={true}
          >
            <MenuItem className={classes.menu_items}>
              <Telegram className={classes.menuItemLogo} /> Telegram
            </MenuItem>
            <MenuItem className={classes.menu_items}>
              <Twitter className={classes.menuItemLogo} /> Twitter
            </MenuItem>
            <MenuItem className={classes.menu_items}>
              <Instagram className={classes.menuItemLogo} /> Instagram
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </AppBar>
  );
};
