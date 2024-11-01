# 참고사항

## 1. 아이콘 폰트

- https://fontawesome.com/
- https://xpressengine.github.io/XEIcon/
  : index.html `<link>` 태그 확인

### 1.1 본 프로젝트 활용 아이콘 폰트

- https://react-icons.github.io/react-icons/

## 2. css 초기화

- reset.css
  : https://meyerweb.com/eric/tools/css/reset/reset.css
- normalize.css
  : https://necolas.github.io/normalize.css/8.0.1/normalize.css

- 우리가 만든 common.css 파일

```css
@charset "utf-8";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none; */
}
a {
  color: #1e1e1e;
  text-decoration: none;
}
ul,
ol,
li {
  list-style: none;
}
html {
  font-size: 14px;
  overflow-x: hidden;
}

body {
  font-family: "Inter", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-optical-sizing: auto;
  color: #1e1e1e;
  font-size: 14px;
}
```

- 필수 주의 사항

```
반드시 reset 또는 normalize를 먼저 배치하고 본인의 css를 배치해야합니다.
그렇지 않으면 우리 css가 덮어서 정상적 구성 불가능
```

```html
<link
  rel="stylesheet"
  href="https://meyerweb.com/eric/tools/css/reset/reset.css"
/>
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
/>
<link rel="stylesheet" href="./css/common.css" />
<link rel="stylesheet" href="./css/header.css" />
<link rel="stylesheet" href="./css/main.css" />
<link rel="stylesheet" href="./css/card-list.css" />
<link rel="stylesheet" href="./css/footer.css" />
```

## 3. inline과 block 정리, inline-block 포함

### 3.1 display: inline

```
<span>, <b>, <strong>, <a>, <img> ...
```

- 글자처럼 옆으로 계속 배치된다
- 너비, 높이 비활성
- 패딩, 마진 일부 미지원

### 3.2 display: block

```
<div>, <header>, <main>, <footer>, <ul>, <li>, <h1>~<h6> ...
```

- 자동으로 너비가 100% 기본값
- 너비, 높이, 마진, 패딩 ... 모두 가능

### 3.3 display: inline-block

- inline 이면서 너비, 높이등을 셋팅, 즞 block도 같이 부여
- display: inline-block
- 기본 너비는 지정하지 않으면 내용만큼 소비
- 가로로 연속 배치 가능

## 4. CSS 정리

- VSCode: PostCSS Sorting 확장프로그램 설치

```
정렬 속성 셋팅
관리 도구 > 설정 메뉴 > setting.json 검색 > setting.json 찾아서 클릭
```

- 다음 항목을 추가한다.(쉼표 꼭 넣어주자)

```json
"postcssSorting.config": {
  "properties-order": ["display", "list-style", "position", "top", "right", "bottom", "left", "float", "clear", "width", "height", "padding", "margin", "border", "background", "color", "font", "font-weight", "font-size", "line-height", "font-family", "letter-spacing", "text-decoration", "text-align", "verticla-align", "white-space", "content", "animation"]
}
```

- 키보드 단축키 셋팅하기

```
관리도구 > [바로가기 키] > 검색창: postcss sorting-run
> 중복 없는 키로 설정
(현재 단축키: Ctrl + Alt + C 로 설정되어 있음)
```

## 5. CSS 표준검사

- https://jigsaw.w3.org/css-validator
- https://caniuse.com

## 6. html 표준검사

- https://validator.w3.org
- https://caniuse.com

## 7. favicon

- 예의, 신뢰도 향상
