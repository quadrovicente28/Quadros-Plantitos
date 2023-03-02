import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import '../Css/journal.css'
import { Link } from 'react-router-dom';

import { Fade } from "@successtar/react-reveal";


export default function Journal() {
  return (

    <div className="container my-5" >
        <Fade delay={200} cascade>
        <MDBRow className='d-flex justify-content-center'>
            <MDBCol  md='4' sm='10'>
                <MDBCard className="box-border">
                <MDBCardImage src='https://assets.eflorist.com/site/32084100/assets/products/CZM_/sku4760117.jpg' position='top'height={350} alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Searching for a succulent?</MDBCardTitle>
                   <Link to='/journalentry'>
                    <MDBBtn className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                    </Link>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol  md='4' sm='10'>
                <MDBCard className="box-border">
                <MDBCardImage src='https://blog.japanwondertravel.com/wp-content/uploads/2021/05/Bonsai-Tree-1200x960.jpg' position='top' height={350} alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Searching for a bonsai?</MDBCardTitle>
                    <Link to='/journalentry'>
                    <MDBBtn className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                    </Link>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol  md='4' sm='10'>
            <MDBCard className="box-border">
                <MDBCardImage src='https://hips.hearstapps.com/hmg-prod/images/potted-snake-plants-inside-a-beautiful-new-flat-or-royalty-free-image-1659026388.jpg' position='top' height={350} alt='...' />
                <MDBCardBody className="d-flex flex-column align-items-center">
                    <MDBCardTitle>Searching for a floor plant?</MDBCardTitle>
                    <Link to='/journalentry'>
                    <MDBBtn className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>Read more</MDBBtn>
                    </Link>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        </Fade>    
     </div>
 
  );
}