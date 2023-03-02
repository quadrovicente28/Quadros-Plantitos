
import Form from 'react-bootstrap/Form';
import React, { useState, useRef, useEffect } from 'react';
import { MDBFile,
         MDBBtn,
        MDBContainer,
        MDBCard,
        MDBCardBody,
        MDBCardImage,
        MDBRow,
        MDBCol,
        MDBInput,
        MDBTextArea
} from 'mdb-react-ui-kit';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  imageUrl: yup.string().required("Please provide your image URL here"),
  title: yup.string().required("Please provide the title of your journal"),
  sendMessage: yup.string().required("A message is required")
}).required();

export default function AddJournalEntry() {

  const { register, handleSubmit, reset, formState:{ errors } } = useForm({resolver: yupResolver(schema)
  });
    return (
        <MDBContainer>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://images.pexels.com/photos/5975986/pexels-photo-5975986.jpeg?auto=compress&cs=tinysrgb&w=600' style={{height: '600px', width: '600px'}} alt="Journal photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Add Journal</h3>
                  <div className='d-md-flex ustify-content-start align-items-center mb-1'>
                  
                  </div>
                  <form onSubmit={handleSubmit()}>
                  <MDBCol md='12'>
                  <MDBInput wrapperClass='mt-2' label='Image URL Here' size='lg' id='form1' type='text' name='imageUrl' {...register("imageUrl")}/>
                  <p className='form-err-msg  w-100'>{errors.imageUrl?.message}</p>
                  </MDBCol>

                <MDBCol md='12'>
                    <MDBInput wrapperClass='mt-4' label='Title' size='lg' id='form1' type='text' name='title' {...register("title")} />
                    <p className='form-err-msg  w-100'>{errors.title?.message}</p>
                </MDBCol>

                <div className="form-floating">
                  <textarea className="form-control custom-textarea mt-4 w-100" id="sendmessage" name='sendmessage' style={{height: "350px"}} {...register("sendMessage")}></textarea>
                  <label htmlFor="sendmessage">Message</label>
                </div>                                    
                <p className='form-err-msg  w-100'>{errors.sendMessage?.message}</p>   

                <div className="d-flex justify-content-end pt-3">
                <MDBBtn className='custom-btn' size='lg'>ADD</MDBBtn>
                </div>
                </form>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    );
}