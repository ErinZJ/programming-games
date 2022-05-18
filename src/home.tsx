import "./home.css";
export function Home() {
  return (
    <div className="outerBox">
      <h1> Programming Games</h1>
      <div className="box">
        <div className="innerBox">
          <div className="gameButton">
            <a href="blackjack">blackjack</a>
          </div>
          <div>
            <img
              src="../blackJack.jpeg"
              alt="blackjack"
              width="150px"
              height="138px"
            />
          </div>
        </div>
        <div className="innerBox">
          <div className="gameButton">
            <a href="puzzle-game">puzzle-game</a>
          </div>
          <div>
            <img
              src="../puzzleGame.jpeg"
              alt="blackjack"
              width="150px"
              height="138px"
            />
          </div>
        </div>
        <div className="innerBox">
          <div className="gameButton">
            <a href="flip-Game">flip-game</a>
          </div>
          <div>
            <img
              src="../flipGame.jpeg"
              alt="blackjack"
              width="150px"
              height="138px"
            />
          </div>
        </div>
        <div className="innerBox">
          <div className="gameButton">
            <a href="calculator">calculator</a>
          </div>
          <div>
            <img
              src="../calculator.jpeg"
              alt="blackjack"
              width="150px"
              height="138px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
