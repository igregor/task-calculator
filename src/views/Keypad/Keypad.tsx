import React from "react";

import Box from "@mui/material/Box";

import KeypadButton, { KeypadButtonProps } from "./KeypadButton";
import { onKeyClickValue } from "./types";

type ButtonItem = Pick<
  KeypadButtonProps,
  "label" | "value" | "gridArea" | "variant"
>;

const buttons: ButtonItem[] = [
  { value: 0, label: "0", gridArea: "zero" },
  { value: 1, label: "1", gridArea: "one" },
  { value: 2, label: "2", gridArea: "two" },
  { value: 3, label: "3", gridArea: "three" },
  { value: 4, label: "4", gridArea: "four" },
  { value: 5, label: "5", gridArea: "five" },
  { value: 6, label: "6", gridArea: "six" },
  { value: 7, label: "7", gridArea: "seven" },
  { value: 8, label: "8", gridArea: "eight" },
  { value: 9, label: "9", gridArea: "nine" },
  { value: "comma", label: ".", gridArea: "comma" },
  { value: "addition", label: "+", gridArea: "addition" },
  { value: "substraction", label: "-", gridArea: "substraction" },
  { value: "multiplication", label: "*", gridArea: "multiplication" },
  { value: "division", label: "/", gridArea: "division" },
  { value: "clear", label: "C", gridArea: "clear", variant: "action" },
  { value: "result", label: "=", gridArea: "result", variant: "highlighted" },
];

export interface KeypadProps {
  onClick(value: onKeyClickValue): void;
}

const Keypad: React.FC<KeypadProps> = ({ onClick }) => {
  return (
    <Box
      data-testid="keypad"
      sx={{
        display: "grid",
        // NOTE @g.wojtanowicz - read more https://stackoverflow.com/questions/48692299/is-it-possible-to-create-a-grid-of-squares-using-css-grid-layout
        gridTemplate: "repeat(5, 1fr) / repeat(4, 1fr)",
        gridGap: 8,
        // NOTE @g.wojtanowicz - read more https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-areas
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
          key={button.value}
          label={button.label}
          value={button.value}
          gridArea={button.gridArea}
          variant={button.variant}
          onClick={onClick}
        />
      ))}
    </Box>
  );
};

export default Keypad;
