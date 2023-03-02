
import loginImage from '../../assets/succulent.jpg'
import mainLogo from "../../assets/logo-weed-with.png"
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
// react-hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState, useRef } from 'react';
import { Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const schema = yup.object({
  email: yup.string().email("Please provide a valid email adress.").required("Email is required")
}).required();

export default function ForgotPassword() {

  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const form = useRef();
  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_hiwec4g', 'template_2ck5d1x', form.current, 'FKuzSayL-Q2vhkqn0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSuccess(true);
  };

  return (
    <MDBContainer fluid>
      <MDBRow  style={{minHeight: "100vh"}}>

        <MDBCol sm='6'>
           
       <MDBRow className='d-flex justify-content-center'>
        <MDBCol sm="12" lg="10" xxl='7'>
          <div className='d-flex flex-row ps-5 pt-5 ' >
            <img src={mainLogo} width="90%" alt="healing for everyone"></img>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Forgot Password</h3>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <MDBInput wrapperClass=' mx-5 w-100' label='Email address' id='formControlLg' size="lg" autoComplete="off" {...register("email")}/>
              <p className='form-err-msg mx-5 w-100'>{errors.email?.message}</p>

              <MDBBtn className="mt-2 mb-4 px-5 mx-5 w-100 custom-btn" size='lg'>Continue</MDBBtn>
            </form>
            <div className='ms-5 w-100' style={{display: success ? 'block' : 'none' }}>
              <Alert key='success' variant='success' className='text-center p-3'>
              You will receive an email shortly with more information about resetting your password.
              </Alert>
            </div>
            <p className='ms-5'>Got your password? <Link to="/login" className="link-custom">Log In here</Link></p>

          </div>
          </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol sm='6' style={{overflow: 'hidden', height: '100vh'}} className='d-none d-sm-block px-0'>
          <img src={loginImage}
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'center', minHeight: '100vh', backgroundAttachment: 'fixed'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
