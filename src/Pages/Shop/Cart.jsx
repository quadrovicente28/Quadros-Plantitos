import { Link } from "react-router-dom";
import { Fade } from "@successtar/react-reveal";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTooltip,
  MDBTypography,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import React, { useState }  from "react";

import "./cart.css";

export default function Cart() {

  const [quantity, setQuantity] = React.useState(1);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }
  
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
   
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <Fade delay={200} duration={1000} left cascade>
              <div>
                <MDBCard className="mb-4">
                  <MDBCardHeader className="py-3">
                    <MDBTypography tag="h5" className="mb-0">
                      Cart - 2 items
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                        <MDBRipple
                          rippleTag="div"
                          rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                            className="w-100"
                          />
                          <Link to="">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </Link>
                        </MDBRipple>
                      </MDBCol>

                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                        <p>
                          <strong>Blue denim shirt</strong>
                        </p>
                        <p>Color: blue</p>
                        <p>Size: M</p>

                        <MDBTooltip
                          wrapperProps={{
                            size: "sm",
                            style: { backgroundColor: "#492a14" },
                          }}
                          wrapperClass="me-1 mb-2"
                          title="Remove item"
                        >
                          <MDBIcon fas icon="trash" />
                        </MDBTooltip>
                      </MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <MDBBtn className="px-3 me-2 custom-btn" onClick={decrementQuantity}>
                              <MDBIcon fas icon="minus" />
                            </MDBBtn>
                            <MDBInput className="text-center"
                              value={quantity}
                              onChange={(e) => setQuantity(Number(e.target.value))}
                              
                              min={1}
                              label="Quantity"
                              ></MDBInput>
                            <MDBBtn className="px-3 ms-2 custom-btn" onClick={incrementQuantity}>
                              <MDBIcon fas icon="plus" />
                            </MDBBtn>
                          </div>

                        <p className="text-start text-md-center">
                          <strong>${(17.99*quantity).toFixed(2)}</strong>
                        </p>
                      </MDBCol>
                    </MDBRow>

                    <hr className="my-4" />
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody>
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      height="45px"
                      src="https://logos-download.com/wp-content/uploads/2020/06/GCash_Logo.png"
                      alt="GCASH"
                    />
                    {/* <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" /> */}
                    <MDBCardImage
                      className="me-2"
                      width="45px "
                      height="45px"
                      src="https://logos-download.com/wp-content/uploads/2016/03/PayPal_Logo_2014.png"
                      alt="PayPal acceptance mark"
                    />
                  </MDBCardBody>
                </MDBCard>
              </div>
            </Fade>
          </MDBCol>
          <MDBCol md="4">
          <Fade delay={400} duration={1500} right>
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush="true">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                    <strong>$53.98</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg" className="custom-btn" onClick={toggleShow}>
                  PLACE ORDER
                </MDBBtn>

              </MDBCardBody>
            </MDBCard>
            </Fade>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size="lg">
          <MDBModalContent>
          
       
         
              <MDBCard className="border-top border-bottom border-3 border-color-custom">
                <MDBCardBody className="p-5">
                  <p className="lead fw-bold mb-5" style={{ color: "#B77445" }}>
                    Purchase Receipt
                  </p>

                  <MDBRow>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Date</p>
                      <p>10 April 2021</p>
                    </MDBCol>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>012j1gvs356c</p>
                    </MDBCol>
                  </MDBRow>

                  <div
                    className="mx-n5 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p>BEATS Solo 3 Wireless Headphones</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p>£299.99</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p className="mb-0">Shipping</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p className="mb-0">£33.00</p>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <MDBRow className="my-4">
                    <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                      <p
                        className="lead fw-bold mb-0"
                        style={{ color: "#B77445" }}
                      >
                        £262.99
                      </p>
                    </MDBCol>
                  </MDBRow>

                  <p
                    className="lead fw-bold mb-4 pb-2"
                    style={{ color: "#B77445" }}
                  >
                    Tracking Order
                  </p>

                  <MDBRow>
                    <MDBCol lg="12">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#B77445" }}
                            >
                              Ordered
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#B77445" }}
                            >
                              Shipped
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#B77445" }}
                            >
                              On the way
                            </p>
                          </li>
                          <li
                            className="list-inline-item items-list text-end"
                            style={{ marginRight: "-8px" }}
                          >
                            <p style={{ marginRight: "-8px" }}>Delivered</p>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <p className="mt-4 pt-2 mb-0">
                    Want any help?{" "}
                    <a href="#!" style={{ color: "#B77445" }}>
                      Please contact us
                    </a>
                  </p>
                  
                </MDBCardBody>
                
              </MDBCard>
         
            

            <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn className="custom-btn">DONE</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      
    

    </section>
  );
}
