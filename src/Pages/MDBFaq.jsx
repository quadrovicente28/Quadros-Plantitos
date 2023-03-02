import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";
import "../Css/faq.css";
// import Fade from "react-reveal/Fade";
import { Fade } from "@successtar/react-reveal";

export default function MDBFaq() {
  return (
    <section className="questions section" id="faqs">
      <h2 className="section__title-center questions__title container">
        Frequently asked questions
      </h2>

      <MDBAccordion className="questions__container container grid">
        <Fade top cascade delay={400}>
          <div className="questions__group">
            <MDBAccordionItem
              collapseId={1}
              headerTitle={
                <>
                  <MDBIcon far icon="question-circle" /> &nbsp; My flowers are
                  falling off or dying?
                </>
              }
              className="questions__item shadow-5-strong"
            >
              <p className="questions__description">
                Plants are easy way to add color energy and transform your space
                but which planet is for you. Choosing the right plant.
              </p>
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={2}
              headerTitle={
                <>
                  <MDBIcon far icon="question-circle" /> &nbsp;What causes
                  leaves to become pale?
                </>
              }
              className="questions__item shadow-5-strong"
            >
              <p className="questions__description">
                Plants are easy way to add color energy and transform your space
                but which planet is for you. Choosing the right plant.
              </p>
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={3}
              headerTitle={
                <>
                  <MDBIcon far icon="question-circle" /> &nbsp;What causes brown
                  crispy leaves?
                </>
              }
              className="questions__item shadow-5-strong"
            >
              <p className="questions__description">
                Plants are easy way to add color energy and transform your space
                but which planet is for you. Choosing the right plant.
              </p>
            </MDBAccordionItem>
          </div>
        </Fade>
        <Fade top cascade delay={600}>
          <div className="questions__group">
            <MDBAccordionItem
              collapseId={4}
              headerTitle={
                <>
                  <MDBIcon far icon="question-circle" /> &nbsp;How do i choose a
                  plant?
                </>
              }
              className="questions__item shadow-5-strong"
            >
              <p className="questions__description">
                Plants are easy way to add color energy and transform your space
                but which planet is for you. Choosing the right plant.
              </p>
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={5}
              headerTitle={
                <>
                  <MDBIcon far icon="question-circle" /> &nbsp;How do I change
                  the pots?
                </>
              }
              className="questions__item shadow-5-strong"
            >
              <p className="questions__description">
                Plants are easy way to add color energy and transform your space
                but which planet is for you. Choosing the right plant.
              </p>
            </MDBAccordionItem>

            <MDBAccordionItem
              collapseId={6}
              headerTitle={
                <>
                  <MDBIcon far icon="question-circle" /> &nbsp;Why are gnats
                  flying around my plant?
                </>
              }
              className="questions__item shadow-5-strong"
            >
              <p className="questions__description">
                Plants are easy way to add color energy and transform your space
                but which planet is for you. Choosing the right plant.
              </p>
            </MDBAccordionItem>
          </div>
        </Fade>
      </MDBAccordion>
    </section>
  );
}
