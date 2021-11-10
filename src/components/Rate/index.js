import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import { ThumbDownAlt, ThumbUpAlt } from "@material-ui/icons";
import { db } from "../../firebase";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";

const Rate = ({ movie, currentUser }) => {
  const userId = currentUser ? currentUser.email : null;
  const [voted, setVoted] = useState(false);
  const [likeState, setLikeState] = useState({
    alreadyLiked: false,
    alreadyDisliked: false,
  });
  const [movieVoteState, setMovieVoteState] = useState({
    likes: 0,
    total_votes: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const retrieveUserVoteData = async () => {
        const voteInfoDoc = doc(db, userId + "/" + movie.id);
        const prevVoteData = await getDoc(voteInfoDoc);
        if (prevVoteData.exists()) {
          const voteData = await prevVoteData.data();
          setLikeState({
            alreadyLiked: voteData.likeState.alreadyLiked,
            alreadyDisliked: voteData.likeState.alreadyDisliked,
          });
          // console.log(voteData);
        }
      };
      await retrieveUserVoteData();
    }
    fetchData();
  }, [movie.id, userId]);

  useEffect(() => {
    async function fetchData() {
      const retrieveMovieScoreData = async () => {
        const movieScoreDoc = doc(db, "moviesScores/" + movie.id);
        const prevScoreData = await getDoc(movieScoreDoc);
        if (prevScoreData.exists()) {
          const scoreData = await prevScoreData.data();
          setMovieVoteState({
            likes: scoreData.movieScore.likes,
            total_votes: scoreData.movieScore.total_votes,
          });

          // console.log(scoreData);
        }
      };
      await retrieveMovieScoreData();
    }
    fetchData();
  }, [movie.id]);

  useEffect(() => {
    const addUserVoteData = () => {
      const data = {
        title: movie.title,
        image: movie.poster_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
          : NoImage,
        likeState: likeState,
      };
      const voteInfoDoc = doc(db, userId + "/" + movie.id);
      if (!(!data.likeState.alreadyLiked && !data.likeState.alreadyDisliked)) {
        setDoc(voteInfoDoc, data);
      } else {
        deleteDoc(voteInfoDoc);
      }
    };

    const addMovieScore = () => {
      const data = {
        movieId: movie.id,
        movieScore: movieVoteState,
      };

      const movieScoreDoc = doc(db, "moviesScores/" + movie.id);
      if (!(data.movieScore.likes === 0 && data.movieScore.total_votes === 0)) {
        setDoc(movieScoreDoc, data);
      } else {
        deleteDoc(movieScoreDoc);
      }
    };
    if (voted) {
      addUserVoteData();
      addMovieScore();
    }
  }, [
    likeState,
    movie.id,
    movie.poster_path,
    movie.title,
    movieVoteState,
    userId,
    voted,
  ]);

  const handleLike = () => {
    setVoted(true);
    if (!likeState.alreadyDisliked) {
      if (!likeState.alreadyLiked) {
        setLikeState({
          alreadyLiked: true,
          alreadyDisliked: likeState.alreadyDisliked,
        });
        setMovieVoteState({
          likes: movieVoteState.likes + 1,
          total_votes: movieVoteState.total_votes + 1,
        });
      } else {
        setLikeState({
          alreadyLiked: false,
          alreadyDisliked: likeState.alreadyDisliked,
        });
        setMovieVoteState({
          likes: movieVoteState.likes - 1,
          total_votes: movieVoteState.total_votes - 1,
        });
      }
    } else {
      setLikeState({
        alreadyLiked: true,
        alreadyDisliked: false,
      });
      setMovieVoteState({
        likes: movieVoteState.likes + 1,
        total_votes: movieVoteState.total_votes,
      });
    }
  };
  const handleDislike = () => {
    setVoted(true);
    if (!likeState.alreadyLiked) {
      if (!likeState.alreadyDisliked) {
        setLikeState({
          alreadyDisliked: true,
          alreadyLiked: likeState.alreadyDisliked,
        });
        setMovieVoteState({
          likes: movieVoteState.likes,
          total_votes: movieVoteState.total_votes + 1,
        });
      } else {
        setLikeState({
          alreadyDisliked: false,
          alreadyLiked: likeState.alreadyLiked,
        });
        setMovieVoteState({
          likes: movieVoteState.likes,
          total_votes: movieVoteState.total_votes - 1,
        });
      }
    } else {
      setLikeState({
        alreadyLiked: false,
        alreadyDisliked: true,
      });
      setMovieVoteState({
        likes: movieVoteState.likes - 1,
        total_votes: movieVoteState.total_votes,
      });
    }
  };

  return (
    <div>
      <div style={{ marginTop: "50px", flexGrow: "0.5" }}>
        <h3>LIKES</h3>
        <p>
          {movieVoteState.total_votes > 0
            ? Math.round(
                ((movieVoteState.likes * 100) / movieVoteState.total_votes) *
                  100
              ) / 100
            : 0}
          % ({movieVoteState.total_votes} votes){" "}
        </p>
      </div>
      {currentUser && (
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          <IconButton
            style={{
              color: likeState.alreadyLiked ? "green" : "black",
              backgroundColor: "white",
              width: "35px",
              height: "35px",
              marginRight: "20px",
            }}
            onClick={handleLike}
          >
            <ThumbUpAlt style={{ width: "25px", height: "25px" }} />
          </IconButton>
          <IconButton
            style={{
              color: likeState.alreadyDisliked ? "red" : "black",
              backgroundColor: "white",
              width: "35px",
              height: "35px",
            }}
            onClick={handleDislike}
          >
            <ThumbDownAlt style={{ width: "25px", height: "25px" }} />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Rate;
