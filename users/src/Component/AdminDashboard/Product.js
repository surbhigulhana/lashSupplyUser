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
import Swal from "sweetalert2";

const Product = () => {
  //--------------view----------------------
  const handleShowView = () => setEditShowView(true);
  const [editShowView, setEditShowView] = useState(false);
  //-----------edit----------------------
  const handleShow = () => setEditShow(true);
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  //-------------------------------------------------------
  const [pictureList, setPictureList] = useState([]);
  const handleClick = async (item) => {
    const response = await fetch("http://35.77.222.89:4003/MoreData/" + item.Name);
    const data1 = await response.json();
    setPictureList(data1);
  };
  //----------------------------------------------------
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getUser = async () => {
    let result = await fetch("http://35.77.222.89:4003/productData");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getUser();
  }, []);

  // ------delete user---------------------

  async function deleteData(id) {
    let result = await fetch(`http://35.77.222.89:4003/productData/${id}`, {
      method: "delete",
    });
    let data = await result.json();
    console.log(data);
    fetch("http://35.77.222.89:4003/ProductData").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }
  //---------------------------------------------------------------------------
  const [Pdata, setPData] = useState([]);
  useEffect(() => {
    fetch("http://35.77.222.89:4003/product").then((result) => {
      result.json().then((resp) => {
        setPData(resp);
      });
    });
  }, []);
  // ---------------------------------------------------------------------------
  const [Catedata, setCData] = useState([]);

  useEffect(() => {
    fetch("http://35.77.222.89:4003/category").then((result) => {
      result.json().then((resp) => {
        setCData(resp);
      });
    });
  }, []);
  // -------------------------------------------------------------
  const [Attributedata, setAttributeData] = useState([]);
  useEffect(() => {
    fetch("http://35.77.222.89:4003/attribute").then((result) => {
      result.json().then((resp) => {
        setAttributeData(resp);
      });
    });
  }, []);

  const [Type1, setType1] = useState([]);
  async function filter(id) {
    let result = await fetch(`http://35.77.222.89:4003/display/${id}`);
    let data = await result.json();
    setType1(data);
  }

  //-----------edit data
  const [id, setId] = useState("");
  // const [editShow, setEditShow] = useState(false);
  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);

  const [Name, setname] = useState("");
  const [Desc, setdesc] = useState("");
  const [AttributeName, setAttributename] = useState("");
  const [AttributeType, setType] = useState("red");
  const [CateName, setCatename] = useState("");
  const [MinPrice, setMinPrice] = useState("");
  const [MaxPrice, setMaxPrice] = useState("");
  const [Price, setPrice] = useState("");
  const [picture, setPicture] = useState({ fileName: "", bytes: "" });
  const [SkuNo, setSku] = useState("");
  const [Inventory, setInventory] = useState("");
  const [AllProductdata, setAllProduct] = useState([]);
  function editDataDisplay(uid, id) {
    console.log("loop", id);
    const filterData = data.filter((item) => {
      return item._id === id;
    });
    setname(filterData[0].Name);
    setAttributename(filterData[0].AttributeName);
    setType(filterData[0].AttributeType);
    setSku(filterData[0].SkuNo);
    setMinPrice(filterData[0].MinPrice);
    setCatename(filterData[0].CateName);
    setMaxPrice(filterData[0].MaxPrice);
    setdesc(filterData[0].Desc);
    setPrice(filterData[0].Price);
    setPicture(filterData[0].filename);
    setInventory(filterData[0].Inventory);
    setId(filterData[0]._id);
  }
  const handlePicture = (event) => {
    setPicture({
      fileName: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };
  async function editData() {
    console.log("loop", id);
    var formData = new FormData();
    formData.append("CateName", CateName);
    formData.append("filename", picture.bytes);
    formData.append("Name", Name);
    formData.append("Desc", Desc);
    formData.append("AttributeName", AttributeName);
    formData.append("AttributeType", AttributeType);
    formData.append("MinPrice", MinPrice);
    formData.append("MaxPrice", MaxPrice);
    formData.append("Price", Price);
    formData.append("Inventory", Inventory);
    formData.append("SkuNo", SkuNo);

    let result = await fetch(`http://35.77.222.89:4003/productData/${id}`, {
      method: "post",
      mode: "cors",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: formData,
      // body: JSON.stringify(databody),
    });
    let data = await result.json();
    console.log(data);

    setname("");
    setdesc("");
    setAttributename("");
    setCatename("");
    setType("");
    setMinPrice("");
    setMaxPrice("");
    setInventory("");
    setSku("");
    setPrice("");
    fetch("http://35.77.222.89:4003/productData").then((result) => {
      result.json().then((resp) => {
        setAllProduct(resp);
      });
    });
  }

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
            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div class="text-center d-none d-md-inline">
              <button
                class="rounded-circle border-0"
                id="sidebarToggle"
              ></button>
            </div>
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
                  <h1 class="h3 mb-0 text-gray-800">Products</h1>
                  <a href="/AddProduct">
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{
                        background: "#DD3333;",
                        border: "solid 1px #DD3333",
                      }}
                    >
                      PRODUCT
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
                      <th class="bl5">SKU number</th>
                      <th class="bl5"> Product name</th>
                      <th class="bl5">Category</th>
                      <th class="bl5">View Details</th>
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
                            <td data-label="firstName">{item.SkuNo}</td>
                            <td data-label="firstName">{item.Name}</td>
                            <td data-label="firstName">{item.CateName}</td>

                            <td data-label="LastName">
                              {" "}
                              <button
                                onClick={() => {
                                  handleClick(item);
                                  handleShowView();
                                }}
                                type="button"
                                class="btn btn-primary ab1"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                style={{
                                  backgroundColor: "#DD3333",
                                  color: "white",
                                  border: "none",
                                }}
                              >
                                View
                              </button>
                            </td>

                            <td data-label="Action">
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
                                          style={{ marginTop: "7px;" }}
                                        >
                                          Product
                                        </div>
                                        <div class="col-md-10">
                                          <input
                                            type="description"
                                            class="form-control"
                                            value={Name}
                                            readOnly
                                          />
                                          <br />
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-md-2">
                                          Product Description
                                        </div>

                                        <div class="col-md-10">
                                          <input
                                            type="description"
                                            class="form-control"
                                            placeholder="Product Description"
                                            value={Desc}
                                            onChange={(e) => {
                                              setdesc(e.target.value);
                                            }}
                                          />
                                          <br />
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "7px;" }}
                                        >
                                          Select Category{" "}
                                        </div>
                                        <div class="col-md-10">
                                          <div class="input-group mb-3">
                                            <select
                                              class="custom-select"
                                              id="inputGroupSelect01"
                                              value={CateName}
                                              onChange={(e) => {
                                                setCatename(e.target.value);
                                              }}
                                            >
                                              <option selected>
                                                Select Category{" "}
                                              </option>
                                              {Catedata.map((item) => (
                                                <option value={item.CateName}>
                                                  {item.CateName}
                                                </option>
                                              ))}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "6px;" }}
                                        >
                                          Min. price{" "}
                                        </div>

                                        <div class="col-md-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            name="price"
                                            placeholder="Min. price"
                                            style={{ marginBottom: "16px;" }}
                                            required
                                            value={MinPrice}
                                            onChange={(e) => {
                                              setMinPrice(e.target.value);
                                            }}
                                          />
                                          <br />
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "6px;" }}
                                        >
                                          Max. price{" "}
                                        </div>

                                        <div class="col-md-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            name="price"
                                            placeholder="Max. price"
                                            style={{ marginBottom: "16px;" }}
                                            required
                                            value={MaxPrice}
                                            onChange={(e) => {
                                              setMaxPrice(e.target.value);
                                            }}
                                          />
                                          <br />
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "6px;" }}
                                        >
                                          SKU Number{" "}
                                        </div>

                                        <div class="col-md-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            name="sku"
                                            placeholder="SKU Number"
                                            style={{ marginBottom: "16px;" }}
                                            required
                                            value={SkuNo}
                                            onChange={(e) => {
                                              setSku(e.target.value);
                                            }}
                                          />
                                          <br />
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "7px;" }}
                                        >
                                          Select Attributes{" "}
                                        </div>
                                        <div class="col-md-10">
                                          <div class="input-group mb-3">
                                            <select
                                              class="custom-select"
                                              id="inputGroupSelect01"
                                              value={AttributeName}
                                              onChange={(e) => {
                                                filter(e.target.value);
                                                setAttributename(
                                                  e.target.value
                                                );
                                              }}
                                            >
                                              <option selected>
                                                Select Attribute{" "}
                                              </option>
                                              {Attributedata.map(
                                                (item, index) => (
                                                  <option
                                                    key={index}
                                                    value={item.AttributeName}
                                                  >
                                                    {item.AttributeName}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "7px;" }}
                                        >
                                          Select Attributes Type{" "}
                                        </div>
                                        <div class="col-md-10">
                                          <div class="input-group mb-3">
                                            <select
                                              class="custom-select"
                                              id="inputGroupSelect01"
                                              value={AttributeType}
                                              onChange={(e) => {
                                                setType(e.target.value);
                                              }}
                                            >
                                              <option selected>
                                                Select Type{" "}
                                              </option>
                                              {Type1.map((item) => (
                                                <option
                                                  value={item.AttributeType}
                                                >
                                                  {item.AttributeType}
                                                </option>
                                              ))}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "6px;" }}
                                        >
                                          Price{" "}
                                        </div>

                                        <div class="col-md-10">
                                          <input
                                            type="text"
                                            class="form-control"
                                            name="price"
                                            placeholder="Price"
                                            style={{ marginBottom: "16px;" }}
                                            required
                                            value={Price}
                                            onChange={(e) => {
                                              setPrice(e.target.value);
                                            }}
                                          />
                                          <br />
                                        </div>
                                      </div>

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
                                      {/* <div class="row">
                    <div class="col-md-2" style={{ marginTop: "6px;" }}>
                      Product Inventory
                    </div>

                    <div class="col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        name="price"
                        placeholder="Inventory"
                        style={{ marginBottom: "16px;" }}
                        required
                        value={Inventory}
                          onChange={(e) => {
                            setInventory(e.target.value)
                          }}
                      />
                      <br />
                    </div>
                  </div> */}
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
                              &nbsp; &nbsp;
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
                        <div class="container">
                          <div class="row" style={{ width: "250%" }}>
                            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                              <div class="card" style={{ border: "none" }}>
                                <img
                                  width="100"
                                  height="80"
                                  controls
                                  src={
                                    "http://35.77.222.89:4003/uploads/" +
                                    item.filename
                                  }
                                />

                                <div class="card-body">
                                  <p
                                    class="card-title"
                                    style={{ textAlign: "justify" }}
                                  >
                                    {item.Desc}
                                  </p>
                                  <h6 class="card-subtitle mb-2 text-muted">
                                    {item.AttributeName1} :
                                    {pictureList[0] ? (
                                      pictureList[0].AttributeType1.map((item, index) => {
                                        return (
                                          <p
                                            class="h-1 mt-4"
                                           
                                          >
                                            <li key={index}>{item}</li>
                                          </p>
                                        );
                                      })
                                    ) : (
                                      <div></div>
                                    )}
                                  </h6>

                                  <br />
                                  <h6 class="card-subtitle mb-2 text-muted">
                                    {item.AttributeName2} :{" "}
                                    {pictureList[0] ? (
                                      pictureList[0].AttributeType2.map((item, index) => {
                                        return (
                                          <p
                                            class="h-1 mt-4"
                                           
                                          >
                                            <li key={index}>{item}</li>
                                          </p>
                                        );
                                      })
                                    ) : (
                                      <div></div>
                                    )}
                                  </h6>
                                  <p class="card-text">
                                    Min.Price: ${item.MinPrice} &nbsp; &nbsp;
                                    Max.Price: ${item.MaxPrice}
                                  </p>
                                  <a href="#" class="card-link">
                                    ${item.Price}
                                  </a>
                                  <a href="#" class="card-link">
                                    {item.Inventory}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        // <p
                        //   class="h-1 mt-4"
                        //   style={{ fontSize: "20px", color: "#121212" }}
                        // >
                        //   <ul>
                        //     <img
                        //       width="100"
                        //       height="80"
                        //       controls
                        //       src={
                        //         "http://35.77.222.89:4003/uploads/" + item.filename
                        //       }
                        //     />
                        //     <i
                        //       class="fa fa-circle"
                        //       style={{ fontSize: "7px", color: "lightgray" }}
                        //     ></i>
                        //     &nbsp;
                        //     {item.AttributeType}
                        //   </ul>
                        // </p>
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
  );
};

export default Product;
