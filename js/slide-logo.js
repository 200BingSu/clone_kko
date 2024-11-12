window.addEventListener("load", function () {
  //    MockData
  //    {imgUrl: "경로", desc: "설명문"}
  //    [{},{},{}]
  //   api 주소: json 위치가 어디인가.
  const LOGO_DATA_URL = "/apis/logodata.json";
  // api를 통한 데이터 불러오기
  // (request 리퀘스트)
  // API를 통해 불러들여진 결과물
  // ----response
  fetch(LOGO_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      //1. json 뜯기
      // console.log(result);
      //2. 반복해서 html 태그를 생성
      let logoHtml = "";
      for (let i = 0; i < 9; i++) {
        const obj = result[i];
        const data = `<div class="swiper-slide"><img src="/images/etc/${obj.imgUrl}" alt="${obj.desc}"/></div>`;
        logoHtml += data;
      }
      // console.log("logoHtml: ", logoHtml);
      //3. 생성된 html을 원하는 곳에 배치
      const headerLogoTag = document.querySelector(
        ".header-logo-motion .swiper-wrapper"
      );
      // console.log(headerLogoTag);
      //
      headerLogoTag.innerHTML = logoHtml;
      //4. swiper 생성 및 실행
      const headerLogo = new Swiper(".header-logo-motion", {
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        speed: 300,
        autoplay: {
          delay: 200,
          disableOnInteraction: false,
        },
      });
      headerLogo.autoplay.stop();

      // 로고 추가 작업
      const logo = document.querySelector("#logo-motion");

      // 원래는 가만히 있다가: autoplay 끄기
      // 마우스 들어가면 슬라이드 작동?
      logo.addEventListener("mouseenter", function () {
        headerLogo.autoplay.start();
      });
      // 마우스 나가면 슬라이드 정지
      // 슬라이드 처음으로
      logo.addEventListener("mouseleave", function () {
        headerLogo.autoplay.stop();
        headerLogo.slideToLoop(0);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  //   const logoData ;
});
