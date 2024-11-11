window.addEventListener("load", function () {
  //api:/apis/main.json
  const MAIN_SLIDE_URL = "/apis/main.json";
  fetch(MAIN_SLIDE_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let htmlMAIN = "";
      for (let i = 0; i < 4; i++) {
        const obj = result[i];

        const tag = `
        <div class="swiper-slide" style="position: relative">
          <a href="${obj.url}">
            <span class="visual-title"
              style="position: absolute;
                    right:40px;
                    bottom:40px;
                    font-size: 40px;
                    color: #fff;
                    font-weight: 700;
                    text-align: right;">${obj.title}</span>  
            <img src="./images/${obj.pic}" alt="${obj.title}" />
          </a>
        </div>`;
        htmlMAIN += tag;
      }
      //console.log(htmlMAIN);
      const mainSlideTag = document.querySelector("#visual-slide-api");
      mainSlideTag.innerHTML = htmlMAIN;
      //스와이프
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
      // 개발자 추가 작업: 마우스가 enter가 되면 슬라이드 정지
      const visualSlide = document.querySelector(".visual-slide");
      visualSlide.addEventListener("mouseenter", function () {
        visualSlideSW.autoplay.stop();
      });
      visualSlide.addEventListener("mouseleave", function () {
        visualSlideSW.autoplay.start();
      });
    })
    .catch(function () {});
});
