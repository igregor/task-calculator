import React from "react";

import Box from "@mui/material/Box";

import logo from "./equal-experts-logo.svg";

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
    >
      <img src={logo} width="100%" alt="Equal Experts" />
    </Box>
  );
};

export default Logo;
