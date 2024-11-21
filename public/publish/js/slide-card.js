window.addEventListener("load", function () {
  const CARD_DATA_URL = "/apis/cards.json";
  // api 연동
  fetch(CARD_DATA_URL)
    .then(function (response) {
      //console.log("카드: ", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // console.log("카드 결과: ", result);
      let htmlCard = "";
      for (let i = 0; i < 5; i++) {
        const obj = result[i];
        const tag = `
        <div class="swiper-slide">
           <a href="${obj.link}" class="card-wrap">
           <div class="card-img">
             <img src="/images/${obj.imgpath}" alt="${obj.cardname}" />
           </div>
           <div class="card-info">
             <h5 class="card-cate">${obj.cardname}</h5>
            <span class="card-count">${obj.cardno}</span>
           </div>
           </a>
        </div>`;
        // console.log("태그: ", tag);
        htmlCard += tag;
        // console.log(htmlCard);
        const cardSlideTag = document.querySelector("#card-slide");
        // console.log(cardSlide);
        cardSlideTag.innerHTML = htmlCard;
        //스와이퍼
        const cardSlide = new Swiper(".mb-card-slide-wrap", {
          slidesPerView: 4,
          spaceBetween: 20,
          loop: true,
        });
      }
    });
});
