import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

const SHOP_URL = "/shop";
function Shop() {
  const [shopItems, setShopItems] = useState([]);

  async function rendershop() {
    try {
      const res = await axios.get(SHOP_URL);
      const shop = res.data;
      // console.log(res);
      setShopItems(shop);
    } catch (err) {
      // alert("walang laman");
    }
  }
  useEffect(() => {
    rendershop();
  }, []);

  return (
    <MDBContainer className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Our Products</strong>
      </h4>

      <MDBRow>
        {shopItems.map((item) => {
          return (
            <MDBCol md="12" lg="4" className="mb-4" key={item.id}>
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage src={item.img} fluid className="w-100" />
                  <Link to={"/shopitem/" + item.id}>
                    <div className="mask">
                      {/* <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div> */}
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </Link>
                </MDBRipple>
                <MDBCardBody>
                  <Link to="#!" className="text-reset">
                    <h5 className="card-title mb-3">{item.itemname}</h5>
                  </Link>
                  <Link to="#!" className="text-reset">
                    <p>{item.category}</p>
                  </Link>
                  <h6 className="mb-3">
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "PHP",
                    })}
                  </h6>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
export default Shop;
