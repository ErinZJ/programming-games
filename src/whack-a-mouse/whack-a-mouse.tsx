import { ReactElement, useEffect, useState } from "react";
import "./whack-a-mouse.scss";
interface Hole {
  isHidden: boolean;
  mole: string;
}
const mole = "🐭";
const hole = { isHidden: true, mole };
let timeUp = false;
export function MoleGame() {
  const [count, setCount] = useState(0);
  const [holes, setHoles] = useState<Hole[]>([]);

  const handleCount = (x: Hole) => {
    if (x.isHidden) {
      return;
    }
    setCount(count + 1);
  };
  const handleTimer = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  const handlePeep = () => {
    const time = handleTimer(1000, 2000);
    const hole = randomTiles(holes);
    hole.isHidden = false;
    setHoles([...holes]);
    setTimeout(() => {
      hole.isHidden = true;
      setHoles([...holes]);
      if (!timeUp) {
        handlePeep();
      }
    }, time);
  };
  const handleStart = () => {
    handlePeep();
    timeUp = false;
    setCount(0);
    setTimeout(() => {
      timeUp = true;
    }, 15000);
  };
  const randomTiles = (holes) => {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    return hole;
  };
  useEffect(() => {
    setHoles([{ ...hole }, { ...hole }, { ...hole }, { ...hole }, { ...hole }]);
  }, []);
  return (
    <div className="whack-a-mouse outerGame">
      <div>
        <h1>Whack A Mouse</h1>
      </div>
      <div className="score">Score{count}</div>

      <button
        className="startButton"
        type="button"
        onClick={() => handleStart()}
      >
        START
      </button>

      <div className="row">
        {holes.map((x, i) => (
          <div
            className={`gameTile ${x.isHidden ? "hidden" : ""}`}
            key={i}
            onClick={() => handleCount(x)}
          >
            {mole}
          </div>
        ))}
      </div>
    </div>
  );
}

// build up the tile grid
// start button (random tiles to show for certain amount of time)
//onclick - only when tile is shown
//          that increses count (can click multipletimes)
