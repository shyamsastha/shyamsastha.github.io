document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const html = document.documentElement; // Correct reference to <html>

  // Ensure the button exists before attaching the event
  if (!toggleButton) {
    console.error("Dark mode toggle button not found!");
    return;
  }

  // Load saved preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    html.classList.add("dark");
    toggleButton.innerText = "☀️ Light Mode";
  } else {
    html.classList.remove("dark");
    toggleButton.innerText = "🌙 Dark Mode";
  }

  toggleButton.addEventListener("click", function () {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "enabled");
      toggleButton.innerText = "☀️ Light Mode";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      toggleButton.innerText = "🌙 Dark Mode";
    }
  });
});
