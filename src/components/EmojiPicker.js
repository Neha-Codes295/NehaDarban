import React, { useState } from "react";

const emojiCategories = {
  Animals: ["🐶", "🐱", "🐵", "🐰"],
  Food: ["🍕", "🍟", "🍔", "🍩"],
  Sports: ["⚽️", "🏀", "🏈", "🎾"],
};

export default function EmojiPicker({ onStart }) {
  const [p1Category, setP1Category] = useState("Animals");
  const [p2Category, setP2Category] = useState("Food");

  return (
    <div className="emoji-picker">
      <h2>Select Emoji Categories</h2>
      <div>
        <label>Player 1:</label>
        <select value={p1Category} onChange={(e) => setP1Category(e.target.value)}>
          {Object.keys(emojiCategories).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Player 2:</label>
        <select value={p2Category} onChange={(e) => setP2Category(e.target.value)}>
          {Object.keys(emojiCategories).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <button onClick={() => onStart(emojiCategories[p1Category], emojiCategories[p2Category])}>
        Start Game
      </button>
    </div>
  );
}
