export type ClearKey = "C";
export type CommaKey = ".";
export type EqualKey = "=";

const numericKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] as const;
export type NumericKey = typeof numericKeys[number];

export function isNumericKeyOrComma(key: any): key is NumericKey | CommaKey {
  return key === "." || numericKeys.includes(key);
}

const operatorKeys = ["+", "-", "*", "/"] as const;
export type OperatorKey = typeof operatorKeys[number];

export function isOperatorKey(key: any): key is OperatorKey {
  return operatorKeys.includes(key);
}

export type KeypadKey =
  | NumericKey
  | OperatorKey
  | ClearKey
  | CommaKey
  | EqualKey;
