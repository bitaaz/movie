import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

//context
import { useAuth } from "../../contexts/AuthContext";
//logo
import Logo from "../../images/react-movie.png";

//material ui
import {
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Button,
  Paper,
  Avatar,
  CssBaseline,
  createTheme,
  FormControl,
} from "@material-ui/core";
import { LockRounded } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { ThemeProvider } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";

//styles
import { useStyles } from "./ForgotPassword.styles";
import Spinner from "../Spinner";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  const [spin, setSpin] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      setSpin(true);

      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
      setSpin(false);
    } catch {
      setError("Failed to reset password!");
      setSpin(false);
    }

    setLoading(false);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className={classes.logo_div}>
          <Link to="/">
            <img src={Logo} alt="logo" className={classes.logo} />
          </Link>
        </div>
        <Card className={classes.card}>
          <CardContent className={classes.paper}>
            <CssBaseline />

            <div className={classes.paper_div}>
              <Avatar className={classes.avatar}>
                <LockRounded />
              </Avatar>
              <Typography variant="h5" className={classes.title}>
                Password Reset
              </Typography>
              {error && (
                <Alert severity="error" className={classes.error}>
                  {error}
                </Alert>
              )}
              {message && (
                <Alert severity="success" className={classes.error}>
                  {message}
                </Alert>
              )}
              <form onSubmit={handleLogin}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  inputRef={emailRef}
                  className={classes.email}
                  required
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                />

                {spin && <Spinner />}

                {!spin && (
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    className={classes.submit}
                    style={{ fontSize: "23px" }}
                  >
                    Reset Password
                  </Button>
                )}
              </form>
              <Link
                to="/login"
                className={classes.signup}
                style={{ marginTop: theme.spacing(3), fontSize: "18px" }}
              >
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
        <div className={classes.typo_div}>
          <Typography>
            Need an account?{" "}
            <Link
              to="/signup"
              className={classes.signup}
              style={{ fontSize: "17px" }}
            >
              Signup
            </Link>
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;
