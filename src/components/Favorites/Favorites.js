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

export const Favorites = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [votedMovies, setVotedMovies] = useState([]);
  let favoriteMovies = [];

  const [changeBackgroundOnHover, setChangeBackgroundOnHover] = useState({
    isHovered: {},
  });

  useEffect(() => {
    async function fetchData() {
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

      await userFavoriteMovies();
    }
    fetchData();
  }, [currentUser.email, votedMovies]);

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
      <Navbar showAllMoviesMode="false" />
      <div style={{ marginTop: "100px", overflowX: "hidden" }}>
        {isLoading && (
          <div style={{ marginTop: "200px" }}>
            <Spinner />
          </div>
        )}
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
                    <Link to={`/${item.id}`}>
                      <Thumb image={item.image} height="350px" width="100%" />
                      <Fade in={isHovered[item.id]} timeout={400}>
                        <div
                          style={{
                            position: "absolute",
                            transform: "translateX(-50%)",
                            top: "0",
                            left: "170px",
                            width: "400px",
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
