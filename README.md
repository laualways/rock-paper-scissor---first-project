# 🪨✂️📄 Rock, Paper, Scissors Game

An algorithmic and fully modular implementation of the classic Rock, Paper, Scissors game, built entirely with vanilla JavaScript. This project focuses on mastering execution flows, algorithmic conditional statement structures, and dynamic data state tracking.

Developed as part of **The Odin Project** curriculum.

---

## 🧩 Tech Stack & Features

* **Core Engine:** ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black) (ES6+ Logic, Loops, Functions, Conditional States)
* **Structure:** ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
* **Version Control:** ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white)

---

## 🧠 Architectural Pseudocode

The application functions on a strictly managed turn-based computational system:

```text
PLAYERS: 1 Human Player vs. 1 Computer Opponent (Randomized Generation)

GAME REPETITION PROCESS (Turn-based Loop):
├── START ROUND (Repeats until a threshold of 5 points is attained)
│   ├── Human provides string input ("ROCK", "PAPER", or "SCISSORS") via an interactive prompt.
│   └── Computer determines choice via an automated pseudo-random algorithm.
│
├── RULES EVALUATION CONTEXT:
│   ├── IF Human is ROCK and Computer is SCISSORS      -> Round increment assigned to Human.
│   ├── ELSE IF Human is PAPER and Computer is SCISSORS -> Round increment assigned to Computer.
│   ├── ELSE IF Human is PAPER and Computer is ROCK     -> Round increment assigned to Human.
│   ├── [... Evaluation applies for all remaining logic matrices ...]
│   └── IF String values match perfectly               -> Tie declared, score state remains unmodified.
│
└── SCORE & TERMINATION MANAGEMENT:
    └── Execution loop interrupts immediately when one player reaches 5 points.
        ├── IF Human Score == 5 -> Human designated as Game Winner 🏆
        └── ELSE                -> Computer designated as Game Winner 🤖