import MainTop from "./MainTop";
import MbCardSlide from "./MbCardSlide";
import "./css/main.css";
import "./css/main-content.css";
import "./css/main-slide.css";
import "./css/card-list.css";

function Content() {
  return (
    <main className="main">
      <MainTop></MainTop>
      <MbCardSlide></MbCardSlide>
    </main>
  );
}

export default Content;
