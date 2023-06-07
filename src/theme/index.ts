/*
  To start customizing the theme you can alter the globals file changing
  colors, fonts and applying global styles.

  If you want to customize the style of a Chakra component create a file
  for each component you want to customize inside the src/theme/components
  folder and import it here.

  You should read the Chakra docs for how to apply custom theme values.
  Read: https://chakra-ui.com/docs/styled-system/theming/customize-theme
*/

import { extendTheme } from "@chakra-ui/react";
import defaultConfigs from "./defaults";
import { colors, fonts, styles } from "./globals";

const theme = extendTheme({
  ...defaultConfigs,
  colors,
  fonts,
  styles,
});

export default theme;
