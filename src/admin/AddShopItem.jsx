import Form from "react-bootstrap/Form";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SHOP_URL = "/shop/add";
const schema = yup
  .object({
    itemname: yup.string().required("Please provide product name"),
    category: yup.string().required("Please select category"),
    description: yup.string(),
    imgURL: yup.string(),
    price: yup.number("Needs to be a number").required("A price is required"),
    stock: yup.number("Needs to be a number").required("A stock is required"),
  })
  .required();

function AddShopItem() {
  const [img_url, setImg_URL] = useState(
    "https://pusat.edu.np/wp-content/uploads/2022/09/default-image.jpg"
  );

  //for validation hook-form contact us
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const addNewProduct = async (formdata) => {
    console.log(formdata);
    try {
      const res = await axios.post(SHOP_URL, formdata);
      console.log(res);
      reset();
      navigate('/shop');
    } catch (err) {
    }
  };

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard className="my-4">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-flex align-items-center">
                <MDBCardImage
                  src={img_url}
                  alt="Sample photo"
                  className="rounded-start"
                  fluid
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                  <h3 className="mb-5 text-uppercase fw-bold">
                    Add Item in shop
                  </h3>
                  <form onSubmit={handleSubmit(addNewProduct)}>
                  <MDBCol md="12">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Item Name"
                      size="lg"
                      id="form1"
                      type="text"
                      {...register("itemname")}
                    />
                    <p className="form-err-msg mx-5 w-100">
                    {errors.itemname?.message}
                    </p>
                  </MDBCol>
                  <MDBCol md="12">
                    <Form.Select
                      aria-label="Default select example"
                      className="mb-3"
                      {...register("category")}
                    >
                      <option>Category</option>
                      <option value="Accessory">Accessory</option>
                      <option value="Echeveria">Echeveria</option>
                      <option value="Hoya">Hoya</option>
                      <option value="Cacti">Cacti</option>
                      <option value="Kalanchoe ">Kalanchoe</option>
                      <option value="Bonsai ">Bonsai</option>
                      <option value="Floor Plants">Floor Plants</option>
                    </Form.Select>
                    <p className="form-err-msg mx-5 w-100">
                    {errors.category?.message}
                    </p>
                  </MDBCol>
                  <MDBCol md="12" className="mb-3">
                    <div
                      className="form-outline"
                      style={{
                        border: "1px solid rgba(0,0,0,.3)",
                        borderRadius: "0.25rem",
                      }}
                    >
                      <textarea
                        className="form-control"
                        rows="4"
                        style={{ resize: "none" }}
                        {...register("description")}
                      ></textarea>
                      <label
                        className="form-label"
                        style={{ backgroundColor: "#fff", padding: "5px" }}
                      >
                        Description
                      </label>
                    </div>
                    <p className="form-err-msg mx-5 w-100">
                    {errors.description?.message}
                    </p>
                  </MDBCol>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Stock"
                    size="lg"
                    id="form3"
                    type="text"
                    {...register("stock")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                  {errors.stock?.message}
                  </p>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Price"
                    size="lg"
                    id="form4"
                    type="text"
                    {...register("price")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                   {errors.price?.message}
                   </p>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Image url"
                    size="lg"
                    id="form5"
                    type="text"
                    {...register("imgURL")}
                  />
                  <p className="form-err-msg mx-5 w-100">
                  {errors.imgURL?.message}
                  </p>
                  

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn className="ms-2" color="success" size="lg" type="submit">
                      Add Product
                    </MDBBtn>
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

export default AddShopItem;
