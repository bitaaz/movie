import { makeStyles } from "@material-ui/styles";
import { theme } from "../Navbar/Navbar.styles";

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
  },
  tvText: {
    marginLeft: "5px",
    fontSize: "13px",
  },
  footerItems: {
    marginLeft: "10px",
    fontSize: "13px",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
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
  },
  menuButtonText: {
    fontSize: "13px",
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
  rightGrid: { alignItems: "center", margin: "5px" },
  socialMediasMenu: {
    backgroundColor: "#212121",
    color: "#9E9E9E",
  },
  menuItemLogo: { marginRight: "5px" },
});
