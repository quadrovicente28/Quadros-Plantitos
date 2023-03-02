import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import succ from "../assets/succ.png";
// import Fade from "react-reveal/Fade";
import { Fade } from "@successtar/react-reveal";

export default function AboutUs() {
  return (
    <MDBContainer className="p-5 my-5">
      <MDBRow >
  
        <MDBCol sm="12" lg="6" className="mb-3">
        <Fade delay={200} duration={1500} left>
            <div className="d-flex justify-content-center align-items-center" style={{overflow: "hidden"}}>
                <img src={succ} alt="" className="about__img" />
            </div>
            </Fade>
        </MDBCol>
        <MDBCol sm="12" lg="6" className="mb-3">
        <Fade delay={200} duration={1500} right>
          <div className="about__data">
            <h2 className="section__title about__title">
              Who We Really Are & <br /> Why Choose Us
            </h2>

            <p className="about__description">
              We have over 4000+ unbiased reviews and our customers trust our
              plant process and delivery service every time
            </p>

            <div className="about__details">
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon "></i>
                We always deliver on time.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                We give you guides to protect and care for your plants.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                We always come over for a check-up after sale.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon"></i>
                100% money back guaranteed.
              </p>
            </div>

            <Link to="/shop" className="button--link button--flex">
              Shop Now <i className="ri-arrow-right-down-line button__icon"></i>
            </Link>
          </div>
          </Fade>
        </MDBCol>
      </MDBRow>

      <section className="steps section container">
          <div className="steps__bg">
              <h2 className="section__title-center steps__title">
                  Steps to start your <br /> plants off right
              </h2>
              
              <div className="steps__container grid">
              <Fade top duration={1500} delay={100}>
                  <div className="steps__card">
                      <div className="steps__card-number">01</div>
                      <h3 className="steps__card-title">Choose Plant</h3>
                      <p className="steps__card-description">
                          We have several varieties plants you can choose from.
                      </p>
                  </div>
              </Fade>
                <Fade top duration={1500} delay={200}>
                  <div className="steps__card">
                      <div className="steps__card-number">02</div>
                      <h3 className="steps__card-title">Place an order</h3>
                      <p className="steps__card-description">
                          Once your order is set, we move to the next step which is the shipping.
                      </p>
                  </div>
                </Fade>
                <Fade top duration={1500} delay={300}>
                  <div className="steps__card">
                      <div className="steps__card-number">03</div>
                      <h3 className="steps__card-title">Get plants delivered</h3>
                      <p className="steps__card-description">
                          Our delivery process is easy, you receive the plant direct to your door.
                      </p>
                  </div>
                </Fade>
              </div>
          </div>
      </section>
    </MDBContainer>
  );
}
