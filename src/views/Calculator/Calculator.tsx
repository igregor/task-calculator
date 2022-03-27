import React from "react";

import Box from "@mui/material/Box";
import Logo from "../../components/Logo";

const Calculator: React.FC = () => {
  return (
    <Box data-testid="calculator">
      <Logo />
      <Box data-testid="display"></Box>
      <Box data-testid="keypad"></Box>
    </Box>
  );
};

export default Calculator;
