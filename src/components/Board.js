import React, { useState } from "react";

export default function EmojiSelector({ emojiThemes, onStart }) {
  const [p1, setP1] = useState("Animals");
  const [p2, setP2] = useState("Food");

  return (
    <div>
      <h3>Select Emoji Categories</h3>
      <label>Player 1:
        <select value={p1} onChange={(e) => setP1(e.target.value)}>
          {Object.keys(emojiThemes).map(t => <option key={t}>{t}</option>)}
        </select>
        <div className="theme-preview">
          {emojiThemes[p1].map(e => <span key={e}>{e}</span>)}
        </div>
      </label>
      <label>Player 2:
        <select value={p2} onChange={(e) => setP2(e.target.value)}>
          {Object.keys(emojiThemes).map(t => <option key={t}>{t}</option>)}
        </select>
        <div className="theme-preview">
          {emojiThemes[p2].map(e => <span key={e}>{e}</span>)}
        </div>
      </label>
      <br />
      <button onClick={() => onStart(p1, p2)}>Start Game</button>
    </div>
  );
}
