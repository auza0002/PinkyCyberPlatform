/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";
const theme = {
  brandColors: {
    base: {
      Base900: "#656667",
      // to be used for display headings
      Base800: "#767778",
      // to be used for headings
      Base700: "#878889", //! Primary
      // to be used for paragraph text and any other descruptive text.
      Base600: "#9b9c9d",
      // TODO
      Base500: "#b0b1b2", //! Secondary
      // to be used for input labels, paragraphs and any other descruptive text.
      Base400: "#C6C7C8",
      // TODO
      Base300: "#dadada", //! Tertiary
      // to be used fot hover state input and dropdown border color
    },
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
