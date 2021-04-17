import React from "react";
import { GridContainer, Cell } from "./grid.styles";
import produce from 'immer';

const Grid = ({ size, grid, setGrid }) => {
 
  const colorCell = (i, j) => {
    setGrid(
      produce(grid => {
        grid[i][j] = grid[i][j] ? 0 : 1;
      })
    )
  }

  const renderBoard = () => {
    let newGrid = [];
    let row = [];

    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        row.push(<Cell key={`${i}-${j}`} onClick={() => colorCell(i, j)} color={grid[i][j] ? "black": undefined}/>);
      }
      newGrid.push(row);
      row = [];
    }

    return newGrid;
  }
  
  return (
    <GridContainer size={size}>
      {/* {grid.map((rows, i) =>
        rows.map((col, k) => (
          <Cell
            key={`${i}-${k}`}
            color={grid[i][k] ? "lightblue" : undefined}
          />
        ))
      )} */}
      {renderBoard()}
    </GridContainer>
  );
};

export default Grid;
