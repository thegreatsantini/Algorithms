import React from "react";

const themes = {
  container: {
    margin: "10px",
    height: "10px",
    width: "500px"
  }
};

function Bar(props) {
  const { status } = props;
  return (
    <div className="App-link" style={themes.container}>
      <div
        style={{
          width: `${status}%`,
          backgroundColor: "#61dafb",
          height: "10px"
        }}
      />
    </div>
  );
}

export default Bar;
