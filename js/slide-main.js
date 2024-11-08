window.addEventListener("load", function () {
  const visualSlideSW = new Swiper(".visual-slide", {
    loop: true,
    pagination: {
      el: ".visual-slide .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
  });
  // 개발자 추가 작업: 마우스가 enter가 되면
  const visualSlide = this.document.querySelector(".visual-slide");
  console.log(visualSlide);
  visualSlide.addEventListener("mouseenter", function () {
    visualSlideSW.autoplay.stop();
  });
  visualSlide.addEventListener("mouseleave", function () {
    visualSlideSW.autoplay.start();
  });
});
