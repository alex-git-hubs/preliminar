const swiper = new Swiper(".swiper-hero", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 5,
  slidespergroupauto: false,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  autoHeight: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets", // por defecto es bullest
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
