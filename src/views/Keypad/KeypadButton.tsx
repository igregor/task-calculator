import React, { useCallback, useMemo } from "react";

import Button from "@mui/material/Button";

import { onKeyClickValue, KeyType } from "./types";

export interface KeypadButtonProps {
  label: string;
  value: string | number;
  type: KeyType;
  gridArea: string;
  variant?: "default" | "action" | "highlighted";
  onClick(value: onKeyClickValue): void;
}

const KeypadButton: React.FC<KeypadButtonProps> = ({
  label,
  value,
  type,
  gridArea,
  variant = "default",
  onClick,
}) => {
  const onClickHandler = useCallback(() => {
    onClick({ value, type });
  }, [onClick, value, type]);

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
      {label}
    </Button>
  );
};

export default KeypadButton;
