document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Ensure the button exists before attaching the event
  if (!toggleButton) {
    console.error("Dark mode toggle button not found!");
    return;
  }

  // Load dark mode state from localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.innerText = "☀️ Light Mode";
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      toggleButton.innerText = "☀️ Light Mode";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      toggleButton.innerText = "🌙 Dark Mode";
    }
  });
});
