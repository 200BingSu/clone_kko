window.addEventListener("load", function () {
  // api: /apis/crew.json
  const CREW_URL = "/apis/crew.json";
  fetch(CREW_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      //최종 html 만들기
      let htmlCrew = "";

      // a 태그만 만들어서 배치하기
      let html_Atag_list = "";

      for (let i = 0; i < result.length; i++) {
        // 현재 실행되는 순서: 0, 1, 2, 3
        const obj = result[i];

        html_Atag_list += `
        <a href="${obj.link}" class="thum">
          <div class="thum-img">
            <img src="/images/${obj.imgpath}" alt="${obj.category}" />
          </div>
          <div class="thum-cate">
            <img src="/images/icon/${obj.icon}" alt="${obj.category}" />
            <span style="color=${obj.txtcolor}">${obj.category}</span>
          </div>
          <h5 class="thum-title">
          ${obj.title}
          </h5>
          <span class="thum-date">${obj.day}</span>
        </a>`;

        let tag = "";
        //3개씩 배치하는 div 형태
        //i가 0일 때, 예외처리 하기 위한 코드
        if ((i + 1) % 3 == 0) {
          tag = `<div class="list">${html_Atag_list}</div>`;
          //3개를 다 채웠다면, 다시 만들자
          // a 태그 목록만 다시 만들기 위해 비우자
          html_Atag_list = "";
        } else if (i == result.length - 1) {
          tag = `<div class="list">${html_Atag_list}</div>`;
          html_Atag_list = "";
        }

        htmlCrew += tag;
      }
      const crewTag = document.querySelector("#crew-api");
      crewTag.innerHTML = htmlCrew;
    })
    .catch(function () {});
});
