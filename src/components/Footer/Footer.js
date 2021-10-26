import React, { useState } from "react";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Fab,
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
  Cancel,
  Clear,
  Instagram,
  MoreVert,
  Telegram,
  Tv,
  Twitter,
} from "@material-ui/icons";
import { useStyles } from "./Footer.styles";

export const Footer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElSocialMedias, setAnchorElSocialMedias] = useState(null);
  const [anchorElSmallScreen, setAnchorElSmallScreen] = useState(null);
  const [anchorElMore, setAnchorElMore] = useState(null);

  const [selectColor, setSelectColor] = useState({ background: "transparent" });
  const [selectColorSocialMedias, setSelectColorSocialMedias] = useState({
    background: "transparent",
  });

  const [selectColorSmallScreen, setSelectColorSmallScreen] = useState({
    background: "transparent",
  });

  const [selectColorMore, setSelectColorMore] = useState({
    background: "transparent",
  });

  const open = Boolean(anchorEl);
  const socialMediasOpen = Boolean(anchorElSocialMedias);
  const openSmallScreen = Boolean(anchorElSmallScreen);
  const openMore = Boolean(anchorElMore);

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

  const handleClickSmallScreen = (event) => {
    setAnchorElSmallScreen(event.currentTarget);
    setSelectColorSmallScreen({ background: "rgba(0,0,0,0.5)" });
  };
  const handleCloseSmallScreen = () => {
    setAnchorElSmallScreen(null);
    setSelectColorSmallScreen({ background: "transparent" });
  };

  const handleClickMore = (event) => {
    setAnchorElMore(event.currentTarget);
    setSelectColorMore({ background: "rgba(0,0,0,0.5)" });
  };
  const handleCloseMore = () => {
    setAnchorElMore(null);
    setSelectColorMore({ background: "transparent" });
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
          <Typography className={classes.footerItemsWithHide}>
            Contact Us
          </Typography>
          <Typography className={classes.footerItemsWithHide}>Rules</Typography>
          <Typography className={classes.footerItemsWithHide}>FAQ</Typography>
          <Typography className={classes.footerItemsWithHide}>Jobs</Typography>
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
          <Button
            style={selectColorSmallScreen}
            disableRipple
            onClick={handleClickSmallScreen}
            className={classes.menuButtonSmallScreen}
          >
            <Typography className={classes.menuButtonText}>
              Useful Links
            </Typography>
            <ArrowDropUp className={classes.arrowUp} />
          </Button>
          <Menu
            open={openSmallScreen}
            onClose={handleCloseSmallScreen}
            anchorEl={anchorElSmallScreen}
            PopoverClasses={{ paper: classes.fullScreenMenu }}
            disableScrollLock={true}
          >
            <Cancel
              className={classes.cancel}
              onClick={handleCloseSmallScreen}
            />
            <MenuItem
              style={{ marginTop: "350px" }}
              className={classes.fullScreenMenuItems}
            >
              Contact Us
            </MenuItem>
            <MenuItem className={classes.fullScreenMenuItems}>Rules</MenuItem>
            <MenuItem className={classes.fullScreenMenuItems}>FAQ</MenuItem>
            <MenuItem className={classes.fullScreenMenuItems}>Jobs</MenuItem>
            <MenuItem className={classes.fullScreenMenuItems}>Logo</MenuItem>
            <MenuItem className={classes.fullScreenMenuItems}>
              Internet Traffic
            </MenuItem>
            <MenuItem className={classes.fullScreenMenuItems}>
              Download Films
            </MenuItem>
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
          <MoreVert className={classes.moreVert} onClick={handleClickMore} />
          <Menu
            open={openMore}
            onClose={handleCloseMore}
            anchorEl={anchorElMore}
            classes={{ paper: classes.fullScreenMenu }}
            disableScrollLock={true}
          >
            <Cancel className={classes.cancel} onClick={handleCloseMore} />
            <MenuItem
              style={{ marginTop: "350px" }}
              className={classes.fullScreenMenuItems}
            >
              <Telegram className={classes.menuItemLogo} /> Telegram
            </MenuItem>
            <MenuItem className={classes.fullScreenMenuItems}>
              <Twitter className={classes.menuItemLogo} /> Twitter
            </MenuItem>
            <MenuItem className={classes.fullScreenMenuItems}>
              <Instagram className={classes.menuItemLogo} /> Instagram
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </AppBar>
  );
};
