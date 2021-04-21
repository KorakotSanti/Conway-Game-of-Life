import React, { useCallback, useState } from "react";
import produce from "immer";

import SizeInput from "../size-input/size-input.component";
import CustomButton from "../custom-button/custom-button.component";
import IntervalInput from "../interval-input/interval-input.component";

import "./config-component.styles.css";

const ConfigComponent = ({
  setSize,
  setGrid,
  size,
  running,
  setRunning,
  runningRef,
}) => {
  const [generation, setGeneration] = useState(0);
  const [timeInterval, setTimeInterval] = useState(100);

  // logic for essentially playing going through generations infinite times or until user click stops
  const stepGeneration = useCallback(() => {
    // stops when user click stop
    if (!runningRef.current) {
      return;
    }
    setGeneration((g) => g + 1);
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            let neighbors = 0;
            for (let k = -1; k < 2; k++) {
              for (let l = -1; l < 2; l++) {
                if (i + k >= 0 && i + k < size && j + l >= 0 && j + l < size) {
                  neighbors += g[i + k][j + l];
                }
              }
            }
            neighbors -= g[i][j];

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(stepGeneration, timeInterval);
  }, [setGrid, runningRef, size, timeInterval]);

  const startGame = () => {
    if (!running) {
      runningRef.current = true;
      stepGeneration();
    }
    setRunning(!running);
  };

  const clearBoard = () => {
    setRunning(false);
    setGeneration(0);
    setGrid(() => {
      const rows = [];
      for (let i = 0; i < size; i++) {
        rows.push(Array.from(Array(size), () => 0));
      }
      return rows;
    });
  };

  const randomizeBoard = () => {
    setRunning(false);
    setGeneration(0);
    setGrid(() => {
      const rows = [];
      for (let i = 0; i < size; i++) {
        rows.push(Array.from(Array(size), () => Math.floor(Math.random() * 2)));
      }
      return rows;
    });
  };

  return (
    <div className="config">
      <h1>Generation: {generation}</h1>
      <CustomButton click={() => startGame()}>
        {running ? "stop" : "start"}
      </CustomButton>
      <IntervalInput
        timeInterval={timeInterval}
        setTimeInterval={setTimeInterval}
        setRunning={setRunning}
      />
      <CustomButton click={() => clearBoard()}>clear</CustomButton>
      <CustomButton click={() => randomizeBoard()}>randomize</CustomButton>
      <SizeInput
        setSize={setSize}
        setGrid={setGrid}
        size={size}
        setRunning={setRunning}
      />
    </div>
  );
};

export default ConfigComponent;
