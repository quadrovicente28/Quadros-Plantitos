import { Link } from "react-router-dom";
import "../Css/error404.css";

import { MDBBtn, MDBTypography } from "mdb-react-ui-kit";

export default function Error404() {
  return (
    <div className="not-found">
      <div className="glass-card">
      <MDBTypography tag='div' className='pb-0 error-main w-100'>
        404
      </MDBTypography>
        <div className="error-body">
          <p>Oooops!You weren't supposed to see this! </p>
        </div>
        <Link to="/">
            <MDBBtn className="mb-4 px-5 w-100 custom-btn" size='lg'>Go Back</MDBBtn>
        </Link>
      </div>
    </div>
  );
}
