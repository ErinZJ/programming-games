import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BlackJack } from "./blackJack";
import { PuzzleGame } from "./puzzleGame/puzzle";
import { FlipGame } from "./flipGame/flipGame";
import { Home } from "./home";
import { Calulator } from "./calculator/calculator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="blackjack" element={<BlackJack />} />
        <Route path="puzzle-game" element={<PuzzleGame />} />
        <Route path="flip-Game" element={<FlipGame />} />
        <Route path="calculator" element={<Calulator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
