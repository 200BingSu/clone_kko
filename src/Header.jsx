import { useEffect } from "react";
import "./css/header.css";
function Header() {
  //자바스크립트 코딩 자리
  // window.addEventListener("load", function(){});
  useEffect(function () {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
      const scrollPositionY = window.scrollY;
      if (scrollPositionY > 0) {
        header.classList.add("header-active");
      } else {
        header.classList.remove("header-active");
      }
    });

    const mobileButton = document.querySelector("#mb-menu-bt");
    const mobileButtonImage = document.querySelector("#mb-menu-bt img");
    const closeIcon = "./images/icon/icon-close.png";
    const openIcon = "./images/icon/icon-hbr.png";
    const mobileMenuBg = document.querySelector(".bg-mb-menu");
    const mobileMenu = document.querySelector(".mb-menu");

    mobileButton.addEventListener("click", function () {
      const imageSrc = mobileButtonImage.getAttribute("src");
      if (imageSrc == openIcon) {
        mobileButtonImage.setAttribute("src", closeIcon);
        mobileMenuBg.classList.add("bg-mb-menu-active");
        mobileMenu.classList.add("mb-menu-active");
      } else {
        mobileButtonImage.setAttribute("src", openIcon);
        mobileMenuBg.classList.remove("bg-mb-menu-active");
        mobileMenu.classList.remove("mb-menu-active");
      }
    });

    window.addEventListener("resize", function () {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1024) {
        mobileButtonImage.setAttribute("src", openIcon);
        mobileMenuBg.classList.remove("bg-mb-menu-active");
        mobileMenu.classList.remove("mb-menu-active");
      }
    });
  }, []);

  return (
    <header className="header">
      <div className="layout">
        <div id="logo" className="header-logo">
          <a href="/" className="header-logo-link">
            <img src="/images/etc/logo-kakao.png" alt="카카오블로그" />
          </a>

          <div className="swiper header-logo-motion">
            <div className="swiper-wrapper"></div>
          </div>
        </div>

        <div className="navigation">
          <a href="#">소식</a>
          <a href="#">팀 & 크루</a>
          <a href="#">영입</a>

          <button id="search">
            <img src="/images/icon/icon-search.png" alt="" />
          </button>

          <button id="mb-menu-bt">
            <img src="/images/icon/icon-hbr.png" alt="모바일메뉴" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
