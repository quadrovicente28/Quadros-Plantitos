import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom container'>
        <div className='me-5 d-none d-lg-block'>
          {/* <span>Get connected with us on social networks:</span> */}
        </div>

        <div>
          <Link to='https://www.facebook.com/itsmemac31/' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link to='https://www.facebook.com/itsmemac31/' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </Link>
          <Link to='https://www.facebook.com/itsmemac31/' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </Link>
          <Link to='https://www.instagram.com/macslns/' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </Link>
          <Link to='https://www.facebook.com/itsmemac31/' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </Link>
          <Link to='https://www.facebook.com/itsmemac31/' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </Link>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Quadros Plantitos
              </h6>
              <p>
              Don’t wait for someone to bring you plants, plan your own, and decorate your soul with Q-Plantitos.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <Link to='' className='text-reset'>
                  Succulent
                </Link>
              </p>
              <p>
                <Link to='' className='text-reset'>
                  Bonsai
                </Link>
              </p>
              <p>
                <Link to='' className='text-reset'>
                  Floor Plant
                </Link>
              </p>
            </MDBCol>

        

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Pasay, Philippines 1709
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                quadro@goatmail.uk
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 63-9116663629
              </p>
          
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <Link className='text-reset fw-bold' to='https://quadrovicente28.github.io/Group-9-WD30/Index/'>
          Q-Plantitos.com
        </Link>
      </div>
    </MDBFooter>
  );
}
export default Footer;