import React, { FC } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import theme from "../../theme/createTheme";

/**
 * Create theme provider for Material-UI components
 *
 * See: https://material-ui.com/styles/api/#themeprovider
 */
const ThemeProvider: FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
