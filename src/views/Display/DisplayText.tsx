import React from "react";

import Typography from "@mui/material/Typography";

export interface DisplayTextProps {
  type: "history" | "equation";
}

const DisplayText: React.FC<DisplayTextProps> = ({ type, children }) => {
  return (
    <Typography
      data-testid={type}
      align="right"
      sx={{
        px: 2,
        py: 1,
        fontSize: type === "history" ? "h6.fontSize" : "h4.fontSize",
        // NOTE @g.wojtanowicz read more: https://stackoverflow.com/questions/218065/overflow-to-left-instead-of-right
        direction: "rtl",
        overflowX: "hidden",
      }}
    >
      {children}
    </Typography>
  );
};

export default DisplayText;
