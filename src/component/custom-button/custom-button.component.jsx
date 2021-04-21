import React from "react";

import { CoolButton } from "./custom-button.styles";

const CustomButton = ({ children, click }) => {
  return (
    <CoolButton onClick={click}>
      {children}
    </CoolButton>
  );
};

export default CustomButton;
