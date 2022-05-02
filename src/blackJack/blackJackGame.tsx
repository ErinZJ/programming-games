import React from "react";
import { useEffect, useState } from "react";
import { Card, Hand, Rank } from "../shared/cardInterfaces";
import { BlackJackCards } from "./blackJackCards";
import {
  cardsDealt,
  isGameOver,
  gameResults,
  suitesAndValues,
  suitsToUnicode,
  getValueOfCard,
  checkForAce,
  totalCards,
} from "./cardFunctions";

const defaultHand: Hand = { highAce: false, cards: [], sumOfCards: 0 };
export function BlackJack() {
  const [userHasHold, setUserHasHold] = useState(false);
  const [userHand, setUserHand] = useState<Hand>({ ...defaultHand });
  const [houseHand, setHouseHand] = useState<Hand>({ ...defaultHand });

  useEffect(() => {
    handleReset();
  }, []);

  const handleReset = () => {
    const newUserCards = [
      cardsDealt(suitesAndValues),
      cardsDealt(suitesAndValues),
    ];
    setUserHand({
      ...defaultHand,
      cards: newUserCards,
      sumOfCards: totalCards(newUserCards, defaultHand.highAce),
    });
    const newHouseCards = [
      cardsDealt(suitesAndValues),
      cardsDealt(suitesAndValues),
    ];
    setHouseHand({
      ...defaultHand,
      cards: newHouseCards,
      sumOfCards: totalCards(newHouseCards, defaultHand.highAce),
    });
    setUserHasHold(false);
  };
  const handleHold = () => {
    setUserHasHold(true);
  };

  const isGame = isGameOver(
    userHasHold,
    userHand.sumOfCards,
    houseHand.sumOfCards
  );

  const canUserPlay = (sumOfCards) => !(sumOfCards >= 21) && !userHasHold;
  const canHousePlay = (sumOfCards) => sumOfCards <= 16;

  return (
    <div>
      <h2>User</h2>
      <BlackJackCards
        canPlayFn={canUserPlay}
        hand={userHand}
        setHand={setUserHand}
      ></BlackJackCards>
      <button type="button" onClick={() => handleHold()}>
        Hold
      </button>
      <h2>House</h2>
      <BlackJackCards
        canPlayFn={canHousePlay}
        hand={houseHand}
        setHand={setHouseHand}
      ></BlackJackCards>
      <button type="button" onClick={() => handleReset()}>
        Reset
      </button>

      <div>{isGame ? "Game Over" : false}</div>
      <div>
        {isGame && gameResults(houseHand.sumOfCards, userHand.sumOfCards)}
      </div>
    </div>
  );
}

// game over
//if the player has hold and the house has more than 17
// if the player is bust
//if the player is has less than the house and the player is on hold.
