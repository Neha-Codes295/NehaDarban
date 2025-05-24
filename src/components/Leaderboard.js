import React, { useEffect, useState } from "react";

export default function Leaderboard() {
  const [scores, setScores] = useState({ 1: 0, 2: 0 });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blink-leaderboard"));
    if (saved) setScores(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("blink-leaderboard", JSON.stringify(scores));
  }, [scores]);

  return (
    <div>
      <h3>Leaderboard</h3>
      <p>Player 1: {scores[1]}</p>
      <p>Player 2: {scores[2]}</p>
    </div>
  );
}
