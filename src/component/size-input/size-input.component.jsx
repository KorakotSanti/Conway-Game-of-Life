import React from "react";

const SizeInput = ({ setSize, setGrid, size }) => {

  const changeSize = (e) => {
    let temp = 0;
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
    <div className="input-contain">
      <label>Set size (0-50): </label>
      <input type="text" value={size} onChange={changeSize} />
    </div>
  );
};

export default SizeInput;
