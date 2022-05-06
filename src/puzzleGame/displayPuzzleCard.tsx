import { suitsToUnicode } from "../blackJack/cardFunctions";
import { Rank, Suit } from "../shared/cardInterfaces";

export interface Point {
  x: number;
  y: number;
}
interface DisplayCardProps {
  suit: Suit;
  rank: Rank;
  currentPoint: Point;
  ace: Point;
  clickableCards: Point[];
  onSwap: (currentPoint: Point) => void;
}
export const DisplayCard = ({
  suit,
  rank,
  currentPoint,
  ace,
  clickableCards,
  onSwap,
}: DisplayCardProps) => {
    
let isClickable =  !!clickableCards.find(element=> 
    element.x === currentPoint.x 
    && element.y === currentPoint.y)
  
//   let isClickable = false;
//   for (let index = 0; index < clickableCards.length; index++) {
//     const element = clickableCards[index];
//     if (element.x == currentPoint.x && element.y == currentPoint.y) {
//       isClickable = true;
//     }
//   }
  const handleOnClick = () => {
    if (isClickable) {
      onSwap(currentPoint);
    }
  };
  if (rank === "a"){
      return <div data-x={currentPoint.x}
      data-y={currentPoint.y} className="empty-card" ></div>
  }
  return (
    <div
      data-clickable={isClickable}
      data-x={currentPoint.x}
      data-y={currentPoint.y}
      className={`card rank-${rank} ${suit}`}
      onClick={() => handleOnClick()}
    >
      <span className="rank">
        {rank}
        {isClickable ? "click" : ""}
      </span>
      <span className="suit">{suitsToUnicode(suit, rank)}</span>
    </div>
  );
};
