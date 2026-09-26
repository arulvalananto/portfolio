const themeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem('portfolio-theme');
    const theme = storedTheme === 'dark' || storedTheme === 'light'
      ? storedTheme
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'light';
  }
})();`

const ThemeScript = () => <script dangerouslySetInnerHTML={{ __html: themeScript }} />

export default ThemeScript
