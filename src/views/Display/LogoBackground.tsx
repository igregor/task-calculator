import React from "react";

import Box from "@mui/material/Box";

import Logo from "../../components/Logo";
import roundedTrapezoid from "./rounded-trapezoid.svg";

const LogoBackground: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: 200,
          height: 80,
          pl: 2,
          backgroundColor: "primary.main",
        }}
      >
        <Logo />
      </Box>
      <Box>
        <img
          height="100%"
          src={roundedTrapezoid}
          alt="background logo edge"
          aria-hidden={true}
        />
      </Box>
    </Box>
  );
};

export default LogoBackground;
