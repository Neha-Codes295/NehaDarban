import React from "react";

export default function Help() {
  return (
    <div>
      <h3>Help</h3>
      <ul>
        <li>Each player selects an emoji category</li>
        <li>Only 3 emojis per player allowed on the board</li>
        <li>4th emoji removes oldest one</li>
        <li>Win by placing 3 emojis in a row</li>
      </ul>
    </div>
  );
}
