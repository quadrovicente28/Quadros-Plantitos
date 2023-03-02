import { Link } from "react-router-dom";
import { MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import headerImage from "../assets/header-image-plants.jpg";
import Jello from "@successtar/react-reveal/Jello";
import Fade from "@successtar/react-reveal/Fade";



export default function Header() {
  return (
    
    <div
      className="p-5 text-center bg-image container"
      style={{
        backgroundImage: "url(" + headerImage + ")",
        height: "800px",
        backgroundPosition: "bottom"
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-black">
          <Fade top delay={500}>
  
            <MDBTypography
              tag="div"
              className="display-3 mb-3 border-bottom custom-font"
            >
              Being Green,
              <br />
              Staying Clean.
            </MDBTypography>
            
            </Fade>
            <Fade bottom delay={300}>
            
            <MDBTypography blockquote className="mb-3 custom-font2">
              Plants are nature's way of showing us that great things can grow
              from small beginnings.
            </MDBTypography>
      
            </Fade>
            
          <Jello duration={1400}>
            <Link to="/shop">
              <MDBBtn
                className="mx-2 custom-btn"
              >
                Shop plants
              </MDBBtn>
            </Link>
            </Jello>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

