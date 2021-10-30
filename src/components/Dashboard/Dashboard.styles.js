import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({});

export const useStyles = makeStyles({
  container: {
    marginTop: theme.spacing(30),
  },
  card: {
    padding: theme.spacing(2, 2, 2),
  },
  profile_div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profile_text: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  error: {
    width: "100%",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    fontSize: 18,
  },
  email_div: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  email_title: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  email: {
    marginLeft: theme.spacing(1),
    fontSize: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  button_div: {
    alignItems: "center",
    display: "flex",
    flexDirection: " column",
  },
  button: {
    background: theme.palette.success.dark,
    color: "#fff",
    textTransform: "none",
    fontSize: "23px",
    transition: "all 0.3s",
    "&:hover": {
      background: theme.palette.success.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  logout_div: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.success.dark,
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      color: theme.palette.success.main,
    },
  },
  logout_typography: {
    fontSize: "23px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  login_typography: {
    color: theme.palette.success.dark,
    marginLeft: theme.spacing(1),

    "&:hover": {
      color: theme.palette.success.light,
    },
  },
});
