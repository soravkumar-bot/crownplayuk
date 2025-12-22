// Lightweight JS for CrownPlayUK
// Safe for SEO & performance

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
