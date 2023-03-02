import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="d-flex justify-content-center w-100">
    <MDBRow className="container justify-content-center">
      <MDBCol  md='8' sm='10'>
        <MDBCard className="my-5">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay d-flex flex-column align-items-center"
            style={{minWidth: "300px", maxWidth: "600px", margin: "auto", height: "400px", }}
          >
            <MDBCardImage
              src="https://assets.eflorist.com/site/32084100/assets/products/CZM_/sku4760117.jpg"
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody className="d-flex flex-column align-items-center">
            <MDBCardTitle>Succulent</MDBCardTitle>
            <MDBCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste
              obcaecati distinctio sapiente molestiae amet, assumenda, sint
              deleniti, exercitationem placeat iusto doloremque! Perferendis
              voluptatum ipsa, doloremque culpa praesentium accusantium eaque.
            </MDBCardText>
            User
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}
