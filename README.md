# Snake Demo

A vanilla HTML/CSS/JS Snake game designed as a **teaching tool for game design**. Each feature lives behind a toggle, so you can turn mechanics on and off to see how they affect gameplay.

Open `index.html` in any browser to play.

## Game Modes

| Mode        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Classic     | Standard Snake. Timer counts up, no time limit. Game over on collision or when the board is completely filled.                                                                                                                                                                                                                                                                                                                             |
| Time Trial  | Race against the clock. Timer counts down from 2:00. Game over when time runs out, on collision, or when the board is completely filled. All Classic rules apply.                                                                                                                                                                                                                                                                          |
| Constrictor | Food is eaten by enclosure, not head collision. Snake auto-grows to length 15 at start, then grows by 1 on each enclosure eat. Self-collision enters an `ignored` state (snake freezes, waits for a safe direction). Head passing over food poofs it away (no score/growth). Bonus food also enclosure-only and shrinks the snake (halved, minimum 15). All Classic rules apply except self-collision uses `ignored` instead of game over. |

## Togglable Features

Checkboxes in the UI control which mechanics are active. The game is destroyed and remounted whenever a toggle changes.

### Bonuses and Score

| Feature              | What it does                                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Bonus Food           | A golden diamond appears every 15 seconds. Worth 100 points, moves around, expires after 5 seconds.                         |
| Timed Bonus Food     | Bonus food spawns every 15 seconds instead of every 5 foods eaten.                                                          |
| Shrink on Bonus Food | Eating bonus food cuts the snake's length in half. In Constrictor mode, the snake shrinks down to a minimum of 15 segments. |
| Score Bonus          | A decaying bonus score (starts at 100, drops by 5/s) that adds extra points when you eat regular food.                      |

### Movement and Speed

| Feature      | What it does                                                                                         |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| Grace Period | When about to collide, the snake turns red and you have 1 second to dodge with a safe direction key. |
| Wrap Around  | Snake teleports to the opposite wall instead of dying at boundaries.                                 |
| Speed Up     | The game speeds up by 2.4 ms per food eaten (starts at 135 ms, floors at 50 ms).                     |
| Speed Boost  | Pressing the same direction key again makes the snake ~35% faster while held.                        |

### Input Handling

| Feature          | What it does                                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Input Buffer     | Queues up to 2 rapid directional inputs so they aren't lost between ticks.                                                          |
| Instant Movement | Each arrow key press moves the snake immediately instead of waiting for the next game tick. Opposite-direction presses are ignored. |

### Level Design

| Feature      | What it does                                                                                                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Static Walls | A hollow square ring of walls with openings in the center of each side. Always solid, even with wrap around.                                 |
| Worm Holes   | Black/white wormhole pair spawns every 30s (lasts 15s). Enter the black cell to teleport to the white cell. Won't spawn with ≤10 free tiles. |

## License

Public domain (CC0). See [LICENSE](LICENSE).
