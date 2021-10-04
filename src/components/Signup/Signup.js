import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//components
// import Button from "../Button";
import Spinner from "../Spinner";
import Home from "../Home";
//contexts
import { useAuth } from "../../contexts/AuthContext";
//logo
import Logo from "../../images/react-movie.png";
//material-ui
import {
  Button,
  Container,
  TextField,
  Grid,
  Card,
  CssBaseline,
  CardContent,
  Avatar,
  Typography,
  createTheme,
} from "@material-ui/core";

import { LockRounded } from "@material-ui/icons";

import { Alert } from "@material-ui/lab";

import { ThemeProvider } from "@material-ui/styles";

// import { Wrapper, MyButton } from "./Signup.styles";
import { useStyles } from "./Signup.styles";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export default function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [spin, setSpin] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    if (
      emailRef.current.value === "" ||
      passwordRef.current.value === "" ||
      passwordConfirmRef.current.value === ""
    ) {
      return setError("Empty field not allowed!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      setSpin(true);
      const timer = setTimeout(() => {navigate("/")}, 500);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
      {/*{currentUser ? (*/}
      {/*  */}
      {/*) : (*/}
        <Container component="main" maxWidth="xs">
          <div className={classes.logo_div}>
            <Link to="/">
              <img src={Logo} alt="logo" className={classes.logo} />
            </Link>
          </div>
          <Card className={classes.card}>
            <CardContent>
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockRounded />
                </Avatar>
                <Typography variant="h5">Sign Up</Typography>
                {error && (
                  <Alert severity="error" className={classes.error}>
                    {error}
                  </Alert>
                )}
                <form onSubmit={handleSignup}>
                  <TextField
                    label="Email"
                    inputRef={emailRef}
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    className={classes.email_text_field}
                  />
                  <TextField
                    label="Password"
                    inputRef={passwordRef}
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    className={classes.password_text_field}
                  />
                  <TextField
                    label="Password Confirmation"
                    inputRef={passwordConfirmRef}
                    variant="outlined"
                    type="password"
                    fullWidth
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
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      onSubmit={handleSignup}
                      style={{ fontSize: "23px" }}
                    >
                      Sign Up
                    </Button>
                  )}
                </form>
              </div>
            </CardContent>
          </Card>
          <div className={classes.login_text}>
            <Typography>
              Already have an account?
              <Link to="/login">
                <span
                  className={classes.login_typography}
                  style={{ fontSize: "17px" }}
                >
                  Log In
                </span>
              </Link>
            </Typography>
          </div>
        </Container>
      {/*)}*/}
    </ThemeProvider>
  );

  // return (
  //   <Wrapper>
  //     <h1>Signup</h1>
  //     {error && <div>Something went wrong!</div>}
  //     <label>Email</label>
  //     <input type="text" ref={emailRef} required />
  //     <label>Password</label>
  //     <input type="password" ref={passwordRef} required />
  //     <label>Password Confirmation</label>
  //     <input type="password" ref={passwordConfirmRef} required />
  //     {loading && <Spinner />}
  //     {!loading && <Button text="Sign Up" callback={handleSignup} />}
  //     <div>
  //       Already have account? <span>Log in</span>
  //     </div>
  //    </Wrapper>
  // );
}
