import { createGlobalStyles } from 'goober/global'

export const GlobalStyle = createGlobalStyles`
  :root {
    --cool-grey-500:#6B7280;
    --cool-grey-600:#4B5563;
    --cool-grey-700:#374151;
    --cool-grey-800:#1F2937;
    --cool-grey-900:#111827;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--cool-grey-900);
    color: #fff;
  }
`
