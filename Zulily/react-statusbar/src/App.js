import React, { useState } from "react";
import logo from "./logo.svg";
import Button from "./components/Button";
import Bar from "./components/Bar";
import "./App.css";

function App() {
  const [status, toggleStatus] = useState(0);

  const increment = () => {
    return "250px";
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Quick Status Bar in React to prep for zulily interview</p>
        <Bar status={status} />
        <Button
          toggleRun={() => {
            let size = 0;
            const update = setInterval(() => {
              size += 2;
              toggleStatus(size);
              if (size === 100) {
                clearInterval(update);
              }
            }, 500);
          }}
        />
      </header>
    </div>
  );
}

export default App;
