import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBContainer,
    MDBRow,
    MDBCol,MDBCardImage } from 'mdb-react-ui-kit';

function Searchpage() {
    return (
        <MDBContainer className="my-5 d-flex justify-content-center">
        <MDBRow className='w-50'>

        <MDBInputGroup >
        <MDBCol >
        <MDBInput label='Search' />
        </MDBCol>
        
        <MDBBtn className='custom-btn' rippleColor='dark'>
              SEARCH
        </MDBBtn>
        
        </MDBInputGroup>
        </MDBRow>
       
                
        


        </MDBContainer>
    )
    
}
export default Searchpage