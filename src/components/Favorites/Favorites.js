import React, { useState } from "react";
import Navbar from "../Navbar";
import { Footer } from "../Footer/Footer";
import { useAuth } from "../../contexts/AuthContext";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Grid from "../Grid";
import Thumb from "../Thumb";
import { Typography } from "@material-ui/core";

export const Favorites = () => {
  const { currentUser } = useAuth();
  const [votedMovies, setVotedMovies] = useState([]);
  let favoriteMovies = [];

  const userFavoriteMovies = async () => {
    const events = await firebase.firestore().collection(currentUser.email);
    events.get().then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { ...doc.data() };
      });
      setVotedMovies(tempDoc);
    });
  };

  userFavoriteMovies();

  for (let i = 0; i < votedMovies.length; i++) {
    if (votedMovies[i].likeState.alreadyLiked) {
      favoriteMovies.push(votedMovies[i]);
    }
  }

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <Grid header="Favorites">
          {favoriteMovies.length > 0 ? (
            favoriteMovies.map((item) => (
              <div style={{ display: "block" }}>
                <Thumb image={item.image} height="350px" />
                <Typography>{item.title}</Typography>
              </div>
            ))
          ) : (
            <div>Nothing to show</div>
          )}
        </Grid>
      </div>

      <Footer />
    </>
  );
};
