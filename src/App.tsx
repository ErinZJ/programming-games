
import './App.css';
import { BlackJack } from './blackJack';

function App() {
  return (
    <div className="App">
      <div className="playingCards">
        <div className="card back">*</div>
        <div className="card rank-7 spades">
    <span className="rank">7</span>
    <span className="suit">&spades;</span>
</div>
      </div>
      
      <BlackJack></BlackJack>
    </div>
  );
}

export default App;
