import "./App.css";
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const toggler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="App">
      <h1 className={toggle ? "active" : ""}>My React App</h1>
      <h2>counter={counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={toggler}>toggle</button>
    </div>
  );
}

export default App;
