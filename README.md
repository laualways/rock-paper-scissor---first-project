# 🪨✂️📄 Rock, Paper, Scissors Game

An interactive and modular implementation of the classic Rock, Paper, Scissors game, built with vanilla JavaScript, HTML, and CSS. This project focuses on DOM manipulation, event handling, and dynamic state tracking within a browser-based user interface.

Developed as part of **The Odin Project** curriculum.

---

## 🧩 Tech Stack & Features

* **Core Engine:** ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black) (ES6+ Logic, Event Listeners, State Management)
* **Structure:** ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
* **Version Control:** ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white)

---

## 🧠 Architectural Process

The application functions on an interactive, event-driven system:

```text
PLAYERS: 1 Human Player vs. 1 Computer Opponent (Randomized Generation)

INTERACTIVE FLOW:
├── UI INTERACTION
│   ├── Human player clicks a choice (Rock, Paper, or Scissors) via custom buttons.
│   └── Computer determines choice via an automated pseudo-random algorithm.
│
├── RULES EVALUATION CONTEXT:
│   ├── The logic compares human and computer inputs.
│   ├── Scores are updated dynamically in the DOM based on the result.
│   └── Ties result in no score changes.
│
└── GAME MANAGEMENT:
    ├── Score monitoring: The game continues until a player reaches 5 points.
    ├── Termination: At 5 points, all input buttons are disabled to end the round.
    └── Reset: A dedicated "Reset Game" function clears the state and enables inputs for a new session.