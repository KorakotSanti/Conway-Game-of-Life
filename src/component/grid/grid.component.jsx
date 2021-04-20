import React from "react";
import { GridContainer, Cell } from "./grid.styles";
import produce from "immer";

const Grid = ({ size, grid, setGrid, setRunning }) => {
  const colorCell = (i, j) => {
    setGrid(
      produce((grid) => {
        grid[i][j] = grid[i][j] ? 0 : 1;
      })
    );
  };

  const renderBoard = () => {
    let newGrid = [];
    let row = [];

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        row.push(
          <Cell
            key={`${i}-${j}`}
            onClick={() => {
              colorCell(i, j);
              setRunning(false);
            }}
            color={grid[i][j] ? "black" : undefined}
          />
        );
      }
      newGrid.push(row);
      row = [];
    }

    return newGrid;
  };
  return <GridContainer size={size}>{renderBoard()}</GridContainer>;
};

export default Grid;
