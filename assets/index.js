$(document).ready(function () {
  Fancybox.bind("[data-fancybox]");

  let about = new Swiper(".about__slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".about__swiper-container .swiper__right",
      prevEl: ".about__swiper-container .swiper__left",
    },
  });

  let reviews = new Swiper(".reviews__slider", {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    navigation: {
      nextEl: ".reviews .swiper__right",
      prevEl: ".reviews .swiper__left",
    },
  });

  let moments = new Swiper(".moments__slider", {
    slidesPerView: "auto",
    autoHeight: true,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".moments .swiper__right",
      prevEl: ".moments .swiper__left",
    },
  });

  let clients = new Swiper(".clients__slider", {
    slidesPerView: 5,
    autoHeight: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".clients .swiper__right",
      prevEl: ".clients .swiper__left",
    },
  });
});
