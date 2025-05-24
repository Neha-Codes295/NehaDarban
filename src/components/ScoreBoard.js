import React from "react";

export default function ScoreBoard({ scores }) {
  return (
    <div className="scoreboard">
      <p>🏆 Scoreboard:</p>
      <p>Player 1: {scores.player1}</p>
      <p>Player 2: {scores.player2}</p>
    </div>
  );
}
