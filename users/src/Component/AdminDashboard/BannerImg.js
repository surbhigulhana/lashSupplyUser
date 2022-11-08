import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/all.min.css";
import "../css/nunito.css";
import "../css/sb-admin-2.min.css";
import "../css/dataTables.bootstrap4.min.css";
import logo from "../img/logo.png";
import img1 from "../img/ser9.jpg";
import { Table, Modal, Button } from "react-bootstrap";
const BannerImg = () => {
    const handleShowView = () => setEditShowView(true);
  const [editShowView, setEditShowView] = useState(false);
  //-----------edit----------------------
  const handleShow = () => setEditShow(true);
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  //-------------------------------------------------------
  
  const [id, setId] = useState("");
  // const [editShow, setEditShow] = useState(false);
  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);

 
 
  function editDataDisplay(uid, id) {
    console.log("loop", id);
    const filterData = data.filter((item) => {
      return item._id === id;
    });
 
    setPicture(filterData[0].filename);
   
    setId(filterData[0]._id);
  }
 
  async function editData() {
    console.log("loop", id);
    var formData = new FormData();
   
    formData.append("filename", picture.bytes);
   

    let result = await fetch(`http://3.114.92.202:4003/BannerImg/${id}`, {
      method: "post",
      mode: "cors",
      body: formData,
    
    });
    let data = await result.json();
    console.log(data);

   
    fetch("http://3.114.92.202:4003/BannerImg").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }


    const[data,setData]=useState([]);
    const [picture, setPicture] = useState({ fileName: "", bytes: "" });
    const handlePicture = (event) => {
        setPicture({
          fileName: URL.createObjectURL(event.target.files[0]),
          bytes: event.target.files[0],
        });
      };

      const handleSubmit = async () => {
        var formData = new FormData();
        formData.append("filename", picture.bytes);
        try {
          const response = await fetch("http://3.114.92.202:4003/BannerImg", {
            method: "POST",
            mode: "cors",
            body: formData,
          });
          const result = await response.json();
          console.log(result);
          
          fetch("http://3.114.92.202:4003/BannerImg").then((result) => {
            result.json().then((resp) => {
              setData(resp);
            });
          });
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        fetch("http://3.114.92.202:4003/BannerImg").then((result) => {
          result.json().then((resp) => {
            setData(resp);
          });
        });
      }, []);
  return (
    <div>
      <body id="page-top">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Sidebar --> */}
          <ul
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            {/* <!-- Sidebar - Brand --> */}
            <a
              class="sidebar-brand d-flex align-items-center justify-content-center"
              href="/Sidebar"
            >
              <div class="sidebar-brand-icon ">
                <img src={logo} />
              </div>
            </a>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider" />

            {/* <!-- Heading --> */}

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
              <a class="nav-link" href="/Sidebar">
                <i class="fa fa-cog"></i>
                <span>Dashboard </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link collapsed"
                href="users.html"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i class="fa fa-cog"></i>
                <span>Users</span>
              </a>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="/ShowUser">
                    Registered Users
                  </a>
                  <a class="collapse-item" href="/BlockUser">
                    Restricted Users
                  </a>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Category">
                <i class="fa fa-cog"></i>
                <span>Categories</span>
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                <i class="fa fa-cog"></i>
                <span>Attributes</span>
              </a>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="/AttributeName">
                    Attribute Name
                  </a>
                  <a class="collapse-item" href="/AttributeType">
                    Attribute Type
                  </a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsefour"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                <i class="fa fa-cog"></i>
                <span>Product</span>
              </a>
              <div
                id="collapsefour"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="/ProductName">
                    Product Name
                  </a>
                  <a class="collapse-item" href="/Product">
                    Product Details
                  </a>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a
                class="nav-link collapsed"
                href="users.html"
                data-toggle="collapse"
                data-target="#collapseTwo1"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i class="fa fa-cog"></i>
                <span>Order</span>
              </a>
              <div
                id="collapseTwo1"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <a class="collapse-item" href="/Order">
                    Order
                  </a>
                  <a class="collapse-item" href="/Payment">
                    Payment OverView
                  </a>
                </div>
              </div>
            </li>

           

            <li class="nav-item">
              <a class="nav-link" href="/Inquiry">
                <i class="fa fa-cog"></i>
                <span>Inquiry</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Ticket">
                <i class="fa fa-cog"></i>
                <span>Ticket</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/BannerImg">
                <i class="fa fa-cog"></i>
                <span>Banner</span>
              </a>
            </li>
            {/* <!-- Sidebar Toggler (Sidebar) --> */}
           
          </ul>
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" class="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
              <header>
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  {/* <!-- Sidebar Toggle (Topbar) --> */}
                  <button
                    id="sidebarToggleTop"
                    class="btn btn-link d-md-none rounded-circle mr-3"
                  >
                    <i class="fa fa-bars"></i>
                  </button>

                  {/* <!-- Topbar Search --> */}
                  <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary an" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* <!-- Topbar Navbar --> */}
                  <ul class="navbar-nav ml-auto">
                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li class="nav-item dropdown no-arrow d-sm-none">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="searchDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-search fa-fw"></i>
                      </a>
                      {/* <!-- Dropdown - Messages --> */}
                      <div
                        class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                      >
                        <form class="form-inline mr-auto w-100 navbar-search">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control bg-light border-0 small"
                              placeholder="Search for..."
                              aria-label="Search"
                              aria-describedby="basic-addon2"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-primary an" type="button">
                                <i class="fas fa-search fa-sm"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>

                    {/* <!-- Nav Item - Alerts --> */}

                    {/* <!-- Nav Item - Messages --> */}

                    {/* <!-- Nav Item - User Information --> */}
                    <li class="nav-item dropdown no-arrow">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small am">
                          Anil Singh
                        </span>
                        <img class="img-profile rounded-circle" src={img1} />
                        {/* &nbsp; &nbsp; */}
                        <button type="button" class="btn btn-primary an1">
                          Logout
                        </button>
                      </a>
                      {/* <!-- Dropdown - User Information --> */}
                      <div
                        class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                      >
                        <div class="dropdown-divider"></div>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#logoutModal"
                        >
                          <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </header>
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Add Images</h1>
                </div>
                <form>
                


                  <div class="row">
                    <div class="col-md-2" style={{ marginTop: "6px;" }}>
                      Upload Images{" "}
                    </div>
                    <div class="col-md-10">
                      <div class="input-group mb-3">
                        <div class="custom-file">
                          <input
                            accept="image/*"
                            onChange={handlePicture}
                            type="file"
                            class="custom-file-input"
                            name="image"
                            id="inputGroupFile01"
                            required
                          />
                          <label
                            class="custom-file-label"
                            for="inputGroupFile01"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-10">
                      <button
                        type="button"
                        class="btn btn-success ab1"
                        style={{
                          marginBottom: "20px;",
                          backgroundColor: "#DD3333",
                          border: "1px solid #DD3333",
                        }}
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <br />
              <div class="container-fluid">
                {/* <!-- Page Heading --> */}
              
                <Table
                  id="example"
                  striped
                  bordered
                  hover
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th class="bl5">#</th>
                      <th class="bl5">picture</th>
                     
                      <th class="bl5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item, index) => (
                          <tr key={item._id}>
                            <td data-label="User Id">{index + 1}</td>
                            <td data-label="firstName"> <img
                                  width="100"
                                  height="80"
                                  controls
                                  src={
                                    "http://3.114.92.202:4003/uploads/" +
                                    item.filename
                                  }
                                /></td>
                           

                            <td data-label="Action">
                             
                              
                              &nbsp; &nbsp;
                              <button
                                type="button"
                                class="btn btn-primary ab1"
                                onClick={() => {
                                  editDataDisplay(item.uid, item._id);
                                  editHandleShow();
                                }}
                                style={{
                                  backgroundColor: "#DD3333",
                                  color: "white",
                                  border: "none",
                                }}
                              >
                                Edit
                              </button>
                              <Modal
                                size="xl"
                                show={editShow}
                                onHide={editHandleClose}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>Edit Data</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div class="container-fluid">
                                    {/* <!-- Page Heading --> */}
                                    <div class="d-sm-flex align-items-center justify-content-between mb-4"></div>
                                    <form>
                                     

                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "6px;" }}
                                        >
                                          Upload Images{" "}
                                        </div>
                                        <div class="col-md-10">
                                          <div class="input-group mb-3">
                                            <div class="custom-file">
                                              <input
                                                accept="image/*"
                                                onChange={handlePicture}
                                                type="file"
                                                class="custom-file-input"
                                                name="image"
                                                id="inputGroupFile01"
                                                required
                                              />
                                              <label
                                                class="custom-file-label"
                                                for="inputGroupFile01"
                                              >
                                                Choose file
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                       
                                    </form>
                                  </div>
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button
                                    variant="secondary"
                                    onClick={editHandleClose}
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    variant="primary"
                                    onClick={() => {
                                      editData(item._id);
                                      editHandleClose();
                                    }}
                                    style={{
                                      backgroundColor: "#DD3333",
                                      color: "white",
                                      border: "none",
                                    }}
                                  >
                                    Save Changes
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </Table>
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
                  <span>&copy; The Lash Supply @ All right reserved</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
          {/* <!-- End of Content Wrapper --> */}
        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </body>
    </div>
  )
}

export default BannerImg