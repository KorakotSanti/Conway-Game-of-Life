import React, { useState } from "react";
import { GridContainer, Cell } from "./grid.styles";

const Grid = ({ numRows, numCols }) => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }

    return rows;
  });

  console.log(grid);
  return (
    <GridContainer col={numCols} row={numRows}>
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <Cell
            key={`${i}-${k}`}
            color={grid[i][k] ? "lightblue" : undefined}
          />
        ))
      )}
    </GridContainer>
  );
};

export default Grid;
