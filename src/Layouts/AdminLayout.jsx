import { Outlet } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import { MDBContainer } from "mdb-react-ui-kit";

import adminlogo from "../assets/head_only.jpg";

function AdminLayout() {
  return (
    <>
      <ProSidebarProvider>
        <div className="d-flex" style={{height: "100vh"}}>
          <Sidebar>
            <Menu>
              <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
                <img
                  src={adminlogo}
                  className="rounded-circle mb-3"
                  style={{ width: "150px" }}
                  alt="Avatar"
                />
                <h5 className="mb-2">
                  <strong>John Doe</strong>
                </h5>
                <p className="text-muted">
									<span className="badge bg-primary">ADMIN</span>
                </p>
              </MDBContainer>
              <MenuItem component={<Link to="/admin/viewplant" />}>
                View Plants
              </MenuItem>
              <MenuItem component={<Link to="/admin/addplant" />}>
                Add Plant
              </MenuItem>
              <MenuItem component={<Link to="/admin/viewjournal" />}>
                View Journals
              </MenuItem>
              <MenuItem component={<Link to="/admin/addjournal" />}>
                Add Journal
              </MenuItem>
							<MenuItem component={<Link to="/admin/viewtransactions" />}>
                View Transactions
              </MenuItem>
              <MenuItem component={<Link to="/" />}> Log Out </MenuItem>
            </Menu>
          </Sidebar>
          <Outlet></Outlet>
        </div>
      </ProSidebarProvider>
    </>
  );
}
export default AdminLayout;
