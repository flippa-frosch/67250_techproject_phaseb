// Greeting
function greeting(hour) {
  const greetingEl = document.getElementById("greeting");
  if(!greetingEl) return;

  if(hour < 5 || hour >= 20) {
    greetingEl.textContent = "Good night";
  } else if(hour < 12) {
    greetingEl.textContent = "Good morning";
  } else if(hour < 18) {
    greetingEl.textContent = "Good afternoon";
  } else {
    greetingEl.textContent = "Good evening";
  }
}

let now = new Date();
greeting(now.getHours());

// Update year
function addYear() {
  const copyYear = document.getElementById("copyYear");
  if(copyYear) copyYear.textContent = new Date().getFullYear();
}

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("myNavbar");
  nav.className = nav.className === "navbar" ? "navbar responsive" : "navbar";
}

// Initialize map (if exists)
if (document.getElementById("map")) {
  const map = L.map('map').setView([40.4433, -79.9436], 13); // Pittsburgh
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([40.4433, -79.9436]).addTo(map)
    .bindPopup("Our Museum Location")
    .openPopup();
}