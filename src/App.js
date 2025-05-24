import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import EmojiSelector from "./components/EmojiSelector";
import Leaderboard from "./components/Leaderboard";
import Help from "./components/Help";
import DarkModeToggle from "./components/DarkModeToggle";
import confetti from "./confetti";

const emojiThemes = {
  Animals: ["🐶", "🐱", "🐭", "🐰"],
  Food: ["🍕", "🍟", "🍔", "🍩"],
  Sports: ["⚽️", "🏀", "🏈", "🎾"],
  Faces: ["😃", "😎", "🤓", "🥳"],
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [themes, setThemes] = useState({});
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const handleThemeSelect = (p1, p2) => {
    setThemes({ 1: p1, 2: p2 });
    setGameStarted(true);
  };

  const handleWin = (player) => {
    confetti();
    setWinner(player);
  };

  const resetGame = () => {
    setWinner(null);
    setGameStarted(false);
  };

  return (
    <div className="app">
      <h1>Blink Tac Toe</h1>
      <DarkModeToggle toggle={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      {!gameStarted ? (
        <EmojiSelector emojiThemes={emojiThemes} onStart={handleThemeSelect} />
      ) : (
        <>
          <Board
            themes={themes}
            onWin={handleWin}
            disabled={!!winner}
          />
          {winner && (
            <>
              <h2>Player {winner} Wins!</h2>
              <button onClick={resetGame}>Play Again</button>
            </>
          )}
        </>
      )}
      <Leaderboard />
      <Help />
    </div>
  );
}
  