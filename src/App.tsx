import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import taskTheme from "./taskTheme";
import Calculator from "./views/Calculator";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={taskTheme}>
      <CssBaseline />
      <Calculator />
    </ThemeProvider>
  );
};

export default App;
