import { useEffect, useState } from "react";
import "./flipGame.css";

interface Tile {
  emoji: string;
  isHidden: boolean;
  isMatched: boolean;
}
const emojis = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌", "🥭", "🍍"];
let IntialTiles = [
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
  };
  const gameOver = isGameOver(tiles);

  return (
    <div>
      flipGame
      <div className="tileContainer">
        {tiles.map((tile, index) => (
          <div
            className="tile hidden"
            onClick={() => handleTileClick(tile, index)}
          >
            {!tile.isMatched && tile.isHidden ? "" : tile.emoji}
          </div>
        ))}
      </div>
      <div>Moves:{count}</div>
      <div>Time:{timer}</div>
      {gameOver ? "Game Over" : false}
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
