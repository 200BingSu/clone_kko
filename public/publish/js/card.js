window.addEventListener("load", function () {
  //api: /apis/cards.json
  const CARD_DATA_URL = "/apis/cards.json";
  // 연산처리
  fetch(CARD_DATA_URL)
    .then(function (response) {
      //   console.log("카드: ", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      //   console.log("카드 결과: ", result);
      let htmlCard = "";
      for (let i = 0; i < 5; i++) {
        const obj = result[i];

        const tag = `
        <a href="${obj.link}" class="card-wrap">
            <div class="card-img">
                <img src="/images/${obj.imgpath}" alt="${obj.cardname}" />
            </div>
            <div class="card-info">
                <h5 class="card-cate">${obj.cardname}</h5>
                <span class="card-count">${obj.cardno}</span>
            </div>
        </a>
        `;
        // console.log("카드 태그: ", tag);
        htmlCard += tag;
      }
      const cardTag = document.querySelector(".list-card");
      //   console.log(cardTag);
      //   console.log("카드 최종 결과: ", htmlCard);
      cardTag.innerHTML = htmlCard;
    })
    .catch(function () {});
});
