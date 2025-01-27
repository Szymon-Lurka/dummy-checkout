import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --color-brand-primary: #3182CE;
  --color-brand-primary-hover: #2B6CB0;

  --color-background-light: #F7FAFC;
  --color-background-gray: #E2E8F0;
  
  --color-text-black: #000000;
  --color-text-gray: #718096;
  --color-text-light: #F7FAFC;
  --color-text-success: #38B2AC;
  --color-text-dark: #2D3748;
  --color-text-gray-dark: #4A5568;
  --color-text-error: #E53E3E;
  --color-text-muted: #718096;
  --color-text-white: #FFFFFF;
  --color-text-black: #000000;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
