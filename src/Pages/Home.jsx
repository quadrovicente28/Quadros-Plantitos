import Header from "../Components/Header";
import AboutUs from "./Aboutus";
import MDBFaq from "./MDBFaq";
import ScrollToTop from "react-scroll-to-top";

function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <MDBFaq />
      <ScrollToTop
        smooth
        color="#3E6553"
        />
    </>
  );
}
export default Home;
