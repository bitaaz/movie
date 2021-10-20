import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({});

export const useStyles = makeStyles({
  logo_div: {
    marginTop: theme.spacing(18),
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    maxWidth: "200px",
  },
  card: {
    marginTop: "60px",
  },

  paper: {
    paddingTop: "40px",
    paddingRight: "50px",
    paddingLeft: "50px",
  },
  paper_div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: theme.palette.success.dark,
    color: "#fff",
  },
  title: {
    marginTop: theme.spacing(1),
  },
  error: {
    width: "100%",
    alignItems: "center",
    marginTop: theme.spacing(3),
    fontSize: 18,
  },
  resize: {
    fontSize: 18,
  },
  email: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
  password: {
    marginBottom: theme.spacing(3),
  },
  submit: {
    backgroundColor: theme.palette.success.dark,
    textTransform: "none",
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },

  typo_div: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  signup: {
    color: theme.palette.success.dark,

    "&:hover": {
      color: theme.palette.success.main,
    },
  },
});
