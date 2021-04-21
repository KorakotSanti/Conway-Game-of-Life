import React from "react";

import {InputContainer, Label, TextInput } from './size-input.styles';


const SizeInput = ({ setSize, setGrid, size, setRunning }) => {

  const changeSize = (e) => {
    let temp = 0;
    setRunning(false);
    if (e.target.value === "") {
      temp = 0;
    } 
    else {
      const s = parseInt(e.target.value);
      console.log(s);
      if (s > 50) {
        temp = 50;
      } else {
        temp = s;
      }
    }

    console.log(temp);

    setGrid(() => {
      const rows = [];
      for (let i = 0; i < temp; i++) {
        rows.push(Array.from(Array(temp), () => 0));
      }
      return rows;
    });
    setSize(temp);
  };

  return (
    <InputContainer>
      <Label>Set Size (0-50): </Label>
      <TextInput type="text" value={size} onChange={changeSize}/>
    </InputContainer>
  );
};

export default SizeInput;
