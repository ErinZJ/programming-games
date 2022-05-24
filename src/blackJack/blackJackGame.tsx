import { useEffect } from "react";
import { BlackJackCards } from "./blackJackCards";
import { gameResults, suitesAndValues } from "./cardFunctions";
import { useBlackJackLogic } from "./useBlackJackLogic";
import "./blackJackGame.css";

export function BlackJack() {
  const logic = useBlackJackLogic();

  useEffect(() => {
    logic.resetGame();
  }, []);

  const handleReset = () => {
    logic.resetGame();
  };
  const handleHold = () => {
    logic.setUserHasHold(true);
  };

  return (
    <div className="container">
      <h1>BlackJack</h1>
      <div className="gameContainer">
        <div className="outerGameContainer">
          <div className="innerGameContainer" id="user">
            <h2>User</h2>
            <div className="cardContainer">
              <BlackJackCards
                canPlay={logic.canUserPlay}
                hand={logic.userHand}
                toggleHighAce={logic.toggleUserHighAce}
                dealCard={logic.dealUserCard}
              ></BlackJackCards>
              <button
                className="gameButtons"
                type="button"
                onClick={() => handleHold()}
              >
                Hold
              </button>{" "}
            </div>
          </div>
          <div className="innerGameContainer" id="house">
            <h2>House</h2>
            <div className="cardContainer">
              <BlackJackCards
                canPlay={logic.canHousePlay}
                hand={logic.houseHand}
                toggleHighAce={logic.toggleHouseHighAce}
                dealCard={logic.dealHouseCard}
              ></BlackJackCards>
            </div>
          </div>
        </div>
        <button
          className="gameButtons"
          type="button"
          onClick={() => handleReset()}
        >
          Reset
        </button>
        <div className="gameTotals" id="cardsInDeck">
          Cards Left {suitesAndValues.length}
        </div>
        <div>{logic.isGame ? "Game Over" : false}</div>
        <div>
          {logic.isGame &&
            gameResults(logic.houseHand.sumOfCards, logic.userHand.sumOfCards)}
        </div>
      </div>
    </div>
  );
}

// game over
//if the player has hold and the house has more than 17
// if the player is bust
//if the player is has less than the house and the player is on hold.
