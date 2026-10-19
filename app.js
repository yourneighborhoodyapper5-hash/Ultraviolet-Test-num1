const BACKEND_URL = "";

const form = document.querySelector("#connect-form");
const status = document.querySelector("#status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const target = document.querySelector("#target").value.trim();

  if (!BACKEND_URL) {
    status.textContent =
      "The frontend is ready, but the backend has not been configured.";
    return;
  }

  try {
    const response = await fetch(
      `${BACKEND_URL}/health`,
      { credentials: "omit" }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    status.textContent = `Backend reachable. Target: ${target}`;
  } catch (error) {
    status.textContent = `Backend connection failed: ${error.message}`;
  }
});
