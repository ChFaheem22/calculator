import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (result && /[0-9.]/.test(value)) {
      setInput(value);
      setResult("");
      return;
    }
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult.toString());
      setInput(input); // keep the equation visible
    } catch {
      setResult("Error");
      setInput("");
    }
  };

  const signChange = () => {
    if (!input) return;
    try {
      const value = eval(input);
      const newValue = (-value).toString();
      setInput(newValue);
      setResult("");
    } catch {
      setResult("Error");
      setInput("");
    }
  };

  const modulus = () => {
    setInput((prev) => prev + "%");
  };

  return (
    <div className="body">
      <div className="display-container">
        <div className={`equation ${result ? "equation-small" : ""}`}>
          {input || "0"}
        </div>
        {result && <div className="answer">{result}</div>}
      </div>

      <div className="calc">
        <button onClick={clearInput} className="butt">C</button>
        <button onClick={() => handleClick("/")} className="butt">/</button>
        <button onClick={() => handleClick("*")} className="butt">*</button>
        <button onClick={backspace} className="butt">&#x232b;</button>

        <button onClick={() => handleClick("7")} className="butt">7</button>
        <button onClick={() => handleClick("8")} className="butt">8</button>
        <button onClick={() => handleClick("9")} className="butt">9</button>
        <button onClick={() => handleClick("+")} className="butt">+</button>

        <button onClick={() => handleClick("4")} className="butt">4</button>
        <button onClick={() => handleClick("5")} className="butt">5</button>
        <button onClick={() => handleClick("6")} className="butt">6</button>
        <button onClick={() => handleClick("-")} className="butt">-</button>

        <button onClick={() => handleClick("1")} className="butt">1</button>
        <button onClick={() => handleClick("2")} className="butt">2</button>
        <button onClick={() => handleClick("3")} className="butt">3</button>
        <button onClick={signChange} className="butt">+/-</button>

        <button onClick={() => handleClick(".")} className="butt">.</button>
        <button onClick={() => handleClick("0")} className="butt zero">0</button>
        <button onClick={modulus} className="butt">%</button>
        <button className="res double" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
