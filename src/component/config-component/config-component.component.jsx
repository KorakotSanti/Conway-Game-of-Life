import React from "react";
import SizeInput from '../size-input/size-input.component';

const ConfigComponent = ({ setSize, setGrid, size }) => {
  return(
    <SizeInput setSize={setSize} setGrid={setGrid} size={size}/>
  )
};

export default ConfigComponent;
