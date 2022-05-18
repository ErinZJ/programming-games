import { useState } from "react";
import "./calculator.css";
const calc = (val: number, val2: number, operator: string) => {
  switch (operator) {
    case "/":
      return val / val2;
    case "*":
      return val * val2;
    case "+":
      return val + val2;
    case "-":
      return val - val2;
    default:
      return val;
  }
};
export function Calulator() {
  const [value, setValue] = useState("0");
  const [value2, setValue2] = useState("0");
  const [operator, setOperator] = useState("");
  const [total, setTotal] = useState(0);

  const handleValue = (val: string) => {
    if (operator) {
      let newValue = value2 + val;
      setValue2(Number.parseFloat(newValue).toString());
    } else {
      let newValue = value + val;
      setValue(Number.parseFloat(newValue).toString());
    }
  };

  const handleEquals = () => {
    const val = Number.parseFloat(value);
    const val2 = Number.parseFloat(value2);
    setOperator("");
    const calResult = calc(val, val2, operator);
    setValue(calResult.toString());
    setValue2("");
    setTotal(calResult);
  };
  const handleSquareRoot = (value) => {
    setTotal(Math.sqrt(value));
  };
  const handleOperators = (operator: string) => {
    setOperator(operator);
    setValue(value);
  };
  const handleClear = () => {
    setValue("0");
    setValue2("0");
    setTotal(0);
    setOperator("");
  };
  const handlePlusMinus = () => {
    const val = -Number.parseFloat(value);
    setValue(val.toString());
  };
  const handleBackSpace = () => {
    let val = value.substring(0, value.length - 1);
    setValue(val);
  };
  const handleDot = () => {
    setValue(value + ".");
  };

  return (
    <div className="alignment">
      <div className="heading">
        <h1>Calculator</h1>
      </div>
      <div className="wrap">
        <div className="outerContainer">
          <div>
            <div className="value">
              <div id="values">
                {value}
                {operator}
                {value2 !== "0" ? value2 : ""}
              </div>
            </div>
            <div className="innerContainer">
              <div className="row">
                <button
                  data-cy="clear-button"
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleClear()}
                >
                  C
                </button>

                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handlePlusMinus()}
                >
                  ±
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleBackSpace()}
                >
                  ⌫
                </button>

                <button
                  className={`buttonStyle ${
                    operator !== "/" ? "" : "isClicked"
                  }`}
                  type="button"
                  onClick={() => handleOperators("/")}
                >
                  /
                </button>
              </div>
              <div className="row">
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("7")}
                >
                  7
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("8")}
                >
                  8
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("9")}
                >
                  9
                </button>
                <button
                  className={`buttonStyle ${
                    operator !== "*" ? "" : "isClicked"
                  }`}
                  type="button"
                  onClick={() => handleOperators("*")}
                >
                  *
                </button>
              </div>
              <div className="row">
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("4")}
                >
                  4
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("5")}
                >
                  5
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("6")}
                >
                  6
                </button>
                <button
                  className={`buttonStyle ${
                    operator !== "-" ? "" : "isClicked"
                  }`}
                  type="button"
                  onClick={() => handleOperators("-")}
                >
                  -
                </button>
              </div>
              <div className="row">
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("1")}
                >
                  1
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("2")}
                >
                  2
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("3")}
                >
                  3
                </button>
                <button
                  className={`buttonStyle ${
                    operator !== "+" ? "" : "isClicked"
                  }`}
                  type="button"
                  onClick={() => handleOperators("+")}
                >
                  +
                </button>
              </div>
              <div className="row">
                <button
                  className={`buttonStyle ${
                    operator !== "√" ? "" : "isClicked"
                  }`}
                  type="button"
                  onClick={() => handleSquareRoot(value)}
                >
                  √
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleValue("0")}
                >
                  0
                </button>
                <button
                  id="dot"
                  data-cy="dot-button"
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleDot()}
                >
                  .
                </button>
                <button
                  className="buttonStyle"
                  type="button"
                  onClick={() => handleEquals()}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// build up calculator buttons- done
// each button to have an onlick
// stores whats clicked
//  = calculate the total
// reset or clear button that resets the calculator
