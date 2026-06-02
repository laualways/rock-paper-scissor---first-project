Rock-Paper-Scissors --- First Project

PSEUDOCODE:
PLAYERS: 1 human vs 1 computer (random).
The game works on turns inside a loop. 

START ROUND (This repeats until someone reaches 5 points):
1) Human types the choice ("ROCK", "PAPER", or "SCISSORS") via a prompt.
2) Computer makes a choice randomly.

RULES: 
- IF human is ROCK and computer is SCISSORS -> point to human.
- ELSE IF human is PAPER and computer is SCISSORS -> point to computer.
- ELSE IF human is PAPER and computer is ROCK -> point to human.
- (And all the other combinations...)
- IF the values are the same -> nobody gets the point.

SCORE & WINNER:
- The game stops when one of the players reaches 5 points.
- IF human Score is 5 -> Human wins the game! 🏆
- ELSE -> Computer wins the game! 🤖