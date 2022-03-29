import React, { useCallback, useMemo } from "react";

import Button from "@mui/material/Button";

import { KeypadKey } from "./types";

export interface KeypadButtonProps {
  keypadKey: KeypadKey;
  gridArea: string;
  variant?: "default" | "action" | "highlighted";
  onClick(value: KeypadKey): void;
}

const KeypadButton: React.FC<KeypadButtonProps> = ({
  keypadKey,
  gridArea,
  variant = "default",
  onClick,
}) => {
  const onClickHandler = useCallback(() => {
    onClick(keypadKey);
  }, [onClick, keypadKey]);

  const color = useMemo((): "primary" | "secondary" | "success" => {
    switch (variant) {
      case "highlighted":
        return "primary";
      case "action":
        return "secondary";
      case "default":
        return "success";
    }
  }, [variant]);

  return (
    <Button
      variant="contained"
      size="large"
      color={color}
      sx={{
        gridArea,
        fontWeight: "h1.fontWeight",
        fontSize: "h6.fontSize",
      }}
      onClick={onClickHandler}
    >
      {keypadKey}
    </Button>
  );
};

export default KeypadButton;
