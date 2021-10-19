import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1c1c1c",
    },
  },
});

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    padding: theme.spacing(2, 8, 2),
    background: "rgba(0,0,0,0.9)",
    [theme.breakpoints.down(395)]: {
      display: "block",
    },
  },
  logo_link: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 200,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 100,
    },
  },
  profile_logo_person: {
    marginLeft: "auto",
    transition: "all 0.3s",
  },

  profile_logo: {
    marginLeft: "auto",
  },

  auth_grid: {
    [theme.breakpoints.down(395)]: {
      marginTop: theme.spacing(2),
    },
  },
  login_button: {
    fontSize: "18px",
    background: "#353535",
    color: "#fff",
    transition: "all 0.5s",
    textTransform: "none",
    "&:hover": {
      color: "#eeeeee",
      background: theme.palette.primary.light,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down(395)]: {
      fontSize: "8px",
    },
  },
  signup_button: {
    fontSize: "18px",
    background: theme.palette.success.dark,
    marginLeft: theme.spacing(1),
    textTransform: "none",
    color: "#fff",
    transition: "all 0.3s",
    "&:hover": {
      background: theme.palette.success.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down(395)]: {
      fontSize: "8px",
    },
  },

  drop_down: {
    transition: "all 0.3",
    display: "flex",
    flexDirection: "column",
  },
  drop_down_email: {
    cursor: "pointer",
    color: "#eeeeee",
    fontSize: 21,
    marginRight: theme.spacing(8),
    transition: "all 0.3s",
    textDecoration: "none",
    "&:hover": {
      color: "#bdbdbd",
    },
  },
  drop_down_fav: {
    cursor: "pointer",
    color: "#eeeeee",
    fontSize: 19,
    marginRight: theme.spacing(8),
    transition: "all 0.3s",
    "&:hover": {
      color: "#bdbdbd",
    },
  },
  drop_down_logout: {
    cursor: "pointer",
    color: "#eeeeee",
    fontSize: 19,
    transition: "all 0.3s",

    "&:hover": {
      color: "#bdbdbd",
    },
  },
});
