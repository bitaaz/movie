import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  footerItemTv: {
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
  },
  footerItems: {
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
  },
  otherLinks: {
    textTransform: "none",
    height: "20px",
    backgroundColor: "transparent",
    color: "#616161",
    marginLeft: "10px",
    marginTop: "2px",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
  },
  menu: {
    backgroundColor: "#212121",
    color: "#616161",
  },
  menu_items: {
    cursor: "pointer",
    "&:hover": {
      color: "white",
      transition: "all 0.4s",
    },
  },
});
