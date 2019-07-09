import { createMuiTheme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";
import config from "./config";

/**
 * Update 'createMuiTheme' module type definitions to allow for custom variables
 *
 * See: https://material-ui.com/customization/themes/#custom-variables
 */
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    background: {
      vibrant: {
        primary: CSSProperties["backgroundImage"];
        secondary: CSSProperties["backgroundImage"];
      };
    };
  }
  interface ThemeOptions {
    background: {
      vibrant: {
        primary: CSSProperties["backgroundImage"];
        secondary: CSSProperties["backgroundImage"];
      };
    };
  }
}

/**
 * Create custom theme
 *
 * See: https://material-ui.com/customization/themes/#createmuitheme-options-theme
 */
const theme = createMuiTheme({
  typography: {
    fontFamily: config.fontFamily.body
  },
  background: {
    vibrant: {
      primary: config.palette.primary,
      secondary: config.palette.secondary
    }
  }
});

export default theme;
