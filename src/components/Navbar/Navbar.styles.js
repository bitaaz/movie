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
  show_all_movies_root: {
    flexGrow: 1,
    marginBottom: "100px",
  },
  toolbar: {
    padding: theme.spacing(4, 8, 4),
    background: "#1c1c1c",
    [theme.breakpoints.down(420)]: {
      padding: theme.spacing(4, 3, 4),
    },
    [theme.breakpoints.down(330)]: {
      padding: theme.spacing(4, 1, 4),
    },
  },
  logo_link: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 200,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 120,
    },
    [theme.breakpoints.down(330)]: {
      maxWidth: 90,
    },
  },
  profile_logo_person: {
    marginLeft: "auto",
    transition: "all 0.3s",
  },

  accountCircle: {
    color: "#eeeeee",
    width: 50,
    height: 50,
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 30,
    },
  },

  person: {
    width: "35px",
    height: "35px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
  },

  profile_logo: {
    marginLeft: "auto",
  },

  auth_grid: {
    paddingTop: "10px",
    paddingBottom: "5px",
    [theme.breakpoints.down(395)]: {
      marginTop: theme.spacing(-1),
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
    [theme.breakpoints.down(330)]: {
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
    [theme.breakpoints.down(330)]: {
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "17px",
    },
  },
  drop_down_fav: {
    cursor: "pointer",
    color: "#eeeeee",
    fontSize: 19,
    marginRight: theme.spacing(8),
    textDecoration: "none",
    transition: "all 0.3s",
    "&:hover": {
      color: "#bdbdbd",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
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

    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  icons: {
    color: "#eeeeee",
    width: 20,
    height: 20,
    [theme.breakpoints.down("xs")]: {
      width: 15,
      height: 15,
    },
  },
});
