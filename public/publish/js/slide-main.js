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
      // 변경: 4라는 숫자를 .length 즉 길이로 바꿈.
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];

        const tag = `
        <div class="swiper-slide" style="position: relative" data-pc="${obj.pc}" data-mb="${obj.mb}">
          <a href="${obj.url}">
            <span class="visual-title"
              style="position: absolute;
                    right:40px;
                    bottom:40px;
                    font-size: 40px;
                    color: #fff;
                    font-weight: 700;
                    text-align: right;">${obj.title}</span>  
            <img src="/images/${obj.pic}" alt="${obj.title}" />
          </a>
        </div>`;
        //  모든 html 글을 하나로 합치기
        htmlMAIN += tag;
      }
      // 추가  : 현재 PC 화면인지 아니지를 먼저 구분합니다.
      // 추가 : 현재 어떤 상태인지를 먼저 저장해 둡니다.
      // 추가: 우리는 document.querySelect로
      const slideList = document.querySelectorAll(
        ".visual-slide .swiper-wrapper .swiper-slide",
      );

      // 나중에 다시 써라
      slideList.forEach(function (aaa) {
        // console.log("콘솔 찍히고 있나요?", aaa);
      });

      let windowState = "PC";
      // 윈도우 너비 파악
      const windowWidth = window.innerWidth;
      // 조건에 따라서 버전 확인
      if (windowWidth > 1024) {
        if (windowState != "PC") {
          windowState = "PC";
          console.log("PC 버전");
        }
      } else {
        if (windowState != "MB") {
          windowState = "MB";
          console.log("MB 버전");
        }
      }
      console.log(windowState);

      window.addEventListener("resize", function () {
        // 윈도우 너비 파악
        const windowWidth = window.innerWidth;
        // 조건에 따라서 버전 확인
        if (windowWidth > 1024) {
          if (windowState != "PC") {
            windowState = "PC";
            console.log("PC 버전");
          }
        } else {
          if (windowState != "MB") {
            windowState = "MB";
            console.log("MB 버전");
          }
        }
      });

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
