import React from "react";
import { useEffect, useState } from "react";
import { Card, Rank } from "../shared/cardInterfaces";
import {
  cardsDealt,
  isGameOver,
  gameResults,
  suitesAndValues,
  suitsToUnicode,
  getValueOfCard,
  checkForAce,
} from "./cardFunctions";

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
  const [userHighAce, setUserHighAce] = useState(false);
  const [houseHighAce, setHouseHighAce] = useState(false);
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
  const handleUserToggle = ()=>{
    setUserHighAce(!userHighAce)
    
  }
  const handleHouseToggle=()=>{
    setHouseHighAce(!houseHighAce)
  }
  const totalCards = (cards: Card[],highAce:boolean) => {
    let sumOfCards = 0;
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      sumOfCards = sumOfCards + getValueOfCard(element.rank,highAce);
    }
    return sumOfCards;
  };

  const sumOfUserCards = totalCards(userCards,userHighAce);
  const canUserPlay = !(sumOfUserCards >= 21) && !userHasHold;
  const sumOfHouseCards = totalCards(houseCards,houseHighAce);
  const canHousePlay = sumOfHouseCards <= 16;

  const isGame = isGameOver(userHasHold, sumOfUserCards, sumOfHouseCards);
const userHasAce = checkForAce(userCards)
const houseHasAce = checkForAce(houseCards)
  return (
    <div>
      <button
      type="button"
      onClick={()=> handleUserToggle()}
      disabled = {!userHasAce}
      >
        Change value of ace to {userHighAce ? 1 : 11}
      </button>
      <button
        type="button"
        onClick={() => handleClick()}
        disabled={!canUserPlay}
      >
        userCards
      </button>
      {sumOfUserCards}
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
      onClick={()=> handleHouseToggle()}
      disabled = {!houseHasAce}
      >
        Change value of ace to {houseHighAce ? 1 : 11}
      </button>
      <button
        type="button"
        onClick={() => handleClick2()}
        disabled={!canHousePlay}
      >
        houseCards
      </button>
      {sumOfHouseCards}
    
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
