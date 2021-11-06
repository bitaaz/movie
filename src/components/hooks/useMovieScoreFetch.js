import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const retrieveMovieScoreData = async (movieId) => {
  const movieScoreDoc = doc(db, "moviesScores/" + movieId);
  const prevScoreData = await getDoc(movieScoreDoc);
  if (prevScoreData.exists()) {
    const scoreData = await prevScoreData.data();
    let scorePercent;
    if (scoreData.movieScore.total_votes > 0) {
      scorePercent =
        Math.round(
          ((scoreData.movieScore.likes * 100) /
            scoreData.movieScore.total_votes) *
            100
        ) / 100;
    } else {
      scorePercent = 0;
    }
    return scorePercent;
  }
  return 0;
};
