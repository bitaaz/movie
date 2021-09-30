import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import { useStyles } from "./FirebaseLogin.styles";
//components
import Spinner from "../Spinner";
import Home from "../Home";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const FirebaseLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();

  const [spin, setSpin] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      setSpin(true);

      await login(emailRef.current.value, passwordRef.current.value);

      const timer = setTimeout(() => {
        if (window.location.pathname === "/dashboard") {
          navigate("/dashboard");
        }
      }, 500);
    } catch {
      setError("Failed to login!");
      setSpin(false);
    }

    setLoading(false);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {currentUser ? (
        navigate("/")
      ) : (
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
                  Log In
                </Typography>
                {error && (
                  <Alert severity="error" className={classes.error}>
                    {error}
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
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    type="password"
                    inputRef={passwordRef}
                    className={classes.password}
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
                      Log In
                    </Button>
                  )}
                </form>
                <Link
                  to="/forgot-password"
                  className={classes.signup}
                  style={{ marginTop: theme.spacing(3), fontSize: "18px" }}
                >
                  Forgot Password?
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
      )}
    </ThemeProvider>
  );
};

export default FirebaseLogin;
