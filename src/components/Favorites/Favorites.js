import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Footer } from "../Footer/Footer";
import { useAuth } from "../../contexts/AuthContext";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Grid from "../Grid";
import Thumb from "../Thumb";
import { Fade, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { isPersistedState } from "../../helpers";

export const Favorites = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [votedMovies, setVotedMovies] = useState([]);
  let favoriteMovies = [];

  const [changeBackgroundOnHover, setChangeBackgroundOnHover] = useState({
    isHovered: {},
  });

  const userFavoriteMovies = async () => {
    const events = await firebase.firestore().collection(currentUser.email);
    events.get().then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setIsLoading(false);
      setVotedMovies(tempDoc);
    });
  };

  userFavoriteMovies();

  for (let i = 0; i < votedMovies.length; i++) {
    if (votedMovies[i].likeState.alreadyLiked) {
      favoriteMovies.push(votedMovies[i]);
    }
  }

  const handleMouseEnter = (index) => {
    setChangeBackgroundOnHover((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: true } };
    });
  };

  const handleMouseLeave = (index) => {
    setChangeBackgroundOnHover((prevState) => {
      return { isHovered: { ...prevState.isHovered, [index]: false } };
    });
  };

  const { isHovered } = changeBackgroundOnHover;

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        {isLoading && <Spinner />}
        {!isLoading && (
          <Grid header="Favorites">
            {favoriteMovies.length > 0 ? (
              favoriteMovies.map((item) => (
                <div key={item.id} style={{ display: "block" }}>
                  <div
                    style={{
                      position: "relative",
                    }}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                  >
                    <Thumb image={item.image} height="350px" />
                    <Link to={`/${item.id}`}>
                      <Fade in={isHovered[item.id]} timeout={400}>
                        <div
                          style={{
                            position: "absolute",
                            transform: "translateX(-50%)",
                            top: "0",
                            left: "120px",
                            width: "270px",
                            cursor: "pointer",
                            height: "100%",
                            backgroundColor: "rgba(255,255,255,0.4)",
                          }}
                        />
                      </Fade>
                    </Link>
                  </div>
                  <div>
                    <Typography>{item.title}</Typography>
                  </div>
                </div>
              ))
            ) : (
              <div>Nothing to show</div>
            )}
          </Grid>
        )}
      </div>

      <Footer />
    </>
  );
};
