// import styled from "styled-components";
import { Button, createTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { styled } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";

const theme = createTheme({});

export const useStyles = makeStyles(() => ({
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
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "20px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.dark,
  },
  error: {
    marginTop: theme.spacing(3),
    width: "100%",
    fontSize: 18,
    alignItems: "center",
  },
  email_text_field: {
    margin: theme.spacing(5, 0, 3),
  },
  resize: {
    fontSize: 18,
  },
  password_text_field: {
    marginBottom: theme.spacing(3),
  },
  submit: {
    background: theme.palette.success.dark,
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
    textTransform: "none",

    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },
  login_text: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
  },
  login_typography: {
    color: theme.palette.success.dark,
    marginLeft: theme.spacing(1),

    "&:hover": {
      color: theme.palette.success.light,
    },
  },
}));
