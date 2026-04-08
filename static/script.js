// Global site JS

document.addEventListener("DOMContentLoaded", () => {
  greeting(new Date().getHours());
  addYear();
});

// Greeting
function greeting(hour) {
  const greetingEl = document.getElementById("greeting");
  if (!greetingEl) return;

  if (hour < 5 || hour >= 20) {
    greetingEl.textContent = "Good night";
  } else if (hour < 12) {
    greetingEl.textContent = "Good morning";
  } else if (hour < 18) {
    greetingEl.textContent = "Good afternoon";
  } else {
    greetingEl.textContent = "Good evening";
  }
}

// Update footer year
function addYear() {
  const copyYear = document.getElementById("copyYear");
  if (copyYear) {
    copyYear.textContent = new Date().getFullYear();
  }
}

// Mobile navigation toggle
function toggleMenu() {
  const nav = document.getElementById("myNavbar");
  if (nav) {
    nav.classList.toggle("responsive");
  }
}

// Map (only initialize if map exists)
document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  const map = L.map('map').setView([40.4433, -79.9436], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([40.4433, -79.9436]).addTo(map)
    .bindPopup("Our Museum Location")
    .openPopup();
});