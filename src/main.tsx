import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: { main: "#ffffff" },
    secondary: { main: "#1479bc" },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          borderRadius: 6,
        },

        variant: "contained",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
