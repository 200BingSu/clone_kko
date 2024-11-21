import Header from "./Header";
import Footer from "./Footer";
import MbMenu from "./MbMenu";
import Content from "./Content";

function Page() {
  return (
    <>
      {/* 반투명 배경 */}
      <div className="bg-mb-menu"></div>
      <Header></Header>
      <MbMenu></MbMenu>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default Page;
