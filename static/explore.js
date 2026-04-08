// Explore Page Gallery
const images = [
  { src: "../static/1.jpg", alt: "Abstract modern art installation" },
  { src: "../static/2.webp", alt: "Sculpture in the museum garden" },
  { src: "../static/3.jpg", alt: "Historic painting exhibit" },
  { src: "../static/4.jpg", alt: "Interactive art station" },
  { src: "../static/5.jpg", alt: "Contemporary photography display" }
];

let current = 0;
const gallery = document.getElementById("galleryImage");

function showImage() {
  if (!gallery) return;
  gallery.classList.add("fade-out");
  setTimeout(() => {
    gallery.src = images[current].src;
    gallery.alt = images[current].alt;
    gallery.classList.remove("fade-out");
  }, 250);
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage();
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  showImage();
  document.getElementById("nextBtn")?.addEventListener("click", nextImage);
  document.getElementById("prevBtn")?.addEventListener("click", prevImage);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });
});