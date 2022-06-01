import { useState } from "react";
import "./tic-tac-toe.scss";

const computerTurn = (gameBoxes: string[]) => {
  if (!gameBoxes.some((val) => val === "")) {
    return gameBoxes;
  }
  let game = [...gameBoxes];
  let found = false;
  while (!found) {
    let randomIndex = Math.floor(Math.random() * game.length);
    let randomValue = game[randomIndex];
    if (randomValue === "") {
      game[randomIndex] = "O";
      found = true;
    }
  }
  return game;
};
export const gameWinner = (gameBoxes: string[], val: string): boolean => {
  if (val === gameBoxes[0] && val === gameBoxes[1] && val === gameBoxes[2]) {
    return true;
  }
  if (val === gameBoxes[3] && val === gameBoxes[4] && val === gameBoxes[5]) {
    return true;
  }
  if (val === gameBoxes[6] && val === gameBoxes[7] && val === gameBoxes[8]) {
    return true;
  }

  if (val === gameBoxes[0] && val === gameBoxes[3] && val === gameBoxes[6]) {
    return true;
  }
  if (val === gameBoxes[1] && val === gameBoxes[4] && val === gameBoxes[7]) {
    return true;
  }
  if (val === gameBoxes[2] && val === gameBoxes[5] && val === gameBoxes[8]) {
    return true;
  }
  if (val === gameBoxes[0] && val === gameBoxes[4] && val === gameBoxes[8]) {
    return true;
  }
  if (val === gameBoxes[2] && val === gameBoxes[4] && val === gameBoxes[6]) {
    return true;
  }
  return false;
};

export function TicTacToe() {
  const [gameBoxes, setGameBoxes] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const handleClick = (index: number) => {
    let newBoxes = [...gameBoxes];
    newBoxes[index] = "X";
    const areYouAWinner = gameWinner(gameBoxes, "X");
    if (!areYouAWinner) {
      newBoxes = computerTurn(newBoxes);
    }
    setGameBoxes(newBoxes);
  };

  const handleReset = () => {
    setGameBoxes(["", "", "", "", "", "", "", "", ""]);
  };

  const areYouAWinner = gameWinner(gameBoxes, "X");
  const areYouALoser = gameWinner(gameBoxes, "O");
  return (
    <div className="tic-tac-toe outerGameContainer">
      <div className="innerGameContainer">
        <h2 className="ticTacToe">Tic Tac Toe</h2>
        <div className="gameBoxes">
          {gameBoxes.map((element, index) => (
            <button
              className="gameButtons"
              onClick={() => handleClick(index)}
              disabled={element !== ""}
            >
              {element}
            </button>
          ))}
        </div>
        <div>
          {areYouAWinner ? "You Win" : ""}
          {areYouALoser ? "You Lose" : ""}
        </div>
        <div className="reset">
          <button
            className="resetButton"
            type="button"
            onClick={() => handleReset()}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

// game starts on block fill
// reset button
// swap x and o between players
// random block for computer starting with x
