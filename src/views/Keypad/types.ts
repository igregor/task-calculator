export type Keys =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "."
  | "="
  | "+"
  | "-"
  | "*"
  | "/"
  | "C";

export type KeyType = "numeric" | "action";

export type onKeyClickValue = { value: Keys | number; type: KeyType };
