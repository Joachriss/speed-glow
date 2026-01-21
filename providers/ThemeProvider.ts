import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", 
    primary: {
      main: "#111827", // gray-900
    },
    text: {
        primary: "#171717", // gray-800
        disabled: "#6B7280" // gray-500
    }
  },
});

export default theme;
