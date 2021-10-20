import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//material ui
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
//context
import { useAuth } from "../../contexts/AuthContext";
//styles
import { useStyles, theme } from "./Dashboard.styles";
import Navbar from "../Navbar";
import { Alert } from "@material-ui/lab";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch {
      setError("Failed to logout!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/*{currentUser ? (*/}
      {/*  <>*/}
      <Navbar />
      <Container maxWidth="sm" className={classes.container}>
        {" "}
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.profile_div}>
              <Typography variant="h3" className={classes.profile_text}>
                Profile
              </Typography>
            </div>
            {error && (
              <Alert severity="error" className={classes.error}>
                {error}
              </Alert>
            )}
            <div className={classes.email_div}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Email:{" "}
              </Typography>
              <Typography variant="body1" className={classes.email}>
                {currentUser ? currentUser.email : ""}
              </Typography>
            </div>
            <Link to="/update-profile" style={{ textDecoration: "none" }}>
              <div className={classes.button_div}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.button}
                >
                  Update Profile
                </Button>
              </div>
            </Link>
          </CardContent>
        </Card>
        <div className={classes.logout_div}>
          <Typography style={{ fontSize: "23px" }} onClick={handleLogout}>
            Log Out
          </Typography>
        </div>{" "}
      </Container>
      {/*  </>*/}
      {/*) : (*/}
      {/*  // <div*/}
      {/*  //   style={{*/}
      {/*  //     display: "flex",*/}
      {/*  //     alignItems: "center",*/}
      {/*  //     flexDirection: "column",*/}
      {/*  //     margin: theme.spacing(6, 3, 6),*/}
      {/*  //   }}*/}
      {/*  // >*/}
      {/*  //   <Typography variant="h5">*/}
      {/*  //     You should login to access to this page!*/}
      {/*  //   </Typography>*/}
      {/*  //   <Link*/}
      {/*  //     to="/login"*/}
      {/*  //     style={{*/}
      {/*  //       textDecoration: "none",*/}
      {/*  //       "&:hover": {*/}
      {/*  //         color: theme.palette.success.main,*/}
      {/*  //       },*/}
      {/*  //     }}*/}
      {/*  //   >*/}
      {/*  //     <Typography variant="h6" className={classes.login_typography}>*/}
      {/*  //       Redirect to Log In Page*/}
      {/*  //     </Typography>*/}
      {/*  //   </Link>*/}
      {/*  // </div>*/}
      {/*  <FirebaseLogin />*/}
      {/*)}*/}
    </ThemeProvider>
  );
}
