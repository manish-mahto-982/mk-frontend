const swiper = new Swiper(".swiper", {
  // // Optional parameters
  // direction: "vertical",
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  slidesPerView: 2.25,
  spaceBetween: "20px",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // position: "bottom",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
