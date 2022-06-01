import { useEffect, useState } from "react";
import useInterval from "use-interval";
import "./flipGame.scss";

interface Tile {
  emoji: string;
  isHidden: boolean;
  isMatched: boolean;
}
const IntialTiles = [
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
  "🥔",
  "🍒",
  "🥑",
  "🌽",
  "🥕",
  "🍇",
  "🍉",
  "🍌",
  "🥭",
  "🍍",
];

const TilesDisplayed = (IntialTiles: string[]) => {
  let tiles: Tile[] = [];

  while (IntialTiles.length > 0) {
    let randomIndex = Math.floor(Math.random() * IntialTiles.length);
    const result = IntialTiles.splice(randomIndex, 1);
    tiles.push({ emoji: result[0], isHidden: true, isMatched: false });
  }
  return tiles;
};

const isGameOver = (tiles: Tile[]): boolean => {
  return tiles.every((i) => i.isMatched);
};
export function FlipGame() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selectedTile, setSelectedTile] = useState<Tile>();
  const [canClick, setCanClick] = useState(true);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [firstClick, setFirstClick] = useState(false);

  useEffect(() => {
    setTiles(TilesDisplayed(IntialTiles));
  }, []);

  const handleTileClick = (tile: Tile, index: number) => {
    if (!canClick) {
      return;
    }
    tile.isHidden = false;
    console.log(tile, selectedTile);
    if (!selectedTile) {
      console.log("no selected tile");
      setSelectedTile(tile);
    }
    if (selectedTile?.emoji == tile.emoji) {
      console.log("matching tile");
      tile.isMatched = true;
      selectedTile.isMatched = true;
      setSelectedTile(undefined);
      setCount(count + 1);
    }
    if (selectedTile && selectedTile?.emoji !== tile.emoji) {
      console.log("not matching tile");
      setCanClick(false);
      setTimeout(() => {
        setCanClick(true);
        tile.isHidden = true;
        selectedTile.isHidden = true;
        setSelectedTile(undefined);
        setTiles([...tiles]);
        setCount(count + 1);
      }, 2000);
    }
    setTiles([...tiles]);
    setFirstClick(true);
  };
  const gameOver = isGameOver(tiles);
  useInterval(
    () => {
      setTimer(timer + 1);
    },
    !gameOver && firstClick ? 1000 : null,
    true
  );
  return (
    <div className="flip-game outerTileContainer">
      <h1>FlipGame</h1>
      <div className="innerTileContainer">
        <div className="counter1">Moves:{count}</div>
        <div className="counter2">Time:{timer}</div>
        <div className="tileContainer">
          {tiles.map((tile, index) => (
            <div
              className={`flip-card ${
                !tile.isMatched && tile.isHidden ? "" : "hasClicked"
              }`}
              onClick={() => handleTileClick(tile, index)}
            >
              <div className="flip-card-inner">
                <div className=" flip-card-front hidden"></div>
                <div className="flip-card-back">{tile.emoji}</div>
              </div>
            </div>
          ))}
        </div>
        {gameOver ? "Game Over" : false}
      </div>
    </div>
  );
}
//randomise tiles-done
//hide and reveal the hidden tile-done
//onclick that stores the seleceted tile - done
//compare the 2 selections-done
//reset
//when pair is right they should stay revealed - done
//display the grid-done
