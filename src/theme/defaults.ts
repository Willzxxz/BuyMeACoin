//! DO NOT ALTER THIS FILE!

/*
  This are the default configs for using Chakra with rem.
  The bellow configs are important for the some Chakra components and internal
  component styles to function correctly with the default font-size: 1px.
*/

const remTable = {
  px: "1rem",
  0.5: "2rem",
  1: "4rem",
  1.5: "6rem",
  2: "8rem",
  2.5: "10rem",
  3: "12rem",
  3.5: "14rem",
  4: "16rem",
  5: "20rem",
  6: "24rem",
  7: "28rem",
  8: "32rem",
  9: "36rem",
  10: "40rem",
  12: "48rem",
  14: "56rem",
  16: "64rem",
  20: "80rem",
  24: "96rem",
  28: "112rem",
  32: "128rem",
  36: "144rem",
  40: "160rem",
  44: "176rem",
  48: "192rem",
  52: "208rem",
  56: "224rem",
  60: "240rem",
  64: "256rem",
  72: "288rem",
  80: "320rem",
  96: "384rem",
};
const breakpoints = {
  xs: "0px",
  sm: "0px",
  md: "0px",
  lg: "0px",
  xl: "0px",
  "2xl": "0px",
  m: "1px",
  d: "721px",
};
const fontSizes = {
  xs: "12rem",
  sm: "14rem",
  md: "16rem",
  lg: "18rem",
  xl: "20rem",
  "2xl": "24rem",
  "3xl": "30rem",
  "4xl": "36rem",
  "5xl": "48rem",
  "6xl": "60rem",
  "7xl": "72rem",
  "8xl": "96rem",
  "9xl": "128rem",
};
const lineHeights = {
  normal: "normal",
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: "2",
  3: "12rem",
  4: "16rem",
  5: "20rem",
  6: "24rem",
  7: "28rem",
  8: "32rem",
  9: "36rem",
  10: "40rem",
};
const sizes = {
  ...remTable,
  "3xs": "224rem",
  "2xs": "256rem",
  xs: "320rem",
  sm: "384rem",
  md: "448rem",
  lg: "512rem",
  xl: "576rem",
  "2xl": "672rem",
  "3xl": "768rem",
  "4xl": "896rem",
  "5xl": "1040rem",
  "6xl": "1152rem",
  "7xl": "1280rem",
  "8xl": "1440rem",
  containers: {
    sm: "650rem",
    md: "768rem",
    lg: "1024rem",
    xl: "1280rem",
  },
};
const space = remTable;

const defaultConfigs = {
  breakpoints,
  fontSizes,
  lineHeights,
  sizes,
  space,
};

export default defaultConfigs;
