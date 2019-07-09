import { DefaultTheme } from "./config";
import { RecursivePartial } from "../utils/typescript";

/**
 * Export type for user theme configuration object
 */

/* eslint-disable-next-line */
export type ThemeConfig = RecursivePartial<DefaultTheme>;
