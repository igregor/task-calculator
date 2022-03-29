import { useCallback, useState } from "react";
import {
  CommaKey,
  isNumericKeyOrComma,
  isOperatorKey,
  KeypadKey,
  NumericKey,
  OperatorKey,
} from "../Keypad/types";

function getChangedOperand(
  key: NumericKey | CommaKey,
  currentOperandValue?: string
): string {
  if (key === ".") {
    if (!currentOperandValue || currentOperandValue === "0") {
      return `0${key}`;
    } else if (currentOperandValue.includes(".")) {
      return currentOperandValue;
    } else {
      return `${currentOperandValue}${key}`;
    }
  } else if (!currentOperandValue || currentOperandValue === "0") {
    return `${key}`;
  } else {
    return `${currentOperandValue}${key}`;
  }
}

const useCalculator = () => {
  const [leftOperand, setLeftOperand] = useState<string | undefined>();
  const [operator, setOperator] = useState<OperatorKey | undefined>();
  const [rightOperand, setRightOperand] = useState<string | undefined>();
  const [result, setResult] = useState<string | undefined>();

  const [pointerPosition, setPointerPosition] = useState<
    "leftOperand" | "operator" | "rightOperand" | "result"
  >("leftOperand");

  const setCalculatedResult = useCallback(() => {
    const leftOperandNumber = Number(leftOperand);
    const rightOperandNumber = Number(rightOperand);

    const result =
      operator === "+"
        ? leftOperandNumber + rightOperandNumber
        : operator === "-"
        ? leftOperandNumber - rightOperandNumber
        : operator === "*"
        ? leftOperandNumber * rightOperandNumber
        : operator === "/"
        ? leftOperandNumber / rightOperandNumber
        : "";
    const stringifiedResult = String(result);

    setResult(stringifiedResult);
  }, [leftOperand, rightOperand, operator]);

  const clearAll = useCallback(() => {
    setLeftOperand(undefined);
    setRightOperand(undefined);
    setResult(undefined);
    setOperator(undefined);
    setPointerPosition("leftOperand");
  }, []);

  const setLeftOperandValue = useCallback(
    (key: NumericKey | CommaKey) => {
      const newValue = getChangedOperand(key, leftOperand);
      setLeftOperand(newValue);
    },
    [leftOperand]
  );

  const setRightOperandValue = useCallback(
    (key: NumericKey | CommaKey) => {
      const newValue = getChangedOperand(key, rightOperand);
      setRightOperand(newValue);
    },
    [rightOperand]
  );

  const onClickHandler = useCallback(
    (key: KeypadKey) => {
      if (key === "C") {
        clearAll();
      } else if (pointerPosition === "leftOperand") {
        if (isNumericKeyOrComma(key)) {
          setLeftOperandValue(key);
        } else if (isOperatorKey(key)) {
          setOperator(key);
          setPointerPosition("operator");
        }
      } else if (pointerPosition === "operator") {
        if (isNumericKeyOrComma(key)) {
          setRightOperandValue(key);
          setPointerPosition("rightOperand");
        } else if (isOperatorKey(key)) {
          setOperator(key);
        }
      } else if (pointerPosition === "rightOperand") {
        if (isNumericKeyOrComma(key)) {
          setRightOperandValue(key);
        } else if (key === "=") {
          setCalculatedResult();
          setPointerPosition("result");
        }
      }
    },
    [
      setCalculatedResult,
      clearAll,
      pointerPosition,
      setLeftOperandValue,
      setRightOperandValue,
    ]
  );

  return { onClickHandler, leftOperand, operator, rightOperand, result };
};

export default useCalculator;
