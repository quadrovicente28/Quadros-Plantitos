import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "../../api/axios";
const REGISTER_URL = "/user/create";

import { Alert } from "react-bootstrap";

import loginImage from "../../assets/succulent.jpg";
import mainLogo from "../../assets/logo-weed-with.png";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const schema = yup
  .object({
    fname: yup.string().required("Please provide your first name"),
    lname: yup.string().required("Please provide your last name"),
    email: yup
      .string()
      .email("Please provide valid email adress.")
      .required("Email is required"),
    email2: yup
      .string()
      .oneOf([yup.ref("email")], "Email does not match!")
      .required("Please confirm email."),
    password: yup.string().required("Please enter password").min(6),
    password2: yup
      .string()
      .oneOf([yup.ref("password")], "Password did not match.")
      .required("You need to confirm your password."),
  })
  .required();

function Register() {
  const navigate = useNavigate();
  // for checkbox to see if checked or not
  const [checkTerms, setcheckTerms] = useState(false);
  const [show, setShow] = useState(false);
  function handlecheckTerms() {
    setcheckTerms(!checkTerms);
  }

  //for validation hook-form register
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formdata) => {
    console.log(formdata);
    try {
      const res = await axios.post(REGISTER_URL, formdata);
      console.log(res);
      reset();
      navigate('/login');
    } catch (err) {
      setShow(true);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow style={{ minHeight: "100vh" }}>
        <MDBCol sm="6">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol sm="12" lg="10" xxl="7">
              <div className="d-flex flex-row ps-5 pt-5 ">
                <img
                  src={mainLogo}
                  width="90%"
                  alt="healing for everyone"
                ></img>
              </div>

              <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                <Alert
                  variant="danger"
                  onClose={() => setShow(false)}
                  show={show}
                  dismissible
                  className="w-100"
                >
                  <Alert.Heading>Email already Exist</Alert.Heading>
                  <p>
                    The email you entered is alreadyin our
                    records.
                    <br />
                    Please provide another email and try again.
                  </p>
                </Alert>
                <h3
                  className="fw-normal mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign Up
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mx-5 w-100"
                        label="First name"
                        type="text"
                        autoComplete="off"
                        name="fname"
                        {...register("fname")}
                      />
                      <p className="form-err-msg mx-5 w-100">
                        {errors.fname?.message}
                      </p>
                    </MDBCol>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mx-5 w-100"
                        label="Last name"
                        type="text"
                        autoComplete="off"
                        name="lname"
                        {...register("lname")}
                      />
                      <p className="form-err-msg mx-5 w-100">
                        {errors.lname?.message}
                      </p>
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mt-2 mx-5 w-100"
                    label="Email"
                    id="form3"
                    autoComplete="off"
                    {...register("email")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                    {errors.email?.message}
                  </p>

                  <MDBInput
                    wrapperClass="mt-4 mx-5 w-100"
                    label="Confirm Email"
                    id="form4"
                    autoComplete="off"
                    {...register("email2")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                    {errors.email2?.message}
                  </p>

                  <MDBInput
                    wrapperClass="mt-4 mx-5 w-100"
                    label="Password"
                    id="form5"
                    autoComplete="off"
                    type="password"
                    {...register("password")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                    {errors.password?.message}
                  </p>

                  <MDBInput
                    wrapperClass="mt-4 mx-5 w-100"
                    label="Confirm Password"
                    id="form6"
                    autoComplete="off"
                    type="password"
                    {...register("password2")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                    {errors.password2?.message}
                  </p>

                  <div className="d-flex justify-content-center mt-4 mb-2 ms-5">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Accept our Terms and Conditions"
                      onChange={handlecheckTerms}
                    />
                  </div>
                  {checkTerms ? (
                    <MDBBtn
                      className="mb-4 px-5 mx-5 w-100 custom-btn"
                      size="lg"
                    >
                      Sign Up
                    </MDBBtn>
                  ) : (
                    <MDBBtn
                      className="mb-4 px-5 mx-5 w-100 custom-btn"
                      size="lg"
                      disabled
                    >
                      Sign Up
                    </MDBBtn>
                  )}
                </form>

                <p className="ms-5">
                  Already registered?{" "}
                  <Link to="/login" className="link-custom">
                    Login here
                  </Link>
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol
          sm="6"
          style={{ overflow: "hidden", height: "100vh" }}
          className="d-none d-sm-block px-0"
        >
          <img
            src={loginImage}
            alt="Login image"
            className="w-100"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              minHeight: "100vh",
              backgroundAttachment: "fixed",
            }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
