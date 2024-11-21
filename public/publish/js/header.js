//jQuery의 목적은 2가지
//html 및 css 제어
//외부데이터 연동

//html과 css가 화면에 보일 준비가 끝나면
//(img, font, mp3, mp4 등은 로딩 체크를 못함)
$(document).ready(function () {
  var header = $(".header");
  console.log(header);
  //스크롤 체크하기
  $(window).on("scroll", function () {
    var scrollPositionY = $(window).scrollTop();
    if (scrollPositionY > 0) {
      header.addClass("header-active");
    } else {
      header.removeClass("header-active");
    }
  });
});

//협업에서는 소스를 덮어쓰면 안된다. (소스 컨벤션이 중요)

// 이미지 바꾸기 및 메뉴 펼침
$(document).ready(function () {
  var mobileButton = $("#mb-menu-bt");
  var mobileButtonImage = $("#mb-menu-bt img");
  var closeIcon = "./images/icon/icon-close.png";
  var openIcon = "./images/icon/icon-hbr.png";
  var mobileMenuBg = $(".bg-mb-menu");
  var mobileMenu = $(".mb-menu");
  mobileButton.on("click", function () {
    var imageSrc = mobileButtonImage.attr("src");
    if (imageSrc == openIcon) {
      mobileButtonImage.attr("src", closeIcon);
      mobileMenuBg.addClass("bg-mb-menu-active");
      mobileMenu.addClass("mb-menu-active");
    } else {
      mobileButtonImage.attr("src", openIcon);
      mobileMenuBg.removeClass("bg-mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });
  $(window).on("resize", function () {
    var windowWidth = $(window).width();
    if (windowWidth > 1024) {
      //모바일 메뉴 버튼을 원래대로 되돌린다.
      mobileButtonImage.attr("src", openIcon);
      mobileMenuBg.removeClass("bg-mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });
});
