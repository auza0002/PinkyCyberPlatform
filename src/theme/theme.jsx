/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";
const theme = {
  brandColors: {
    base: {
      Base900: "rgba(21, 24, 27, 1)",
      // to be used for display headings
      Base800: "rgba(42, 48, 54, 1)",
      // to be used for headings
      Base700: "rgba(62, 72, 82, 1)", //! Primary
      // to be used for paragraph text and any other descruptive text.
      Base600: "rgba(83, 96, 109, 1)",
      // TODO
      Base500: "rgba(104, 120, 136, 1)", //! Secondary
      // to be used for input labels, paragraphs and any other descruptive text.
      Base400: "rgba(134, 147, 160, 1)",
      // TODO
      Base300: "rgba(164, 174, 184, 1)", //! Tertiary
      // to be used fot hover state input and dropdown border color
      Base200: "rgba(195, 201, 207, 1)",
      // To be used for default state input and dropdown border color
      Base100: "rgba(225, 228, 231, 1)",
      // To be used for table borders, sorted by column higlight, card borders.
    },
    baseBlue: {
      Base900: "rgba(3, 6, 19, 1)",
      // TODO
      Base800: "rgba(7, 12, 38, 1)",
      // TODO
      Base700: "rgba(10, 17, 56, 1)",
      // TODO
      Base600: "rgba(14, 23, 75, 1)",
      // to be used for hover/active state icon colors, table column heading or secondary button text.
      Base500: "rgba(16, 28, 96, 1)",
      // to be used for deafult stare icon colors, table column heading or secondary button text.
      Base400: "rgba(65, 74, 126, 1)",
      // TODO
      Base300: "rgba(112, 119, 158, 1)",
      // TODO
      Base200: "rgba(160, 165, 191, 1)",
      // to be used fto border color pn default stae secondary buttons and background color on hover/ active secondary buttons/
      Base100: "rgba(207, 210, 223, 1)",
      // to be used for background color on default stae secondary buttons.
    },
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
