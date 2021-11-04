import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import { ThumbDownAlt, ThumbUpAlt } from "@material-ui/icons";
import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Rate = ({ movieId, email }) => {
  const voteId = email + movieId;
  const [voted, setVoted] = useState(false);
  const [likeState, setLikeState] = useState({
    alreadyLiked: false,
    alreadyDisliked: false,
  });
  const [movieVoteState, setMovieVoteState] = useState({
    likes: 0,
    dislikes: 0,
    total_votes: 0,
  });

  const retrieveUserVoteData = async () => {
    const voteInfoDoc = doc(db, "usersVote/" + voteId);
    const prevVoteData = await getDoc(voteInfoDoc);
    if (prevVoteData.exists()) {
      const voteData = await prevVoteData.data();
      setLikeState({
        alreadyLiked: voteData.likeState.alreadyLiked,
        alreadyDisliked: voteData.likeState.alreadyDisliked,
      });

      console.log(voteData);
    }
  };

  const retrieveMovieScoreData = async () => {
    const movieScoreDoc = doc(db, "moviesScores/" + movieId);
    const prevScoreData = await getDoc(movieScoreDoc);
    if (prevScoreData.exists()) {
      const scoreData = await prevScoreData.data();
      setMovieVoteState({
        likes: scoreData.movieScore.likes,
        dislikes: scoreData.movieScore.dislikes,
        total_votes: scoreData.movieScore.total_votes,
      });

      console.log(scoreData);
    }
  };

  useEffect(async () => {
    await retrieveUserVoteData();
  }, []);

  useEffect(async () => {
    await retrieveMovieScoreData();
  }, []);

  useEffect(() => {
    if (voted) {
      addUserVoteData();
      addMovieScore();
    }
  }, [likeState]);

  const addUserVoteData = () => {
    const data = {
      voteId: voteId,
      likeState: likeState,
    };
    const voteInfoDoc = doc(db, "usersVote/" + voteId);
    setDoc(voteInfoDoc, data);
  };

  const addMovieScore = () => {
    const data = {
      movieId: movieId,
      movieScore: movieVoteState,
    };

    const movieScoreDoc = doc(db, "moviesScores/" + movieId);
    setDoc(movieScoreDoc, data);
  };

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
          dislikes: movieVoteState.dislikes,
          total_votes: movieVoteState.total_votes + 1,
        });
      } else {
        setLikeState({
          alreadyLiked: false,
          alreadyDisliked: likeState.alreadyDisliked,
        });
        setMovieVoteState({
          likes: movieVoteState.likes - 1,
          dislikes: movieVoteState.dislikes,
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
        dislikes: movieVoteState.dislikes - 1,
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
          dislikes: movieVoteState.likes + 1,
          likes: movieVoteState.likes,
          total_votes: movieVoteState.total_votes + 1,
        });
      } else {
        setLikeState({
          alreadyDisliked: false,
          alreadyLiked: likeState.alreadyLiked,
        });
        setMovieVoteState({
          dislikes: movieVoteState.dislikes - 1,
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
        dislikes: movieVoteState.dislikes + 1,
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
            ? parseFloat(
                (movieVoteState.likes * 100) / movieVoteState.total_votes
              ).toPrecision(2)
            : 0}
          % ({movieVoteState.total_votes} votes){" "}
        </p>
      </div>
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
    </div>
  );
};

export default Rate;
