$(document).ready(function () {
  var LOGO_DATA_URL = "/apis/logodata.json";

  $.ajax({
    url: LOGO_DATA_URL,
    method: "GET",
    datatype: "json",
    success: function (result) {
      var logoHtml = "";
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        var data = "";
        data += "<div class='swiper-slide'>";
        data += "<img src='";
        data += "/images/etc/";
        data += result[i].imgUrl;
        data += "' alt='";
        data += result[i].desc;
        data += "'/>";
        data += "</div>";

        logoHtml += data;
      }

      const headerLogoTag = document.querySelector(
        ".header-logo-motion .swiper-wrapper"
      );
      headerLogoTag.innerHTML = logoHtml;
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
      const logo = document.querySelector("#logo-motion");
      logo.addEventListener("mouseenter", function () {
        headerLogo.autoplay.start();
      });
      logo.addEventListener("mouseleave", function () {
        headerLogo.autoplay.stop();
        headerLogo.slideToLoop(0);
      });
    },
    error: function (error) {},
  });

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
      var headerLogoTag = $(".header-logo-motion .swiper-wrapper");
      headerLogoTag.html(logoHtml);
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
