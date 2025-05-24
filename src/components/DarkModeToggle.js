import React from "react";

export default function DarkModeToggle({ toggle, darkMode }) {
  return (
    <button onClick={toggle}>
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
