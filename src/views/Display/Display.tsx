import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import LogoBackground from "./LogoBackground";
import DisplayText from "./DisplayText";
import { OperatorKey } from "../Keypad/types";

export interface DisplayProps {
  leftOperand?: string;
  rightOperand?: string;
  operator?: OperatorKey;
  result?: string;
}

const Display: React.FC<DisplayProps> = ({
  leftOperand,
  rightOperand,
  operator,
  result,
}) => {
  const parsedLeftOperand =
    typeof leftOperand === "undefined" ? 0 : leftOperand;

  const parsedOperator =
    operator && typeof leftOperand !== "undefined" ? operator : "";

  const parsedRightOperand =
    typeof leftOperand !== "undefined" &&
    typeof operator !== "undefined" &&
    typeof rightOperand !== "undefined"
      ? rightOperand
      : "";

  const equation = `${parsedLeftOperand} ${parsedOperator} ${parsedRightOperand}`;

  return (
    <Box data-testid="display">
      <Paper elevation={1}>
        <LogoBackground />
        <DisplayText type="history">{result ? equation : ""}</DisplayText>
        <DisplayText type="equation">{result ? result : equation}</DisplayText>
      </Paper>
    </Box>
  );
};

export default Display;
