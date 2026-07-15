// Minimal chrome: clock + theme. No framework.
(() => {
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");
  const clockEl = document.getElementById("clock");

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function syncThemeLabel() {
    const t = root.getAttribute("data-theme") || "dark";
    if (themeBtn) themeBtn.textContent = `THEME · ${t.toUpperCase()}`;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", t === "light" ? "#F4F6F9" : "#05070A");
  }
  syncThemeLabel();

  themeBtn?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncThemeLabel();
  });

  function tick() {
    if (!clockEl) return;
    const d = new Date();
    clockEl.textContent = d.toISOString().slice(11, 19);
  }
  tick();
  setInterval(tick, 1000);
})();
