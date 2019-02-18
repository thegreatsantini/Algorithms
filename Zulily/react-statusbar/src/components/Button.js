import React from "react";

function Button(props) {
  const { toggleRun } = props;
  return (
    <button onClick={toggleRun} className="App-link">
      run bar
    </button>
  );
}

export default Button;
