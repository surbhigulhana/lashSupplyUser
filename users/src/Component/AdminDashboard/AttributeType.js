import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/all.min.css";
import "../css/nunito.css";
import "../css/sb-admin-2.min.css";
import "../css/dataTables.bootstrap4.min.css";
import logo from "../img/logo.png";
import img1 from "../img/ser9.jpg";
import { Table } from "react-bootstrap";
const AttributeType = () => {
  const handleShow = () => setEditShow(true);
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);

  const [Attributedata, setAttributeData] = useState([]);
  useEffect(() => {
    fetch("http://3.114.92.202:4003/attribute").then((result) => {
      result.json().then((resp) => {
        setAttributeData(resp);
      });
    });
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://3.114.92.202:4003/Type").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  
  const [pictureList, setPictureList] = useState([]);
  const handleClick = async (item) => {
    const response = await fetch("http://3.114.92.202:4003/More/" + item.AttributeName);
    const data1 = await response.json();
    setPictureList(data1);
  };
  // delete

  async function deleteData(id) {
    let result = await fetch(`http://3.114.92.202:4003/Type/${id}`, {
      method: "delete",
    });
    let data = await result.json();
    console.log(data);
    fetch("http://3.114.92.202:4003/Type").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  const [search, setSearch] = useState("");
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
                              onChange={(e) => {
                                setSearch(e.target.value);
                              }}
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

                    <li class="nav-item dropdown no-arrow">
                   <button type="button" class="btn btn-primary an1">
                         ADMIN
                       </button>
                     <a
                      
                       href="/"
                       id="userDropdown"
                      
                     >
                       
                      
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
                  <h1 class="h3 mb-0 text-gray-800">Attribute Type</h1>
                  <a href="/AddAttributeType">
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{
                        background: "#DD3333;",
                        border: "solid 1px #DD3333",
                      }}
                    >
                      ADD ATTRIBUTE TYPES
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
                      <th class="bl5">#</th>
                      <th class="bl5">Attribute name</th>
                      <th class="bl5"> Attribute type</th>
                      <th class="bl5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Attributedata &&
                      Attributedata
                        .filter((val) => {
                          if (search == "") {
                            return val;
                          } else if (
                            val.AttributeName.toLowerCase().includes(
                              search.toLowerCase()
                            )
                          ) {
                            return val;
                          }
                        })
                        .map((item, index) => (
                          <tr key={item._id}>
                            <td data-label="User Id">{index + 1}</td>
                            <td data-label="firstName">{item.AttributeName}</td>
                            <td data-label="LastName">
                              {" "}
                              <button
                                onClick={() => {
                                  handleClick(item);
                                  handleShow();
                                }}
                                type="button"
                                class="btn btn-primary ab1"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                style={{"backgroundColor":"#DD3333",color:"white",border:"none"}}
                              >
                                Type
                              </button>
                            </td>

                            <td data-label="Action">
                              <button
                                type="button"
                                class="btn btn-primary ab1"
                                onClick={() => deleteData(item._id)}
                                style={{"backgroundColor":"#DD3333",color:"white",border:"none"}}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </Table>
              </div>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        More Details
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      {pictureList.map((item, index) => (
                        <p
                          class="h-1 mt-4"
                          style={{ fontSize: "20px", color: "#121212" }}
                        >
                          <ul>
                            <i class="fa fa-circle" style={{fontSize:"10px",color:"lightgray"}}></i>&nbsp;
                         {item.AttributeType}
                            
                          </ul>
                        </p>
                      ))}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            
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
  );
};

export default AttributeType;
