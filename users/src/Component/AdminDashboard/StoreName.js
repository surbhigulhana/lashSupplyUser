import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/all.min.css";
import "../css/nunito.css";
import "../css/sb-admin-2.min.css";
import "../css/dataTables.bootstrap4.min.css";
import logo from "../img/logo.png";
import { Table } from "react-bootstrap";
import img1 from "../img/ser9.jpg";
const StoreName = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://3.114.92.202:4003/StoreName").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  // ------delete -----

  async function deleteData(id) {
    let result = await fetch(`http://3.114.92.202:4003/StoreName/${id}`, {
      method: "delete",
    });
    let data = await result.json();

    fetch("http://3.114.92.202:4003/StoreName").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }
  // ------------------------------------------------------------------------------
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

    const filterData = data.filter((item) => {
      return item._id === id;
    });

    setPicture(filterData[0].filename);

    setId(filterData[0]._id);
  }

  async function editData() {

    var formData = new FormData();

    formData.append("filename", picture.bytes);

    let result = await fetch(`http://3.114.92.202:4003/StoreNameImg/${id}`, {
      method: "post",
      mode: "cors",
      body: formData,
    });
    let data = await result.json();
    console.log(data);

    fetch("http://3.114.92.202:4003/StoreName").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  // const[data,setData]=useState([]);
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
      const response = await fetch("http://3.114.92.202:4003/StoreNameImg", {
        method: "POST",
        mode: "cors",
        body: formData,
      });
      const result = await response.json();
    
      fetch("http://3.114.92.202:4003/StoreName").then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

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
              <a class="nav-link" href="/BannerImg">
                <i class="fa fa-cog"></i>
                <span>Banner</span>
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
              <a class="nav-link" href="/StoreName">
                <i class="fa fa-cog"></i>
                <span>StoreName</span>
              </a>
            </li>
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
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
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

                    <li class="nav-item dropdown no-arrow">
                      <button type="button" class="btn btn-primary an1">
                        ADMIN
                      </button>
                      <a href="/" id="userDropdown">
                        <button type="button" class="btn btn-primary an1">
                          Logout
                        </button>
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Store Name</h1>
                  <a href="/AddStoreName">
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{
                        background: "#DD3333;",
                        border: "solid 1px #DD3333",
                      }}
                    >
                      ADD StoreName
                    </button>
                  </a>
                </div>
                <Table
                  id="example"
                  striped
                  bordered
                  hover
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th class="bl5"> #</th>
                      <th class="bl5"> StoreName name</th>
                  
                      <th class="bl5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data
                        .filter((val) => {
                          if (search == "") {
                            return val;
                          } else if (
                            val.Name.toLowerCase().includes(
                              search.toLowerCase()
                            )
                          ) {
                            return val;
                          }
                        })
                        .map((item, index) => (
                          <tr key={item._id}>
                            <td data-label="User Id">{index + 1}</td>
                            <td data-label="firstName">{item.Name}</td>
                         
                            <td data-label="Action">
                             
                             
                          
                              <button
                                type="button"
                                class="btn btn-primary ab1"
                                onClick={() => deleteData(item._id)}
                                style={{
                                  backgroundColor: "#DD3333",
                                  color: "white",
                                  border: "none",
                                }}
                              >
                                Delete
                              </button>
                            
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

            {/* <!-- End of Footer --> */}
          </div>
          {/* <!-- End of Content Wrapper --> */}
        </div>
       
      </body>
    </div>
  );
};

export default StoreName;
