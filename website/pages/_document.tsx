import { Html, Head, Main, NextScript } from 'next/document'

// Inline script to apply the correct theme class before first paint,
// preventing a flash of wrong theme.
// NOTE: STORAGE_KEY and EXPIRY_MS must match the values in website/hooks/useTheme.tsx.
// This is an inline script (runs before React hydration), so it cannot import shared modules.
const themeScript = `
(function() {
  var STORAGE_KEY = 'dds-theme';
  var EXPIRY_MS = 30 * 24 * 60 * 60 * 1000;
  var stored = null;
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (Date.now() <= parsed.expiry) {
        stored = parsed.theme;
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  } catch (e) {}
  var isDark = stored
    ? stored === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
