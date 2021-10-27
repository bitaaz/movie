import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({});

export const useStyles = makeStyles({
  appBar: {
    top: "auto",
    bottom: 0,
    marginTop: "30px",
    backgroundColor: "#212121",
  },
  leftGrid: {
    display: "flex",
    margin: "5px",
    alignItems: "center",
    color: "#9E9E9E",
    flexGrow: "1",
  },
  footerItemTv: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
  },
  tvLogo: {
    width: "14px",
    height: "14px",

    [theme.breakpoints.down(380)]: {
      width: "11px",
      height: "11px",
    },
  },
  tvText: {
    marginLeft: "5px",
    fontSize: "13px",

    [theme.breakpoints.down(380)]: {
      fontSize: "10px",
    },
  },
  footerItems: {
    marginLeft: "10px",
    fontSize: "13px",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
    [theme.breakpoints.down(380)]: {
      fontSize: "10px",
    },
  },
  footerItemsWithHide: {
    marginLeft: "10px",
    fontSize: "13px",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  },
  menuButton: {
    textTransform: "none",
    height: "20px",
    backgroundColor: "transparent",
    color: "#9E9E9E",
    marginLeft: "10px",
    marginTop: "2px",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  },
  menuButtonSmallScreen: {
    textTransform: "none",
    height: "20px",
    backgroundColor: "transparent",
    color: "#9E9E9E",
    marginLeft: "10px",
    marginTop: "2px",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
    [theme.breakpoints.up(700)]: {
      display: "none",
    },
  },
  menuButtonText: {
    fontSize: "13px",

    [theme.breakpoints.down(380)]: {
      fontSize: "10px",
    },
  },
  arrowUp: {
    [theme.breakpoints.down(380)]: {
      width: "20px",
      height: "20px",
    },
  },
  menu: {
    backgroundColor: "#212121",
    color: "#9E9E9E",
    marginTop: "-20px",
  },
  menu_items: {
    fontSize: "13px",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
  },
  rightGrid: { alignItems: "center", margin: "5px", display: "flex" },
  socialMediasMenu: {
    backgroundColor: "#212121",
    color: "#9E9E9E",
  },
  menuItemLogo: { marginRight: "5px" },
  moreVert: {
    color: "#9E9E9E",
    width: "25px",
    height: "20px",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
    [theme.breakpoints.up(700)]: {
      display: "none",
    },
    [theme.breakpoints.down(380)]: {
      width: "20px",
      height: "15px",
    },
  },
  fullScreenMenu: {
    width: "100%",
    height: "100%",
    maxHeight: "unset",
    maxWidth: "unset",
    background: "#212121",
    marginLeft: "-15px",
    [theme.breakpoints.up(700)]: {
      display: "none",
    },
  },
  fullScreenMenuMobile: {
    width: "100%",
    height: "100%",
    maxHeight: "unset",
    maxWidth: "unset",
    background: "#212121",
    [theme.breakpoints.up(700)]: {
      display: "none",
    },
  },
  fullScreenMenuItems: {
    marginBottom: "10px",
    fontSize: "13px",
    cursor: "pointer",
    color: "#9E9E9E",
    justifyContent: "center",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
  },

  cancel: {
    position: "absolute",
    top: "30px",
    left: "10px",
    width: "35px",
    height: "35px",
    color: "#9E9E9E",
    cursor: "pointer",
    outline: "none",
  },
});
