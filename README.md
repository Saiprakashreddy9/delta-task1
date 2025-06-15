# Ricochet Rumble 🔫🛡️

Ricochet Rumble is a grid-based, two-player strategy game implemented using **HTML**, **CSS**, and **JavaScript**. Players take turns to move their unique game pieces, fire bullets, and attempt to defeat their opponent within a time limit.

## 🎮 Gameplay Overview

- **Grid**: The game board is an 8x8 grid.
- **Teams**: Two teams — Red and Blue.
- **Objective**: Strategically position and move pieces to shoot down enemy units using cannons.

## 🧩 Game Pieces

Each piece has a shape and function:
- 🔺 **Triangle**: Reflects bullets at angles.
- 🔷 **Line**: May reflect or interact with bullets linearly.
- 🛡️ **Tank**: Can absorb bullets.
- 🧱 **Titan**: Special tank with added power.
- 🧨 **Canon**: Shoots bullets in the direction of the enemy.

## 🕹️ Controls

- Click on a piece to select it.
- Highlighted yellow squares indicate possible moves.
- Click on a highlighted square to move the piece there.
- Use **Pause** to pause the game timer.
- Use **Restart** to reload the board and reset all states.

## ⏱️ Turn and Timer Logic

- Each player has **60 seconds** per turn.
- Once the timer runs out, the current player **loses automatically**.
- After each move, the timer resets and control passes to the opponent.

## 🧠 Technologies Used

- **HTML5** for markup
- **CSS3** for styling and layout
- **Vanilla JavaScript** for interactivity, logic, and game flow

## 📁 Project Structure
project/
│
├── index.html # Main HTML file
├── style.css # All CSS styles
├── script.js # Main game logic and interactivity
└── README.md # Game documentation

## 🚀 How to Run

1. Clone or download the repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, etc.).
3. Play the game — no additional setup or server required!

```bash
git clone https://github.com/your-username/ricochet-rumble.git
cd ricochet-rumble
open index.html

## 👨‍💻 Author

**Sai Prakash Reddy** – Student developer, NIT Trichy

---

## 📝 License

This project is open source and free to use.
