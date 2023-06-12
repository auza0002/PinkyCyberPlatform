import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
ol{
  list-style-type:none;
  list-style: none;
  padding: 0;
}
li::marker {
  display: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html {
  color: ${({ theme }) => theme.color.brandColors.base.Base700};
 background-color: #F8F9FA;
font-family: 'Sora', sans-serif;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  margin: 0;
}

img,
picture,
svg {
  max-width: 100%;
  display: block;
}

svg {
  fill: currentColor;
}

svg:not(:root) {
  overflow: hidden;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
a {
  text-decoration: none;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}


`;
