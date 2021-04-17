import React from "react";
import Grid from "./component/grid/grid.component";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <h1>Conway's Game of Life</h1>
      <div className="main-container">
        <div className="configs">something here</div>
        <Grid className="grid" numCols={50} numRows={50} />
        <div className="rules">Rules</div>
      </div>
    </React.Fragment>
  );
};

export default App;
