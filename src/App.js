import React, { useState, useRef } from "react";
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

  const runningRef = useRef();
  runningRef.current = running;

  return (
    <React.Fragment>
      <h1 style={{ marginTop: "0px" }}>Conway's Game of Life</h1>
      <div className="main-container">
        <ConfigComponent
          setSize={setSize}
          setGrid={setGrid}
          size={size}
          grid={grid}
          running={running}
          setRunning={setRunning}
          runningRef={runningRef}
        />
        <div className="grid">
          <Grid size={size} grid={grid} setGrid={setGrid} setRunning={setRunning}/>
        </div>
        <div className="rules">Rules</div>
      </div>
    </React.Fragment>
  );
};

export default App;
