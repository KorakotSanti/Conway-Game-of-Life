import React, { useState } from "react";
import Grid from "./component/grid/grid.component";
import ConfigComponent from "./component/config-component/config-component.component";

import "./App.css";

const App = () => {
  const [running, setRunning] = useState(false);
  const [size, setSize] = useState(20);
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < size; i++) {
      rows.push(Array.from(Array(size), () => 0));
    }

    return rows;
  });

  return (
    <React.Fragment>
      <h1 style={{ marginTop: "0px" }}>Conway's Game of Life</h1>
      <div className="main-container">
        <div className="configs">
          <ConfigComponent setSize={setSize} setGrid={setGrid} size={size} />
        </div>
        <div className="grid">
          <Grid size={size} grid={grid} setGrid={setGrid}/>
        </div>
        <div className="rules">Rules</div>
      </div>
    </React.Fragment>
  );
};

export default App;
