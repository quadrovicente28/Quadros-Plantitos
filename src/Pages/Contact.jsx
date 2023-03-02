import React, { useState, useRef, useEffect } from 'react';
import contact2image from "../assets/contact2image.jpg";
import emailjs from '@emailjs/browser';

import {
  MDBBtn,
  MDBTypography,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} 
from 'mdb-react-ui-kit';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../Css/Contact.css';
import { Alert } from 'react-bootstrap';

const schema = yup.object({
    fname: yup.string().required("Please provide your first name"),
    lname: yup.string().required("Please provide your last name"),
    email: yup.string().email("Please provide valid email adress.").required("Email is required"),
    sendMessage: yup.string().required("A message is required")
}).required();

export default function Contact() {
    const [success, setSuccess] = useState(false);
    

    //for validation hook-form contact us
    const { register, handleSubmit, reset, formState:{ errors } } = useForm({resolver: yupResolver(schema)
    });
    const form = useRef();
    const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_hiwec4g', 'template_7rtfev7', form.current, 'FKuzSayL-Q2vhkqn0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSuccess(true);
  };

    const [staticModal, setStaticModal] = useState(false);

    const toggleShow = () => {setStaticModal(!staticModal);
      setSuccess(false);
      reset();
    }



    // const onSubmit = data => {
    //     console.log(data);
    //     alert(data);
    // }
    
  return (
    <div
      className="p-5 text-center bg-image container"
      style={{
        backgroundImage: "url(" + contact2image + ")",
        height: "800px",
        backgroundPosition: "left center",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <div className="d-flex justify-content-left-lg justify-content-center-md align-items-center h-100">
          <div className="text-black mx-5-md" style={{maxWidth:"600px"}}>
            <MDBTypography
              tag="div"
              className="display-3 pb-3 mb-3 border-bottom custom-font"
            >
              Contact Plantitos
            </MDBTypography>
            <MDBTypography blockquote className="mb-3 mx-5 custom-font2">
              Hey there! We love hearing from you, so please don't hesitate to get in touch with us.
            </MDBTypography>

            <MDBBtn
                className="mx-2 custom-btn"
                style={{ backgroundColor: "#B77445" }}
                onClick={toggleShow}>
                Get In Touch
            </MDBBtn>
            <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
                <MDBModalDialog centered size="lg" style={{ borderRadius: "none" }}>
                    <MDBModalContent> 
                        <MDBModalHeader className="d-flex justify-content-center">
                            <MDBModalTitle style={{color: "#3E6553", fontFamily: 'montana', fontSize: "28px"}}>Contact Plantitos</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow} style={{position: "absolute", top: "10px", right: "10px"}}></MDBBtn>
                        </MDBModalHeader>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-100 px-3 py-3-lg'>

                            <form ref={form} onSubmit={handleSubmit(sendEmail)}>

                                <MDBModalBody style={{display: success ? 'none' : 'block' }}>
                
                                  <MDBRow>
                                    <MDBCol col='6'>
                                    <MDBInput wrapperClass=' w-100' label='First name' type='text' autoComplete="off" name='fname' {...register("fname")}/>
                                    <p className='form-err-msg  w-100'>{errors.fname?.message}</p>
                                    </MDBCol>
                                    <MDBCol col='6'>
                                    <MDBInput wrapperClass=' w-100' label='Last name' type='text' autoComplete="off" name='lname' {...register("lname")}/>
                                    <p className='form-err-msg  w-100'>{errors.lname?.message}</p>
                                    </MDBCol>
                                  </MDBRow>

                                  <MDBInput wrapperClass='mt-2  w-100' label='Email' id='form3' autoComplete="off" {...register("email")}/>
                                  <p className='form-err-msg  w-100'>{errors.email?.message}</p>
                                  
                                  
                                  <div className="form-floating">
                                    <textarea className="form-control custom-textarea mt-4 w-100" id="sendmessage" name='sendmessage' style={{height: "350px"}} {...register("sendMessage")}></textarea>
                                    <label htmlFor="sendmessage">Message</label>
                                  </div>                                    
                                  <p className='form-err-msg  w-100'>{errors.sendMessage?.message}</p>
                                </MDBModalBody>

                                <MDBModalBody style={{display: success ? 'block' : 'none' }}>
                                  <Alert key='success' variant='success' className='text-center p-3'>
                                    Your message has been sent successfully. Thank you!
                                  </Alert>
                                </MDBModalBody>
                                <MDBModalFooter className="d-flex justify-content-center" >
                                    <MDBBtn style={{display: success ? 'none' : 'block' }} className="custom-btn px-5" color='success'>Send</MDBBtn>
                                </MDBModalFooter>
                            </form>
                        </div>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
          </div>
        </div>
      </div>
    </div>
  );
}


