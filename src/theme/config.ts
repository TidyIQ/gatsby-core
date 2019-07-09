import { CSSProperties } from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

/**
 * Create a default theme
 */
export interface DefaultTheme {
  palette: {
    primary: CSSProperties["color"];
    secondary: CSSProperties["color"];
  };
  fontFamily: {
    body: CSSProperties["fontFamily"];
  };
}

const defaultTheme: DefaultTheme = {
  palette: {
    primary: blue[700],
    secondary: green[800]
  },
  fontFamily: {
    body: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
  }
};

/**
 * Merge default theme config with user's theme config
 */
const themeConfig = {
  ...defaultTheme
};

export default themeConfig;
