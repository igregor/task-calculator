import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import equalExpertsTheme from "./equalExpertsTheme";
import Calculator from "./views/Calculator";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={equalExpertsTheme}>
      <CssBaseline />
      <Calculator />
    </ThemeProvider>
  );
};

export default App;
