document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const root = document.documentElement; // 👈 targets <html>

  // Ensure the button exists before attaching the event
  if (!toggleButton) {
    console.error("Dark mode toggle button not found!");
    return;
  }

  // Load saved preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    root.classList.add("dark");
    toggleButton.innerText = "☀️ Light Mode";
  }

  toggleButton.addEventListener("click", function () {
    root.classList.toggle("dark");

    if (root.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "enabled");
      toggleButton.innerText = "☀️ Light Mode";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      toggleButton.innerText = "🌙 Dark Mode";
    }
  });
});
