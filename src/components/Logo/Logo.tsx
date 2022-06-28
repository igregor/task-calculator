import React from "react";

import Box from "@mui/material/Box";

const Logo: React.FC = () => {
  return (
    <Box
      data-testid="logo"
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
      }}
    ></Box>
  );
};

export default Logo;
