import {Card} from  "./cardInterfaces"
export const getValueOfCard = (val: string | number): number => {
    switch (val) {
      case "a":
        return 11;
      case "j":
      case "q":
      case "k":
        return 10;
      default:
        return +val;
    }
  };
  export const individualSuites = (
    suites: string[],
    valuesOfSuites: (string | number)[]
  ): Card[] => {
    let mergedSuiteValues: Card[] = [];
    for (let index = 0; index < suites.length; index++) {
      const element = suites[index];
      for (let index = 0; index < valuesOfSuites.length; index++) {
        const element2 = valuesOfSuites[index];
        mergedSuiteValues.push({
        suit: element,
        rank: element2,
          value: getValueOfCard(element2),
        });
      }
    }
    return mergedSuiteValues;
  };
  
  export const cardsDealt = (suitesAndValues: Card[]) => {
    let randomIndex = Math.floor(Math.random() * suitesAndValues.length);
    const result = suitesAndValues.splice(randomIndex, 1);
    console.log("removingCard");
    return result[0];
  };
  
  export const gameIsOver = (userHasHold, sumOfUserCards, sumOfHouseCards) => {
    if (sumOfUserCards > 21 || sumOfHouseCards > 21) {
      return true;
    }
    if (userHasHold && sumOfHouseCards > 17) {
      return true;
    }
    if (userHasHold && sumOfHouseCards > sumOfUserCards) {
      return true;
    }
    return false;
  };
export const gameResults = (sumOfHouseCards,sumOfUserCards)=>{
    if (sumOfUserCards > 21 ){
        return "You lose"
    }
    if (sumOfHouseCards > 21){
        return "You Win"
    }
    if (sumOfUserCards > sumOfHouseCards){
        return "You Win"
    }
    if (sumOfHouseCards > sumOfUserCards){
        return "You Lose"
    }
    if (sumOfUserCards == sumOfHouseCards){
        return "Its a Draw"
    }
    
}
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
}return "\u00A0"


}
  let suites = ["spades", "clubs", "diams", "hearts"];
  const valuesOfSuites = [
    "a",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "j",
    "q",
    "k",
  ];
  
  export const suitesAndValues: Card[] = individualSuites(suites, valuesOfSuites);

  

  