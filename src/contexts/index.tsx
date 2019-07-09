import React, { FC } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "./theme";

const ContextProviders: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ContextProviders;
