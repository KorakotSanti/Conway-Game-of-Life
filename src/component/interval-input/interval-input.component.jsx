import React from "react";

import "./interval-input.styles.css";

const IntervalInput = ({ timeInterval, setTimeInterval, setRunning }) => {
  const handleChange = (e) => {
    let val = parseInt(e.target.value);
    if (val === timeInterval) {
      return;
    }
    setRunning(false);
    setTimeInterval(val);
  };

  return (
    <div className="interval">
      <label className="a-label" htmlFor="interval-select">Interval: </label>
      <div className="selector">
        <select
          id="interval-select"
          value={timeInterval}
          onChange={handleChange}
        >
          <option className="options" value="100">
            100 ms
          </option>
          <option className="options" value="250">
            250 ms
          </option>
          <option className="options" value="500">
            500 ms
          </option>
          <option className="options" value="750">
            750 ms
          </option>
          <option className="options" value="1000">
            1000 ms
          </option>
          <option className="options" value="2000">
            2000 ms
          </option>
          <option className="options" value="5000">
            5000 ms
          </option>
        </select>
      </div>
    </div>
  );
};

export default IntervalInput;
