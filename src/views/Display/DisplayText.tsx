import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface DisplayTextProps {
  type: "history" | "equation";
  children: string;
}

const DisplayText: React.FC<DisplayTextProps> = ({ type, children }) => {
  return (
    <Box
      sx={{
        // NOTE @g.wojtanowicz Keep the long numbers hidden and aligned to right
        // read more: https://stackoverflow.com/questions/218065/overflow-to-left-instead-of-right/12646655#12646655
        whiteSpace: "nowrap",
        overflowX: "hidden",
      }}
    >
      <Typography
        data-testid={type}
        // NOTE @g.wojtanowicz Keep the long numbers hidden and aligned to right
        align="right"
        sx={{
          float: "right",
          fontSize: type === "history" ? "h6.fontSize" : "h4.fontSize",
          minHeight: type === "history" ? 50 : "initial", // NOTE @g.wojtanowicz - avoid layout shift when result is present
          px: 2,
          py: 1,
        }}
        // NOTE @g.wojtanowicz show long numbers at least in title
        title={children}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default DisplayText;
