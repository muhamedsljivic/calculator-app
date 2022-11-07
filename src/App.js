import { useState } from "react";

function App() {
  const operators = ["/", "*", "/", "-", "+"];

  const [num, setNum] = useState("");
  const [result, setResult] = useState(0);

  const updateNum = (value) => {
    if (
      (operators.includes(value) && num === "") ||
      (operators.includes(value) && operators.includes(num.slice(-1)))
    ) {
      return;
    }
    setNum(num + value);

    if (!operators.includes(value)) {
      setResult(eval(num + value).toString());
    }
  };

  const inputHandler = (e) => {
    console.log(e);
  };

  const acHandler = () => {
    setResult(0);
    setNum("");
  };

  const solutionHandler = () => {
    setNum("");
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateNum(i.toString())} key={i} className="btn">
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div>
      <div className="div">
        <input
          className="input"
          onChange={inputHandler}
          value={result}
          type="number"
          name="someid"
        />
        <label className="label">{num}</label>
        <div className="grid">
          <div className=".btn--div operators">
            <button onClick={() => updateNum("+")} className="btn--o">
              +
            </button>
            <button onClick={() => updateNum("*")} className="btn--o">
              *
            </button>
            <button onClick={() => updateNum("-")} className="btn--o">
              -
            </button>
            <button onClick={() => updateNum("/")} className="btn--o">
              /
            </button>
            <button onClick={acHandler} className="btn--o">
              AC
            </button>
          </div>
          <div className=".btn--div digits">
            {createDigits()}
            <button
              onClick={(e) => {
                updateNum(e.target.innerHTML.toString());
              }}
              className="btn"
            >
              0
            </button>
            <button onClick={() => updateNum(".")} className="btn">
              .
            </button>
            <button onClick={solutionHandler} className="btn">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
