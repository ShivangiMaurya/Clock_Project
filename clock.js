const timeDisplay = document.getElementById("time");
const toggleFormatButton = document.getElementById("toggleFormat");

let is24HourFormat = false;

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (!is24HourFormat) {
    hours = hours % 12 || 12; // Convert to 12-hour format
  }

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timeDisplay.textContent = formattedTime;
}

toggleFormatButton.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  toggleFormatButton.textContent = is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour";
});

// Update the time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to avoid delay
