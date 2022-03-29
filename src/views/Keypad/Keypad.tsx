import React from "react";

import Box from "@mui/material/Box";

import KeypadButton, { KeypadButtonProps } from "./KeypadButton";
import { KeypadKey } from "./types";

type ButtonItem = Pick<KeypadButtonProps, "keypadKey" | "gridArea" | "variant">;

const buttons: ButtonItem[] = [
  { keypadKey: "0", gridArea: "zero" },
  { keypadKey: "1", gridArea: "one" },
  { keypadKey: "2", gridArea: "two" },
  { keypadKey: "3", gridArea: "three" },
  { keypadKey: "4", gridArea: "four" },
  { keypadKey: "5", gridArea: "five" },
  { keypadKey: "6", gridArea: "six" },
  { keypadKey: "7", gridArea: "seven" },
  { keypadKey: "8", gridArea: "eight" },
  { keypadKey: "9", gridArea: "nine" },
  { keypadKey: ".", gridArea: "comma" },
  { keypadKey: "+", gridArea: "addition" },
  { keypadKey: "-", gridArea: "substraction" },
  { keypadKey: "*", gridArea: "multiplication" },
  { keypadKey: "/", gridArea: "division" },
  { keypadKey: "C", gridArea: "clear", variant: "action" },
  { keypadKey: "=", gridArea: "result", variant: "highlighted" },
];

export interface KeypadProps {
  onClick(value: KeypadKey): void;
}

const Keypad: React.FC<KeypadProps> = ({ onClick }) => {
  return (
    <Box
      data-testid="keypad"
      sx={{
        display: "grid",
        gridTemplate: "repeat(5, 1fr) / repeat(4, 1fr)",
        gridGap: 8,
        gridTemplateAreas: `
            ". . clear division"
            "seven eight nine multiplication"
            "four five six substraction"
            "one two three addition"
            ". zero comma result"
        `,
      }}
    >
      {buttons.map((button) => (
        <KeypadButton
          key={button.keypadKey}
          keypadKey={button.keypadKey}
          gridArea={button.gridArea}
          variant={button.variant}
          onClick={onClick}
        />
      ))}
    </Box>
  );
};

export default Keypad;
