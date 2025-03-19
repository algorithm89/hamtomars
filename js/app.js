document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Toggle menu on click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Reset menu state on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
    }
  });
});
