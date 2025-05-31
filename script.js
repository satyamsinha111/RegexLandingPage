document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save preference
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Apply saved theme on load
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
  }
});
