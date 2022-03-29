import React from "react";
import Box from "@mui/material/Box";

import Display from "../Display";
import Keypad from "../Keypad";
import useCalculator from "./useCalculator";

const Calculator: React.FC = () => {
  const { leftOperand, operator, rightOperand, result, onClickHandler } =
    useCalculator();

  return (
    <Box
      data-testid="calculator"
      sx={{
        backgroundColor: "info.main",
        maxWidth: 640,
        margin: "0 auto",
        p: 1,
      }}
    >
      <Display
        leftOperand={leftOperand}
        operator={operator}
        rightOperand={rightOperand}
        result={result}
      />
      <Box sx={{ pt: 2 }}>
        <Keypad onClick={onClickHandler} />
      </Box>
    </Box>
  );
};

export default Calculator;
