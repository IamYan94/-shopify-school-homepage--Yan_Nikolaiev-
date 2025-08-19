/*-Hero-*/

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".hero__swiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 700,
  });
});
/*-Featured-*/
document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".featured__swiper");
  const wrapper = swiperEl.querySelector(".swiper-wrapper");
  const originals = Array.from(wrapper.children);
  while (wrapper.children.length < 6) {
    originals.forEach((s) => wrapper.appendChild(s.cloneNode(true)));
  }
  const nextBtn = document.querySelector(".featured__arrow--next");

  const swiper = new Swiper(swiperEl, {
    loop: true,
    slidesPerView: 1.1,
    spaceBetween: 16,
    allowSlidePrev: false,
    navigation: { nextEl: nextBtn },
    breakpoints: {
      768: { slidesPerView: 2.5 },
      1280: { slidesPerView: 4 },
    },
  });
  nextBtn.addEventListener("click", () => swiper.slideNext());
});
