import React, { useState, useRef, useEffect } from 'react';
import { 
  MDBCol, 
  MDBContainer, 
  MDBRow, 
  MDBCard, 
  MDBCardText, 
  MDBCardBody, 
  MDBCardImage, 
  MDBBtn, 
  MDBTypography, 
  MDBIcon, 
  MDBTooltip,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput} 
  from 'mdb-react-ui-kit';
import profilebg from "../assets/profilebg.jpg";
import Pulse from "@successtar/react-reveal/Pulse";
import defaultprofileimg from '../assets/defaultprofileimg.png';

export default function Profile() {
  const auth = JSON.parse(localStorage.getItem('auth'));


  const [success, setSuccess] = useState(false);

  const [staticModal, setStaticModal] = useState(false);

    const toggleShow = () => {setStaticModal(!staticModal);
    }

  return (
    <>
    <Pulse>
    <div className="vh-100">
      <MDBContainer className="container py-5 h-100 bg-image" style={{
        backgroundImage: "url(" + profilebg + ")",
        height: "800px",
        backgroundPosition: "bottom",
      }}>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="10">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src={defaultprofileimg}
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                
                <div onClick={toggleShow} style={{position: "absolute", top: "10px", right: "10px"}}>
                  <MDBTooltip title='Edit Profile' wrapperProps={{ color: 'success' }}>
                    <MDBIcon far icon="edit" />
                  </MDBTooltip>
                </div>

                <MDBTypography tag="h4" className='custom-font2'>{auth?.fname} {auth?.lname}</MDBTypography>
                <MDBCardText className="text-muted" style={{fontSize: '13px'}}>
                  {auth?.email}
                  {/* <span className="mx-2">|</span> <a href="#!">mdbootstrap.com</a> */}
                </MDBCardText> 
                <hr className='mb-4 custom-font2'/>

                <div className="d-flex justify-content-center mt-2 mb-2">
                  <div>
                  <MDBIcon fas icon="map-marker-alt" /> <span className='custom-font2 mb-2' style={{fontSize: '17px'}}>Lapu-Lapu City, Cebu, Philippines</span><br />
                  <MDBIcon fas icon="phone" /> <span className='custom-font2 mb-2' style={{fontSize: '17px'}}>+63 927 365 1745</span>
                  </div>
                </div>
                <hr className='custom-font2'/>
                <div className="d-flex justify-content-center align-items-center">
                  <MDBCardText className="lead fw-normal mb-3 custom-font2">Purchase History</MDBCardText>
                </div>
                 <MDBRow>
                  <MDBCol className='col-3 d-none d-lg-block'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      Product Image
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-4 col-4'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      Product Description
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-1 col-2'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      Quantity
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-2 col-3'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      Unit Price
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-2 col-3'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      Total
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
                <hr className='mb-4 custom-font2'/>
                 <MDBRow className='mt-2'>
                  <MDBCol className='col-3 d-none d-lg-block'>
                    <MDBCardImage src="https://kellogggarden.com/wp-content/uploads/2021/06/Growing-Echeveria-Elegans.jpg"
                      alt="image 1" className="w-50 rounded-3" />
                  </MDBCol>
                  <MDBCol className='col-lg-4 col-4 d-flex align-items-center justify-content-center'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      Mexican Snowball
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-1 col-2 d-flex align-items-center justify-content-center'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      1
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-2 col-3 d-flex align-items-center justify-content-center'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      P 150.00
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol className='col-lg-2 col-3 d-flex align-items-center justify-content-center'>
                    <MDBTypography style={{fontSize: '13px'}} className="mb-2 custom-font2">
                      P 150.00
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
                <hr className='mb-4 custom-font2'/>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </Pulse>
    <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
                <MDBModalDialog centered size="lg" style={{ borderRadius: "none" }}>
                    <MDBModalContent> 
                        <MDBModalHeader className="d-flex justify-content-center">
                            <MDBModalTitle style={{color: "#3E6553", fontFamily: 'montana', fontSize: "28px"}}>Update Profile</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow} style={{position: "absolute", top: "10px", right: "10px"}}></MDBBtn>
                        </MDBModalHeader>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-100 px-3 py-3-lg'>

                            <form>

                                <MDBModalBody style={{display: success ? 'none' : 'block' }}>
                                
                                  <MDBRow>
                                    <MDBCol className='col-9'>
                                      <MDBInput wrapperClass=' w-100' label='Address' type='text' autoComplete="off" name='address' />
                                    </MDBCol>
                                    <MDBCol className='col-3'>
                                      <MDBInput wrapperClass=' w-100' label='Phone Number' type='phone' autoComplete="off" name='phoneNumber' />
                                    </MDBCol>
                                  </MDBRow>                           

                                </MDBModalBody>
                                <MDBModalFooter className="d-flex justify-content-center" >
                                    <MDBBtn style={{display: success ? 'none' : 'block' }} className="custom-btn px-5" color='success'>Update</MDBBtn>
                                </MDBModalFooter>
                            </form>
                        </div>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    </>
  );
}