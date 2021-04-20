import React, { useCallback, useState } from "react";
import SizeInput from "../size-input/size-input.component";
import produce from "immer";

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

  const stepGeneration = useCallback(() => {
    if (!runningRef.current) {
      setGeneration(0);
      return;
    }
    setGeneration((g) => g+1);
    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            let neighbors = 0;
            for (let k = -1; k < 2; k++) {
              for (let l = -1; l < 2; l++) {
                if (i+k >= 0 && i+k < size && j+l >= 0 && j+l < size) {
                  neighbors += g[i+k][j+l];
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
      })
    })
    setTimeout(stepGeneration, 100);

  }, [generation]);

  return (
    <div className="config">
      <h1>{generation}</h1>
      <button
        onClick={() => {
          if (!running) {
            runningRef.current = true;

            stepGeneration();
          }
          setRunning(!running);
        }}
      >
        {running ? "stop" : "start"}
      </button>
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
