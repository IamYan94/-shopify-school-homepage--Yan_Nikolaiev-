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

/*-- SPOTLIGHT --*/
const thumbsContainer = document.getElementById("thumbs");
const mainImage = document.getElementById("mainImage");
const price = document.getElementById("price");
const colorBtns = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");

function loadThumbs(colorNum) {
  thumbsContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button");
    btn.className = "thumb" + (i === 1 ? " thumb--active" : "");
    btn.innerHTML = `<img src="images/Color ${colorNum}.${i}.jpg" alt="Thumbnail ${i}">`;

    btn.addEventListener("click", () => {
      document
        .querySelector(".thumb--active")
        ?.classList.remove("thumb--active");
      btn.classList.add("thumb--active");
      mainImage.src = `images/Color ${colorNum}.${i}.jpg`;
    });

    thumbsContainer.appendChild(btn);
  }

  mainImage.src = `images/Color ${colorNum}.1.jpg`;
}

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    colorBtns.forEach((x) => {
      x.classList.remove("color--active");
      x.setAttribute("aria-checked", "false");
    });
    btn.classList.add("color--active");
    btn.setAttribute("aria-checked", "true");

    loadThumbs(btn.dataset.color);
    price.textContent = `$${btn.dataset.price}.00`;
  });
});

sizes.forEach((s) =>
  s.addEventListener("click", () => {
    document.querySelector(".size--active")?.classList.remove("size--active");
    s.classList.add("size--active");
  })
);

loadThumbs(1);
