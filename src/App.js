import React, { useState } from "react";
import "./App.css";
import EmojiPicker from "./components/EmojiPicker";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

export default function App() {
  const [playerEmojis, setPlayerEmojis] = useState({ player1: [], player2: [] });
  const [gameStarted, setGameStarted] = useState(false);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  const handleStartGame = (p1, p2) => {
    setPlayerEmojis({ player1: p1, player2: p2 });
    setGameStarted(true);
  };

  const handleGameWon = (winner) => {
    setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
  };

  return (
    <div className="app-container">
      <h1>Blink Tac Toe 🎮</h1>
      {!gameStarted ? (
        <EmojiPicker onStart={handleStartGame} />
      ) : (
        <>
          <ScoreBoard scores={scores} />
          <GameBoard
            playerEmojis={playerEmojis}
            onGameWon={handleGameWon}
            onRestart={() => setGameStarted(false)}
          />
        </>
      )}
    </div>
  );
}
