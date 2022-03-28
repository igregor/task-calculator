import React from "react";

import Box from "@mui/material/Box";

import Display from "../Display";
import Keypad from "../Keypad";

const Calculator: React.FC = () => {
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
        // TODO @g.wojtanowicz Replace with states
        operator="addition"
        leftOperand={100000}
        rightOperand={218309182}
        result={12345678901234567890.234234}
      />
      {/* // TODO @g.wojtanowicz Replace with correct callback */}
      <Box sx={{ pt: 2 }}>
        <Keypad onClick={() => {}} />
      </Box>
    </Box>
  );
};

export default Calculator;
