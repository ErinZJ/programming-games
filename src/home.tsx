import "./home.css";
export function Home() {
  return (
    <div className="outerBox">
      <h1> Programming Games</h1>
      <div className="box">
        <a href="blackjack" className="innerBox">
          <div className="gameButton">
            <a>blackjack</a>
          </div>
          <div>
            <img
              src="../blackJack.jpeg"
              alt="blackjack"
              width="150px"
              height="138px"
            />
          </div>
        </a>
        <a href="puzzle-game" className="innerBox">
          <div className="gameButton">
            <a>puzzle-game</a>
          </div>
          <div>
            <img
              src="../puzzleGame.jpeg"
              alt="blackjack"
              width="150px"
              height="138px"
            />
          </div>
        </a>
        <a href="flip-Game" className="innerBox">
          <div className="gameButton">
            <a>flip-game</a>
          </div>
          <div>
            <img
              src="../flipGame.jpeg"
              alt="blackjack"
              width="150px"
              height="138px"
            />
          </div>
        </a>
        <a href="calculator" className="innerBox">
          <div className="gameButton">
            <a>calculator</a>
          </div>
          <img
            src="../calculator.jpeg"
            alt="blackjack"
            width="150px"
            height="138px"
          />
        </a>
        <a href="whack-a-mouse" className="innerBox">
          <div className="gameButton">
            <a>Whack-A-Mouse </a>
          </div>
        </a>
        <a href="tic-tac-toe" className="innerBox">
          <div className="gameButton">
            <a>Tic-tac-toe</a>
          </div>
        </a>
      </div>
    </div>
  );
}
