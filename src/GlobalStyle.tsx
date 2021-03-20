import { createGlobalStyles } from 'goober/global'

export const GlobalStyle = createGlobalStyles`
  :root {
    --white: #fff;

    --grey-100: #f3f4f6;
    --grey-200: #e5e7eb;
    --grey-300: #dfe1e6;
    --grey-400: #d1d5db;
    --grey-700: #42526e;
    --grey-800: #253858;
    --grey-900: #111827;

    --blue-100: #eff6ff;
    --blue-200: #dbeafe;
    --blue-300: #2563eb;
    --blue: #1d4ed8;

    --yellow-light: #fef3c7;
    --yellow-dark: #92400e;

    --green-light: #dcfce7;
    --green-dark: #166534;

    --red-light: #fee2e2;
    --red-dark: #991b1b;

    --sans-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    --radius-small: 3px;
    --radius: 4px;

    --cool-grey-500: #6B7280;
    --cool-grey-600: #4B5563;
    --cool-grey-700: #374151;
    --cool-grey-800: #1F2937;
    --cool-grey-900: #111827;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: var(--sans-font-family);
    color: var(--grey-900);
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    font-variant-numeric: tabular-nums;
  }
`
