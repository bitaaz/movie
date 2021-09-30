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
import { useStyles } from "./UpdateProfile.styles";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export default function UpdateProfile() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //   const [spin, setSpin] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    const promises = [];
    setError("");
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const classes = useStyles();
  const timer = setTimeout(500);
  console.log(timer);

  return (
    <ThemeProvider theme={theme}>
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
              <Typography variant="h5">Update Profile</Typography>
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
                  focused
                  defaultValue={currentUser.email}
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
                  focused
                  placeholder="Leave blank to keep the same"
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
                  focused
                  fullWidth
                  placeholder="Leave blank to keep the same"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onSubmit={handleSignup}
                  style={{ fontSize: "23px" }}
                >
                  Update
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
        <div className={classes.login_text}>
          <Link to="/dashboard">
            <span
              className={classes.login_typography}
              style={{ fontSize: "17px" }}
            >
              Cancel
            </span>
          </Link>
        </div>
      </Container>
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
