import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { ThumbDownAlt, ThumbUpAlt } from "@material-ui/icons";

const Rate = () => {
  const [likeState, setLikeState] = useState({
    alreadyLiked: false,
    alreadyDisliked: false,
    likes: 0,
    dislikes: 0,
    total_votes: 0,
  });
  const handleLike = () => {
    if (!likeState.alreadyDisliked) {
      if (!likeState.alreadyLiked) {
        setLikeState({
          alreadyLiked: true,
          alreadyDisliked: likeState.alreadyDisliked,
          likes: likeState.likes + 1,
          dislikes: likeState.dislikes,
          total_votes: likeState.total_votes + 1,
        });
      } else {
        setLikeState({
          alreadyLiked: false,
          alreadyDisliked: likeState.alreadyDisliked,
          likes: likeState.likes - 1,
          dislikes: likeState.dislikes,
          total_votes: likeState.total_votes - 1,
        });
      }
    } else {
      setLikeState({
        alreadyLiked: true,
        alreadyDisliked: false,
        likes: likeState.likes + 1,
        dislikes: likeState.dislikes - 1,
        total_votes: likeState.total_votes,
      });
    }
  };
  const handleDislike = () => {
    if (!likeState.alreadyLiked) {
      if (!likeState.alreadyDisliked) {
        setLikeState({
          alreadyDisliked: true,
          alreadyLiked: likeState.alreadyDisliked,
          dislikes: likeState.likes + 1,
          likes: likeState.likes,
          total_votes: likeState.total_votes + 1,
        });
      } else {
        setLikeState({
          alreadyDisliked: false,
          alreadyLiked: likeState.alreadyLiked,
          dislikes: likeState.dislikes - 1,
          likes: likeState.likes,
          total_votes: likeState.total_votes - 1,
        });
      }
    } else {
      setLikeState({
        alreadyLiked: false,
        alreadyDisliked: true,
        likes: likeState.likes - 1,
        dislikes: likeState.dislikes + 1,
        total_votes: likeState.total_votes,
      });
    }
  };

  return (
    <div>
      <div style={{ marginTop: "50px", flexGrow: "0.5" }}>
        <h3>LIKES</h3>
        <p>
          {likeState.total_votes > 0 && likeState.dislikes < likeState.likes
            ? ((likeState.likes - likeState.dislikes) * 100) /
              likeState.total_votes
            : 0}
          % ({likeState.total_votes} votes){" "}
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
