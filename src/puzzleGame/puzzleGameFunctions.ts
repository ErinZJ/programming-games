import { Card } from "../shared/cardInterfaces"

export const suitsToUnicode = ( suit:string, rank:string|number)=>{
    if (rank == "k" || rank == "q" || rank == "j" ){
        switch (suit) {
        case "spades":
          return "♠"
          case "clubs":
          return "♣"
          case "diams":
          return "♦"
          case "hearts":
          return "♥"
      }
    }return "\u00A0"}
    export const cardsDealt = (suitesAndValues: Card[]) => {
        let randomIndex = Math.floor(Math.random() * suitesAndValues.length);
        const result = suitesAndValues.splice(randomIndex, 1);
        console.log("removingCard");
        return result[0];
      };