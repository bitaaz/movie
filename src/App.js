import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
// import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import FirebaseLogin from "./components/FirebaseLogin/FirebaseLogin";

//style
import { GlobalStyle } from "./GlobalStyle";

import UserProvider from "./context";
import AuthProvider from "./contexts/AuthContext";
import { AuthPrivateRoute, PrivateRoute } from "./PrivateRoute";
import { ShowAllMovies } from "./components/ShowAllMovies";

function App() {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/:movieId" element={<Movie />} />
            <Route path="/*/*" element={<NotFound />} />
            <Route path="/see_all" element={<NotFound />} />
            {/*<Route path="/login" element={<FirebaseLogin />} />*/}
            <AuthPrivateRoute path="/login" element={<FirebaseLogin />} />
            {/*<Route path="/signup" element={<Signup />} />*/}
            <AuthPrivateRoute path="/signup" element={<Signup />} />
            {/*<Route path="/dashboard"  element={<Dashboard/>} />;*/}
            <PrivateRoute path="/dashboard" element={<Dashboard />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/see_all/:title" element={<ShowAllMovies />} />
          </Routes>
          ;
          <GlobalStyle />
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
