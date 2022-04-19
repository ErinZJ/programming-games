export interface Card {
    rank: Rank; 
    value: number;
    suit: Suit;
  }
  export type Rank = "a"|2|3|4|5|6|7|8|9|10|"j"|"q"|"k";
  export type Suit = "hearts"|"spades"|"clubs"|"diams";