// react imports
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "../../api/axios";

// assets and css
import loginImage from "../../assets/succulent.jpg";
import mainLogo from "../../assets/logo-weed-with.png";

// react-hook
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// MDBootstrap
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

import { Alert } from "react-bootstrap";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please provide a valid email adress.")
      .required("Email is required"),
    password: yup
      .string()
      .required("Please enter password")
      .required("Password is required"),
  })
  .required();

const LOGIN_URL = "/user/auth";
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || '/';
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (credential) => {
    console.log(credential);
    try {
      const res = await axios.post(LOGIN_URL, credential)
      const userdata = res.data[0];
      localStorage.setItem('auth', JSON.stringify(userdata))
      reset();
      navigate(from, { replace: true});
    } catch (err) {
      setShow(true);
      reset();
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow style={{minHeight: "100vh"}}>
        <MDBCol sm="6" className="h-100">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol sm="12" lg="10" xxl="7"  className="d-flex align-items-center flex-column">
              <div className="d-flex flex-row ps-5 pt-5 ">
                <img
                  src={mainLogo}
                  width="90%"
                  alt="healing for everyone"
                ></img>
              </div>

              <div className="d-flex flex-column justify-content-center w-75 pt-4">
                <h3
                  className="fw-normal mb-3 ps-5 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>
                <Alert
                  variant="danger"
                  onClose={() => setShow(false)}
                  show={show}
                  dismissible
                  className="w-100"
                >
                  <Alert.Heading>Log in failed</Alert.Heading>
                  <p>
                    The email and password you entered did not match our records.
                    <br/>
                    Please double check and try again.
                  </p>
                </Alert>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <MDBInput
                    wrapperClass="mt-4 w-100 formControlLg"
                    label="Email address"
                    size="lg"
                    autoComplete="username"
                    {...register("email")}
                  />
                  <p className="form-err-msg w-100">
                    {errors.email?.message}
                  </p>
                  <MDBInput
                    wrapperClass="mt-4 w-100 formControlLg"
                    label="Password"
                    type="password"
                    size="lg"
                    autoComplete="current-password"
                    {...register("password")}
                  />
                  <p className="form-err-msg w-100">
                    {errors.password?.message}
                  </p>

                  <MDBBtn className="mb-4 px-5 w-100 custom-btn" size="lg">
                    Login
                  </MDBBtn>
                </form>
                <p className="small mb-5 pb-lg-3">
                  <Link className="text-muted" to="/forgotPassword">
                    Forgot password?
                  </Link>
                </p>
                <p className="ms-5">
                  Don't have an account?{" "}
                  <Link to="/register" className="link-custom">
                    Register here
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
