// Theme toggle: switches between dark (moon) and light (sun) mode.
// The actual visual fade is handled by CSS transitions on the
// "background-color" and "color" properties defined in style.css —
// this script just flips the class and remembers the choice.

(function () {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'jeg-site-theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      body.classList.add('light');
    } else {
      body.classList.remove('light');
    }
  }

  // Load saved preference, otherwise fall back to the visitor's
  // OS-level preference, otherwise default to dark.
  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;

    const prefersLight = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }

  let currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  toggleBtn.addEventListener('click', function () {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem(STORAGE_KEY, currentTheme);
  });

  // Footer year, kept current automatically.
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();
