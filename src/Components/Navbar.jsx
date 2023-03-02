import { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import defaultprofileimg from '../assets/defaultprofileimg.png'

import logo from "../assets/logo-weed-with.png";

const adminlinks = [
  {
    path: "/shop",
    name: "Shop",
    active: false,
  },
  {
    path: "/addshopitem",
    name: "Add product",
    active: false,
  },
  {
    path: "/journal",
    name: "Journals",
    active: false,
  },
  {
    path: "/addjournal",
    name: "Add journal",
    active: false,
  },
  {
    path: "/contact",
    name: "Contact",
    active: false,
  },
];

const basiclinks = [
  {
    path: "/shop",
    name: "Shop",
    active: false,
  },
  {
    path: "/journal",
    name: "Journals",
    active: false,
  },
  {
    path: "/contact",
    name: "Contact",
    active: false,
  },
];

function Navbar() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [showNavRight, setShowNavRight] = useState(false);
  const navigate = useNavigate();
  const [navlinks, setNavlinks] = useState(auth?.role==0?adminlinks:basiclinks);

  function gotoProfile() {
    navigate("/profile");
  }
  function gotoAdmin() {
    navigate("/addplant");
  }

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer className="d-flex justify-content-end">
        <Link to="/" className="order-1 order-lg-1">
          <MDBNavbarBrand tag="div">
            <img src={logo} height="60" alt="MDB Logo" loading="lazy" />
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          className="order-3 order-lg-2"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight} className="order-4 order-lg-3">
          <MDBNavbarNav
            right
            fullWidth={false}
            className="mr-auto mb-2 mb-lg-0"
          >
            {navlinks.map((link,i) => {
              return(
                <Link to={link.path} key={i}>
              <MDBNavbarItem className="nav-custom-link" active key={i}>
                <MDBNavbarLink tag="div">{link.name}</MDBNavbarLink>
              </MDBNavbarItem>
              </Link>)
            })}
          </MDBNavbarNav>
        </MDBCollapse>
        <form className="d-flex flex-nowrap input-group w-auto order-2 order-lg-4">
      
          <Link to="/mycart">
            <MDBBtn
              tag="div"
              color="none"
              className="mx-3"
              style={{ color: "#B77445" }}
            >
              <MDBIcon fas icon="shopping-cart" />
            </MDBBtn>
          </Link>
          {auth ? (
            <MDBDropdown>
              <MDBDropdownToggle tag="div" color="link">
                <img
                  src={defaultprofileimg}
                  className="rounded-circle"
                  height="30"
                  alt="Avatar"
                  loading="lazy"
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem
                  className="d-flex w-100 p-2 profile-menu"
                  onClick={gotoProfile}
                >
                  Profile
                </MDBDropdownItem>
                <MDBDropdownItem
                  className="d-flex w-100 p-2 profile-menu"
                  onClick={logout}
                >
                  Log Out
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          ) : (
            <Link to="/login">
              <MDBBtn
                tag="div"
                color="none"
                className="mx-3"
                style={{ color: "#B77445" }}
              >
                <MDBIcon fas icon="user" />
              </MDBBtn>
            </Link>
          )}
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Navbar;
