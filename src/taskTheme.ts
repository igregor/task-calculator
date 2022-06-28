import { createTheme } from "@mui/material/styles";

const taskTheme = createTheme({
  palette: {
    primary: { main: "#1795d4" },
    secondary: { main: "#fed800" },
    info: { main: "#f5f5f5" },
    // NOTE @g.wojtanowicz "success" does not make too much sense here,
    // but I believe it's good enough to use it in this case
    // to be able to quickly use it in the <Button />
    success: { main: "#373d45" },
  },
});

export default taskTheme;
