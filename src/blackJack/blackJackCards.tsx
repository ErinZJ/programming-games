import React from "react";
import { useEffect, useState } from "react";
import { Card, Hand, Rank } from "../shared/cardInterfaces";
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

const displayCard = (suit:string, rank:Rank)=>{
 return <div className={`card rank-${rank} ${suit}`}>
           <span className="rank">{rank}</span>
           <span className="suit">{suitsToUnicode(suit,rank)}</span>
         </div>;
  }
  interface BlackJackCards{
    dealCard:()=>void
    toggleHighAce:()=>void;
    canPlay:boolean;
    hand:Hand;
  }
export function BlackJackCards({dealCard,toggleHighAce,canPlay, hand}:BlackJackCards) {
  console.log("hand",hand)
  const handleClick = () => {
    dealCard();
  };
 
 
  const handleToggle = ()=>{
    toggleHighAce()
  }


const hasAce = checkForAce(hand.cards)
  return (
    <div>
      <button
      type="button"
      onClick={()=> handleToggle()}
      disabled = {!hasAce}
      >
        Change value of ace to {hand.highAce ? 1 : 11}
      </button>
      <button
        type="button"
        onClick={() => handleClick()}
        disabled={!canPlay}
      >
        cards
      </button>
      {hand.sumOfCards}
     
      <div className="playingCards faceImages">
      {hand.cards.map((i) => {
        return displayCard(i.suit, i.rank)
      })}</div>
  
      {suitesAndValues.length}
    </div>
  );
}

// game over
//if the player has hold and the house has more than 17
// if the player is bust
//if the player is has less than the house and the player is on hold.
