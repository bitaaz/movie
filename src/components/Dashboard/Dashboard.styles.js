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
  email: {
    marginLeft: theme.spacing(1),
    fontSize: "20px",
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
  login_typography: {
    color: theme.palette.success.dark,
    marginLeft: theme.spacing(1),

    "&:hover": {
      color: theme.palette.success.light,
    },
  },
});
