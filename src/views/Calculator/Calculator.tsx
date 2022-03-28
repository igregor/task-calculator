import React, { useState } from "react";

import Box from "@mui/material/Box";

import Display from "../Display";
import Keypad from "../Keypad";
import { Operator } from "../../types/operators";

const Calculator: React.FC = () => {
  const [leftOperand, setLeftOperand] = useState<number | undefined>();
  const [operator, setOperator] = useState<Operator | undefined>();
  const [rightOperand, setRightOperand] = useState<number | undefined>();
  const [result, setResult] = useState<number | undefined>();

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
      {/* // TODO @g.wojtanowicz Replace with correct callback */}
      <Box sx={{ pt: 2 }}>
        <Keypad onClick={() => {}} />
      </Box>
    </Box>
  );
};

export default Calculator;
