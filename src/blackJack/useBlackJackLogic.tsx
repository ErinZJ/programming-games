import { useState } from "react";
import { Hand } from "../shared/cardInterfaces";
import {
  cardsDealt,
  isGameOver,
  suitesAndValues,
  totalCards,
} from "./cardFunctions";

const defaultHand: Hand = { highAce: false, cards: [], sumOfCards: 0 };
export const useBlackJackLogic = () => {
  const [userHasHold, setUserHasHold] = useState(false);
  const [userHand, setUserHand] = useState<Hand>({ ...defaultHand });
  const [houseHand, setHouseHand] = useState<Hand>({ ...defaultHand });
  const isGame = isGameOver(
    userHasHold,
    userHand.sumOfCards,
    houseHand.sumOfCards
  );
  const resetGame = () => {
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
  const toggleUserHighAce = () =>  setUserHand({
    ...userHand,
    highAce:!userHand.highAce,
    sumOfCards: totalCards(userHand.cards, !userHand.highAce),
  });
  const dealUserCard = () => {
    const hand = dealCard(userHand);
    setUserHand(hand);
  };
  const toggleHouseHighAce = () =>   setHouseHand({
    ...houseHand,
    highAce:!houseHand.highAce,
    sumOfCards: totalCards(houseHand.cards, !houseHand.highAce),
  });
  const dealHouseCard = () => {
    const hand = dealCard(houseHand);
    setHouseHand(hand);
  };
  const canUserPlay =  !(userHand.sumOfCards >= 21) && !userHasHold;
  const canHousePlay =  houseHand.sumOfCards <= 16;
  return {
    isGame,
    canUserPlay,
    canHousePlay,
    setUserHasHold,
    resetGame,
    userHand,
    houseHand,
    setUserHand,
    setHouseHand,
    toggleUserHighAce,
    toggleHouseHighAce,
    dealHouseCard,
    dealUserCard

  };
};
function dealCard(hand: Hand):Hand {
    const result = cardsDealt(suitesAndValues);
    const cards = [...hand.cards, result];
    const sumOfCards = totalCards(cards, hand.highAce);
    return { sumOfCards, highAce:hand.highAce,cards };
}

