import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
//context
import { useAuth } from "../../contexts/AuthContext";

//logo
import Logo from "../../images/react-movie-logo.svg";
//material-ui
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Popover,
  Paper,
  Divider,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  AccountCircle,
  ExitToAppOutlined,
  Favorite,
  FavoriteBorder,
  Person,
} from "@material-ui/icons";

//styles
import { useStyles, theme } from "./Navbar.styles";

const Navbar = () => {
  const classes = useStyles();
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [profileBgColor, setProfileBgColor] = useState({
    background: "transparent",
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setProfileBgColor({ background: "#000" });
  };

  const handleClose = () => {
    setAnchorEl(null);
    setProfileBgColor({ background: "transparent" });
  };

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to logout!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <div className={classes.logo_link}>
              <Link to="/">
                <img src={Logo} alt="logo" className={classes.logo} />
              </Link>
            </div>

            {currentUser ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleMenu}
                  className={classes.profile_logo_person}
                  disableRipple
                  style={profileBgColor}
                >
                  <Person
                    style={{
                      width: 35,
                      height: 35,
                    }}
                  />
                </IconButton>

                <Popover
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      borderRadius: 8,
                      background: "#424242",
                      marginTop: theme.spacing(2),
                    },
                  }}
                >
                  <div className={classes.drop_down}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <IconButton
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="false"
                          className={classes.profile_logo}
                          fontSizeLarge
                        >
                          <AccountCircle
                            style={{ color: "#eeeeee", width: 50, height: 50 }}
                          />
                        </IconButton>
                      </div>
                      <div>
                        <Link
                          to="/dashboard"
                          className={classes.drop_down_email}
                          onClick={handleClose}
                        >
                          {currentUser.email}
                        </Link>
                      </div>
                    </div>
                    <Divider
                      variant="middle"
                      style={{ background: "#757575" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: theme.spacing(1),
                      }}
                    >
                      <div>
                        <IconButton
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="false"
                          className={classes.profile_logo}
                          fontSizeLarge
                        >
                          <FavoriteBorder
                            style={{ color: "#eeeeee", width: 20, height: 20 }}
                          />
                        </IconButton>
                      </div>
                      <div className={classes.drop_down_fav}>
                        Favorite Movies
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: theme.spacing(1),
                        marginLeft: theme.spacing(1),
                      }}
                    >
                      <div>
                        <IconButton
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="false"
                          className={classes.profile_logo}
                          fontSizeLarge
                        >
                          <ExitToAppOutlined
                            style={{ color: "#eeeeee", width: 20, height: 20 }}
                          />
                        </IconButton>
                      </div>
                      <div
                        className={classes.drop_down_logout}
                        onClick={handleLogout}
                      >
                        Log out
                      </div>
                    </div>
                  </div>
                </Popover>
                {/* <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem>{currentUser.email}</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu> */}
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  style={{ textDecoration: "none" }}
                  onClick={handleClose}
                >
                  <Button variant="contained" className={classes.login_button}>
                    Log In
                  </Button>
                </Link>

                <Link
                  to="/signup"
                  style={{ textDecoration: "none" }}
                  onClick={handleClose}
                >
                  <Button variant="contained" className={classes.signup_button}>
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
