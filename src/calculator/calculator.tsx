import { useState } from "react";

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
    switch (operator) {
      case "/":
        setTotal(val / val2);
        return;
      case "*":
        setTotal(val * val2);
        return;
      case "+":
        setTotal(val + val2);
        return;
      case "-":
        setTotal(val - val2);
        return;
      default:
        setTotal(val);
        return;
    }
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
  return (
    <div>
      <h1>Calculator</h1>
      <div>{operator ? value2 : value}</div>
      <div>{total}</div>
      <div>
        <button type="button" onClick={() => handleClear()}>
          C
        </button>
        <button type="button" onClick={() => handlePlusMinus()}>
          ±
        </button>
        <button type="button" onClick={() => handleBackSpace()}>
          ⌫{" "}
        </button>

        <button type="button" onClick={() => handleOperators("/")}>
          /
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleValue("7")}>
          7
        </button>
        <button type="button" onClick={() => handleValue("8")}>
          8
        </button>
        <button type="button" onClick={() => handleValue("9")}>
          9
        </button>
        <button type="button" onClick={() => handleOperators("*")}>
          *
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleValue("4")}>
          4
        </button>
        <button type="button" onClick={() => handleValue("5")}>
          5
        </button>
        <button type="button" onClick={() => handleValue("6")}>
          6
        </button>
        <button type="button" onClick={() => handleOperators("-")}>
          -
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleValue("1")}>
          1
        </button>
        <button type="button" onClick={() => handleValue("2")}>
          2
        </button>
        <button type="button" onClick={() => handleValue("3")}>
          3
        </button>
        <button type="button" onClick={() => handleOperators("+")}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleValue("0")}>
          0
        </button>
        <button type="button">.</button>
        <button type="button" onClick={() => handleEquals()}>
          =
        </button>
      </div>
    </div>
  );
}
// build up calculator buttons- done
// each button to have an onlick
// stores whats clicked
//  = calculate the total
// reset or clear button that resets the calculator
//
