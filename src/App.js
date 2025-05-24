import React, { useState, useEffect } from "react";
import "./App.css";

const emojiCategories = {
  Animals: ["🐶", "🐱", "🐵", "🐰"],
  Food: ["🍕", "🍟", "🍔", "🍩"],
  Sports: ["⚽️", "🏀", "🏈", "🎾"]
};

const getRandomEmoji = (category) =>
  category[Math.floor(Math.random() * category.length)];

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function App() {
  const [categoriesSelected, setCategoriesSelected] = useState(false);
  const [player1Category, setPlayer1Category] = useState("Animals");
  const [player2Category, setPlayer2Category] = useState("Food");
  const [turn, setTurn] = useState("Player 1");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState({ "Player 1": [], "Player 2": [] });
  const [winner, setWinner] = useState(null);

  const handleCategorySelect = () => {
    if (player1Category !== player2Category) {
      setCategoriesSelected(true);
    } else {
      alert("Players must choose different categories.");
    }
  };

  const handleCellClick = (index) => {
    if (winner || board[index]) return;

    const currentCategory =
      turn === "Player 1" ? emojiCategories[player1Category] : emojiCategories[player2Category];
    const emoji = getRandomEmoji(currentCategory);

    // If 3 emojis already on board for this player
    const currentHistory = [...history[turn]];
    let newBoard = [...board];

    if (currentHistory.length === 3) {
      const [oldestIndex, ...rest] = currentHistory;

      if (index === oldestIndex) {
        alert("Cannot place new emoji on top of vanishing one!");
        return;
      }

      newBoard[oldestIndex] = null;
      currentHistory.shift();
    }

    newBoard[index] = { emoji, player: turn };
    currentHistory.push(index);

    setBoard(newBoard);
    setHistory({ ...history, [turn]: currentHistory });

    checkWinner(newBoard, turn);
    setTurn(turn === "Player 1" ? "Player 2" : "Player 1");
  };

  const checkWinner = (board, currentPlayer) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        board[a] &&
        board[b] &&
        board[c] &&
        board[a].player === currentPlayer &&
        board[b].player === currentPlayer &&
        board[c].player === currentPlayer
      ) {
        setWinner(currentPlayer);
        return;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setHistory({ "Player 1": [], "Player 2": [] });
    setWinner(null);
    setTurn("Player 1");
  };

  return (
    <div className="App">
      <h1>Blink Tac Toe 🔁</h1>
      {!categoriesSelected ? (
        <div className="setup">
          <h3>Select Categories:</h3>
          <div>
            <label>Player 1: </label>
            <select value={player1Category} onChange={(e) => setPlayer1Category(e.target.value)}>
              {Object.keys(emojiCategories).map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Player 2: </label>
            <select value={player2Category} onChange={(e) => setPlayer2Category(e.target.value)}>
              {Object.keys(emojiCategories).map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <button onClick={handleCategorySelect}>Start Game</button>
        </div>
      ) : (
        <>
          <h2>{winner ? `${winner} Wins! 🥳` : `${turn}'s Turn`}</h2>
          <div className="grid">
            {board.map((cell, index) => (
              <div key={index} className="cell" onClick={() => handleCellClick(index)}>
                {cell ? cell.emoji : ""}
              </div>
            ))}
          </div>
          {winner && <button onClick={resetGame}>Play Again</button>}
          <div className="help">
            <h4>How to Play:</h4>
            <ul>
              <li>Players choose different emoji categories.</li>
              <li>Each turn gives a random emoji from the chosen category.</li>
              <li>Only 3 emojis per player allowed on the board.</li>
              <li>Oldest emoji vanishes if 4th is added.</li>
              <li>3 matching emojis in a line wins the game.</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
