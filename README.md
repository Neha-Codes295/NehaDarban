# Blink Tac Toe 🎮

A twist on classic Tic Tac Toe with emojis and a disappearing rule.

## 🔧 Tech Stack
- React.js (CRA)
- HTML/CSS (no external libraries)

## 🧠 Rules Implemented
- Emoji categories (Animals, Food, Sports)
- Each player gets random emoji from their category
- Only 3 emojis allowed on board per player (FIFO vanishing rule)
- Cannot place 4th emoji on oldest cell
- Player wins by making 3 in a row
- No draws (max 6 emojis only)

## ⚙️ Vanishing Logic
Each player has a queue of last 3 positions. On 4th move, oldest is removed, unless trying to overwrite it.

## ✅ Features
- Turn indicator
- Winning display + Play again
- Help section for new players

## 🚀 Improvements (if more time):
- Sound FX & animations
- Emoji category custom picker
- Scoreboard for multiple rounds
- Highlight winning emojis

## 🔗 Live Demo
[https://neha-darban.vercel.app/](https://your-deploy-link.vercel.app)



## 🧠 Author

👩‍💻 Neha – [@yourgithub](https://github.com/Neha-Codes295/NehaDarban)