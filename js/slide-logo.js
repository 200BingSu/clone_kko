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
      console.log(result);
      //2. 반복해서 html 태그를 생성
      let logoHtml = "";
      for (let i = 0; i < 9; i++) {
        const data = `<img src="${result[i].imgUrl}" alt="${result[i.desc]}"/>`;
        logoHtml += data;
      }
      console.log("logoHtml: ", logoHtml);
      //3. 생성된 html을 원하는 곳에 배치
      //4. swiper 생성 및 실행
    })
    .catch(function (error) {
      console.log(error);
    });
  //   const logoData ;

  const headerLogo = new Swiper(".header-logo-motion", {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
