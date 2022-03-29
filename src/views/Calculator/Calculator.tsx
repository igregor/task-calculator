// @ts-nocheck
import React, { useState } from "react";
import Box from "@mui/material/Box";

import Display from "../Display";
import Keypad from "../Keypad";
import { Operator } from "../../types/operators";
import { onKeyClickValue } from "../Keypad/types";

const Calculator: React.FC = () => {
  const [leftOperand, setLeftOperand] = useState<string>(undefined);
  const [operator, setOperator] = useState<Operator | undefined>();
  const [rightOperand, setRightOperand] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [pointerPosition, setPointerPosition] = useState<
    "leftOperand" | "operator" | "rightOperand" | "result"
  >("leftOperand");

  window.ggg = {
    leftOperand,
    rightOperand,
    operator,
    pointerPosition,
  };

  const getChangedNumericValue = (
    currentValue: string,
    incommingValue: string // TODO @g.wojtanowicz NOT string here
  ) => {
    if (!currentValue || currentValue === "0") {
      if (incommingValue === "0") {
        return incommingValue;
      } else if (incommingValue === ".") {
        return `0${incommingValue}`;
      } else {
        return `${incommingValue}`;
      }
    } else if (incommingValue === ".") {
      if (currentValue.includes(".")) {
        return currentValue;
      } else {
        return `${currentValue}${incommingValue}`;
      }
    } else {
      return `${currentValue}${incommingValue}`;
    }
  };

  const calculate = () => {
    const leftOperandNumber = Number(leftOperand);
    const rightOperandNumber = Number(rightOperand);

    const result =
      operator === "addition"
        ? leftOperandNumber + rightOperandNumber
        : operator === "substraction"
        ? leftOperandNumber - rightOperandNumber
        : operator === "multiplication"
        ? leftOperandNumber * rightOperandNumber
        : operator === "division"
        ? leftOperandNumber / rightOperandNumber
        : "";

    setResult(result);
  };

  const onClickHandler = (value: onKeyClickValue) => {
    if (value.value === "clear") {
      setLeftOperand(undefined);
      setRightOperand(undefined);
      setResult(undefined);
      setOperator(undefined);
      setPointerPosition("leftOperand");
    } else if (pointerPosition === "leftOperand") {
      if (value.type === "numeric") {
        const newValue = getChangedNumericValue(leftOperand, value.value);
        setLeftOperand(newValue);
      } else if (value.type === "action") {
        setOperator(value.value);
        setPointerPosition("operator");
      }
    } else if (pointerPosition === "operator") {
      if (value.type === "numeric") {
        const newValue = getChangedNumericValue(rightOperand, value.value);
        setRightOperand(newValue);
        setPointerPosition("rightOperand");
      } else if (value.type === "action") {
        // calculate();
        setOperator(value.value);
        // setPointerPosition("result");
      }
    } else if (pointerPosition === "rightOperand") {
      if (value.type === "numeric") {
        const newValue = getChangedNumericValue(rightOperand, value.value);
        setRightOperand(newValue);
      } else if (value.type === "action" && value.value === "result") {
        calculate();
        setPointerPosition("result");
      }
    }
  };

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
        <Keypad onClick={onClickHandler} />
      </Box>
    </Box>
  );
};

export default Calculator;
