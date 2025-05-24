import React, { useState } from "react";
import { playSound } from "../utils/sound";

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const getRandomEmoji = (list) => list[Math.floor(Math.random() * list.length)];

export default function GameBoard({ playerEmojis, onGameWon, onRestart }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("player1");
  const [moves, setMoves] = useState({ player1: [], player2: [] });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const placeEmoji = (index) => {
    if (board[index] || gameOver) return;

    const emoji = getRandomEmoji(playerEmojis[turn]);
    const newBoard = [...board];
    newBoard[index] = { player: turn, emoji };
    playSound("place");
    setBoard(newBoard);

    const newMoves = { ...moves };
    newMoves[turn].push({ index, emoji });

    if (newMoves[turn].length > 3) {
      const removed = newMoves[turn].shift();
      newBoard[removed.index] = null;
    }

    setMoves(newMoves);
    checkWinner(newBoard, turn);
    setTurn(turn === "player1" ? "player2" : "player1");
  };

  const checkWinner = (board, player) => {
    const positions = board
      .map((cell, i) => (cell && cell.player === player ? i : null))
      .filter((i) => i !== null);

    const won = winningCombos.some((combo) => combo.every((i) => positions.includes(i)));

    if (won) {
      setGameOver(true);
      setWinner(player);
      playSound("win");
      onGameWon(player);
    }
  };

  return (
    <div className="game-container">
      <h3>{gameOver ? `${winner} wins! 🥳` : `Turn: ${turn}`}</h3>
      <div className="board">
        {board.map((cell, i) => (
          <div
            key={i}
            className={`cell ${cell ? "filled" : ""}`}
            onClick={() => placeEmoji(i)}
          >
            {cell && <span className="emoji">{cell.emoji}</span>}
          </div>
        ))}
      </div>
      {gameOver && (
        <button className="restart" onClick={onRestart}>
          Play Again
        </button>
      )}
    </div>
  );
}
