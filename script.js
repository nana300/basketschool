// スクール用Swiper
const schoolSwiper = new Swiper(".schoolSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".schoolSwiper .swiper-button-next",
    prevEl: ".schoolSwiper .swiper-button-prev"
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 30 }
  }
});

// コーチ用Swiper
const coachSwiper = new Swiper(".coachSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 2.5,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 3.5,
      spaceBetween: 30
    }
  },
  pagination: {
    el: ".coachSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".coachSwiper .swiper-button-next",
    prevEl: ".coachSwiper .swiper-button-prev",
  }
});
