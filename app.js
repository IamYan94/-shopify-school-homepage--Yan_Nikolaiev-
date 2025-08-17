// Ensure code runs after DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Swiper
  new Swiper(".hero__swiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 4000 },
  });
});
