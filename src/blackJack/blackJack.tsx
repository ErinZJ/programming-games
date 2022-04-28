import React from "react";
import { useEffect, useState } from "react";
import {
  cardsDealt,
  isGameOver,
  gameResults,
  suitesAndValues,
  suitsToUnicode,
} from "./cardFunctions";
import { Card, Rank } from "./cardInterfaces";
const displayCard = (suit:string, rank:Rank)=>{
 return <div className={`card rank-${rank} ${suit}`}>
           <span className="rank">{rank}</span>
           <span className="suit">{suitsToUnicode(suit,rank)}</span>
         </div>;
  }
export function BlackJack() {
  const [userHasHold, setUserHasHold] = useState(false);
  const [userCards, setUserCards] = useState<Card[]>([]);
  const [houseCards, setHouseCards] = useState<Card[]>([]);

  useEffect(() => {
    handleReset();
  }, []);

  const handleClick = () => {
    const result = cardsDealt(suitesAndValues);
    setUserCards([...userCards, result]);
  };
  const handleClick2 = () => {
    const result = cardsDealt(suitesAndValues);
    setHouseCards([...houseCards, result]);
  };
  const handleReset = () => {
    setUserCards([cardsDealt(suitesAndValues), cardsDealt(suitesAndValues)]);
    setHouseCards([cardsDealt(suitesAndValues), cardsDealt(suitesAndValues)]);
    setUserHasHold(false);
  };
  const handleHold = () => {
    setUserHasHold(true);
  };
  const totalCards = (userCards: Card[]) => {
    let sumOfCards = 0;
    for (let index = 0; index < userCards.length; index++) {
      const element = userCards[index];
      sumOfCards = sumOfCards + element.value;
    }
    return sumOfCards;
  };

  const sumOfUserCards = totalCards(userCards);
  const canUserPlay = !(sumOfUserCards >= 21) && !userHasHold;
  const sumOfHouseCards = totalCards(houseCards);
  const canHousePlay = sumOfHouseCards <= 16;

  const isGame = isGameOver(userHasHold, sumOfUserCards, sumOfHouseCards);

  return (
    <div>
      <button
        type="button"
        onClick={() => handleClick()}
        disabled={!canUserPlay}
      >
        userCards
      </button>
      {totalCards(userCards)}
      <div>
        <button type="button" onClick={() => handleHold()}>
          Hold
        </button>
      </div>
      <div className="playingCards faceImages">
      {userCards.map((i) => {
        return displayCard(i.suit, i.rank)
      })}</div>

      <button
        type="button"
        onClick={() => handleClick2()}
        disabled={!canHousePlay}
      >
        houseCards
      </button>
      {totalCards(houseCards)}
    
      <div className="playingCards faceImages">
          {houseCards.map((i) => {
        return displayCard(i.suit, i.rank)
      })}</div>
      {suitesAndValues.length}
      <button type="button" onClick={() => handleReset()}>
        Reset
      </button>
     
      <div>{isGame ? "Game Over" :false}</div>
      <div>{isGame && gameResults(sumOfHouseCards, sumOfUserCards)}</div>
    </div>
  );
}

// game over
//if the player has hold and the house has more than 17
// if the player is bust
//if the player is has less than the house and the player is on hold.
