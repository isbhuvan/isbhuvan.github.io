document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themingSwitcher");

  if (!themeToggle) {
    console.error("Theme switcher not found");
    return;
  }

  const THEME_KEY = "theme";
  const systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    themeToggle.checked = theme === "dark";
  }

  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) return savedTheme;
    return systemDarkQuery.matches ? "dark" : "light";
  }

  // Initial load
  applyTheme(getInitialTheme());

  // Toggle handler
  themeToggle.addEventListener("change", () => {
    applyTheme(themeToggle.checked ? "dark" : "light");
  });

  // System theme change (only if user did not override)
  systemDarkQuery.addEventListener("change", e => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
});

window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  
  // Start the fade-out
  preloader.classList.add("preloader-hidden");

  // Optional: Completely remove from DOM after the fade (0.5s)
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); 
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#mainNav",
    offset: 100
  });
});