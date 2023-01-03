// export default Webcam1
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [Type, setTypes] = useState([]);
  const [Type2, setType2] = useState([]);
  const [StoreName, setStoreName] = useState("");
  const [AttributeName2, setAttributename2] = useState("");
  const [AttributeName1, setAttributename1] = useState("");
  // storedata
  const [Storedata, setStoreData] = useState([]);
  useEffect(() => {
    fetch("http://3.114.92.202:4003/StoreName").then((result) => {
      result.json().then((resp) => {
        setStoreData(resp);
      });
    });
  }, []);
  const getpji = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTypes([...Type, value]);
    } else {
      setTypes(Type.filter((e) => e !== value));
    }
  };
  const getpji2 = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setType2([...Type2, value]);
    } else {
      setType2(Type2.filter((e) => e !== value));
    }
  };

  const getpji3 = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setStoreName([...StoreName, value]);
    } else {
      setStoreName(StoreName.filter((e) => e !== value));
    }
  };
  const [Attributedata2, setAttributeData2] = useState([]);
  useEffect(() => {
    fetch("http://3.114.92.202:4003/attribute").then((result) => {
      result.json().then((resp) => {
        setAttributeData2(resp);
      });
    });
  }, []);

  const [Type22, setType22] = useState([]);
  async function filter2(id) {
    let result = await fetch(`http://3.114.92.202:4003/display/${id}`);
    let data = await result.json();
    setType22(data);
    // setAttributename(data)
  }

  //--------------view----------------------
  const handleShowView = () => setEditShowView(true);
  const [editShowView, setEditShowView] = useState(false);
  //-----------edit----------------------

  //-------------------------------------------------------
  const [pictureList, setPictureList] = useState([]);
  const handleClick = async (item) => {
    const response = await fetch(
      "http://3.114.92.202:4003/MoreData/" + item.Name
    );
    const data1 = await response.json();
    setPictureList(data1);
  };
  //----------------------------------------------------
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getUser = async () => {
    let result = await fetch("http://3.114.92.202:4003/productData");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getUser();
  }, []);

  // ------delete user---------------------

  async function deleteData(id) {
    let result = await fetch(`http://3.114.92.202:4003/productData/${id}`, {
      method: "delete",
    });
    let data = await result.json();

    fetch("http://3.114.92.202:4003/ProductData").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }
  //---------------------------------------------------------------------------
  const [Pdata, setPData] = useState([]);
  useEffect(() => {
    fetch("http://3.114.92.202:4003/product").then((result) => {
      result.json().then((resp) => {
        setPData(resp);
      });
    });
  }, []);
  // ---------------------------------------------------------------------------
  const [Catedata, setCData] = useState([]);

  useEffect(() => {
    fetch("http://3.114.92.202:4003/category").then((result) => {
      result.json().then((resp) => {
        setCData(resp);
      });
    });
  }, []);
  // -------------------------------------------------------------
  const [Attributedata, setAttributeData] = useState([]);
  useEffect(() => {
    fetch("http://3.114.92.202:4003/attribute").then((result) => {
      result.json().then((resp) => {
        setAttributeData(resp);
      });
    });
  }, []);

  const [Type1, setType1] = useState([]);
  async function filter(id) {
    let result = await fetch(`http://3.114.92.202:4003/display/${id}`);
    let data = await result.json();
    setType1(data);
  }

  const [id, setId] = useState("");
  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);
  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  const handleShow = () => setEditShow(true);
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const editHandleClose1 = () => setEditShow1(false);
  const editHandleShow1 = () => setEditShow1(true);
  const [editShow1, setEditShow1] = useState(false);
  const handleClose1 = () => setEditShow1(false);
  const handleShow1 = () => setEditShow1(true);
  const [Name, setname] = useState("");
  const [Desc, setdesc] = useState("");

  const [CateName, setCatename] = useState("");
  const [MinPrice, setMinPrice] = useState("");
  const [MaxPrice, setMaxPrice] = useState("");
  const [Price, setPrice] = useState("");
  // const [picture, setPicture] = useState({ fileName: "", bytes: "" });
  // console.log(picture)
  const [SkuNo, setSku] = useState("");
  const [AllProductdata, setAllProduct] = useState([]);
  function editDataDisplay(uid, id) {
    const filterData = data.filter((item) => {
      return item._id === id;
    });

    setname(filterData[0].Name);
    // setAttributename1(filterData[0].AttributeName1);
    //  setAttributename2(filterData[0].AttributeName2)
    // setTypes(filterData[0].AttributeType1);
    //  setType2(filterData[0].AttributeType2)
    setSku(filterData[0].SkuNo);
    setMinPrice(filterData[0].MinPrice);
    setCatename(filterData[0].CateName);
    setMaxPrice(filterData[0].MaxPrice);
    // setStoreName(filterData.StoreName)
    setdesc(filterData[0].Desc);
    setPrice(filterData[0].Price);
    setId(filterData[0]._id);
  }
  const history = useNavigate();
  async function editData() {
    let databody = {
      CateName: CateName,
      Name: Name,
      Desc: Desc,
      AttributeName1: AttributeName1,
      AttributeName2: AttributeName2,
      AttributeType1: Type,
      AttributeType2: Type2,
      MinPrice: MinPrice,
      MaxPrice: MaxPrice,
      Price: Price,
      StoreName: StoreName,
      SkuNo: SkuNo,
    };

    let result = await fetch(`http://3.114.92.202:4003/productData/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(databody),
    });
    let data = await result.json();
    if (result.success) {
      Swal.fire({
        icon: "success",
        // title: 'Password Changed',
        text: " successfully updated",
      }).then(function () {
        history("/Product");
      });
    } 
    else {
      Swal.fire({
        icon: "success",
        // title: 'Password Changed',
        text:"successfully updated",
      });
    }
    setname("");
    setdesc("");
    setCatename("");
    setMinPrice("");
    setMaxPrice("");
    setSku("");
    setPrice("");

    fetch("http://3.114.92.202:4003/productData").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// images update function
const [picture, setPicture] = useState({ fileName: "", bytes: "" });

function editDataDisplay1(uid, id) {

  const filterData = data.filter((item) => {
    return item._id === id;
  });

  setPicture(filterData[0].imgCollection);

  setId(filterData[0]._id);
}

async function editData1() {

  var formData = new FormData();

  Object.keys(picture).forEach((imgCollection) => {
    formData.append("imgCollection", picture[imgCollection]);
  });

  let result = await fetch(`http://localhost:4003/Img/${id}`, {
    method: "post",
    mode: "cors",
    body: formData,
  });
  let data = await result.json();
  if (result.success) {
    Swal.fire({
      icon: "success",
      // title: 'Password Changed',
      text: " successfully updated",
    }).then(function () {
      history("/Product");
    });
  } 
  else {
    Swal.fire({
      icon: "success",
      // title: 'Password Changed',
      text:"successfully updated",
    });
  }
  console.log(data);
  fetch("http://3.114.92.202:4003/productData").then((result) => {
    result.json().then((resp) => {
      setData(resp);
    });
  });
  
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
                      <th class="bl5">Product name</th>
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
                              &nbsp;
                              <button
                                type="button"
                                class="btn btn-primary ab1"
                                onClick={() => {
                                  editDataDisplay1(item.uid, item._id);
                                  editHandleShow1();
                                }}
                                style={{
                                  backgroundColor: "#DD3333",
                                  color: "white",
                                  border: "none",
                                }}
                              >
                                Update
                              </button>
                              <Modal
                                size="small"
                                show={editShow1}
                                onHide={editHandleClose1}
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
                                                onChange={(e) => {
                                                  setPicture(e.target.files);
                                                }}
                                                type="file"
                                                class="custom-file-input"
                                                name="image"
                                                id="inputGroupFile01"
                                                required
                                                multiple
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
                                    onClick={editHandleClose1}
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    variant="primary"
                                    onClick={() => {
                                      editData1(item._id);
                                      editHandleClose1();
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
                                      {/* {pictureList.map((item, index) => (
                                        <div class="container">
                                          <div
                                            class="row"
                                            style={{ width: "250%" }}
                                          >
                                            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                                              <div
                                                class="card"
                                                style={{ border: "none" }}
                                              >
                                                <div style={{ width: "130%" }}>
                                                  {item &&
                                                    item.imgCollection.map(
                                                      (file, index) => (
                                                        <img
                                                          src={file}
                                                          style={{
                                                            height: "94px",
                                                            width: "94px",
                                                            float: "left",
                                                            margin: "5px",
                                                          }}
                                                        ></img>
                                                      )
                                                    )}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ))} */}
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
                                          Select Attributes 1{" "}
                                        </div>
                                        <div class="col-md-10">
                                          <div class="input-group mb-3">
                                            <div class="multiselect">
                                              <div
                                                class="selectBox"
                                                onclick="showCheckboxes()"
                                              >
                                                <select
                                                  onChange={(e) => {
                                                    filter(e.target.value);
                                                    setAttributename1(
                                                      e.target.value
                                                    );
                                                  }}
                                                  class="form-control"
                                                  style={{ width: "580%" }}
                                                >
                                                  <option>
                                                    Select Attribute 1
                                                  </option>
                                                  {Attributedata.map(
                                                    (item, index) => (
                                                      <option
                                                        key={index}
                                                        value={
                                                          item.AttributeName
                                                        }
                                                      >
                                                        {item.AttributeName}
                                                        &nbsp;
                                                      </option>
                                                    )
                                                  )}
                                                </select>
                                                <div class="overSelect"></div>
                                              </div>
                                              <br />
                                              <div
                                                id="checkboxes"
                                                value={Type}
                                                onChange={(e) => {
                                                  getpji(e);
                                                }}
                                              >
                                                {Type1.map((item) => (
                                                  <label for="one">
                                                    <input
                                                      type="checkbox"
                                                      id="one"
                                                      value={item.AttributeType}
                                                    />
                                                    &nbsp;
                                                    {item.AttributeType}
                                                    &nbsp;&nbsp;&nbsp;
                                                  </label>
                                                ))}
                                              </div>
                                              <br />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          class="col-md-2"
                                          style={{ marginTop: "7px;" }}
                                        >
                                          Select Attributes 2{" "}
                                        </div>
                                        <div class="col-md-10">
                                          <div class="input-group mb-3">
                                            <div class="multiselect">
                                              <div
                                                class="selectBox"
                                                onclick="showCheckboxes()"
                                              >
                                                <select
                                                  onChange={(e) => {
                                                    filter2(e.target.value);
                                                    setAttributename2(
                                                      e.target.value
                                                    );
                                                  }}
                                                  class="form-control"
                                                  style={{ width: "580%" }}
                                                >
                                                  <option>
                                                    Select Attribute 2
                                                  </option>

                                                  {Attributedata2.map(
                                                    (item, index) => (
                                                      <option
                                                        key={index}
                                                        value={
                                                          item.AttributeName
                                                        }
                                                      >
                                                        {item.AttributeName}
                                                      </option>
                                                    )
                                                  )}
                                                </select>
                                                <div class="overSelect"></div>
                                              </div>
                                              <br />
                                              <div
                                                id="checkboxes"
                                                value={Type2}
                                                onChange={(e) => {
                                                  getpji2(e);
                                                }}
                                              >
                                                {Type22.map((item) => (
                                                  <label for="one">
                                                    &nbsp;
                                                    <input
                                                      type="checkbox"
                                                      id="one"
                                                      value={item.AttributeType}
                                                    />
                                                    &nbsp;
                                                    {item.AttributeType}
                                                    &nbsp;&nbsp;&nbsp;
                                                  </label>
                                                ))}
                                              </div>
                                              <br />
                                            </div>
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
                                          style={{ marginTop: "7px;" }}
                                        >
                                          Select StoreName{" "}
                                        </div>
                                        <div class="col-md-10">
                                          <div class="input-group mb-3">
                                            <div class="multiselect">
                                              <div
                                                id="checkboxes"
                                                value={StoreName}
                                                onChange={(e) => {
                                                  getpji3(e);
                                                }}
                                              >
                                                {Storedata.map((item) => (
                                                  <label for="one">
                                                    <input
                                                      type="checkbox"
                                                      id="one"
                                                      value={item.Name}
                                                    />
                                                    &nbsp;
                                                    {item.Name}
                                                    &nbsp;&nbsp;&nbsp;
                                                  </label>
                                                ))}
                                              </div>
                                              <br />
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
                                      // handleSubmit();
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
                  <div class="modal-content" style={{ width: "150%" }}>
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
                                <div style={{ width: "130%" }}>
                                  {item &&
                                    item.imgCollection.map((file, index) => (
                                      <img
                                        src={file}
                                        style={{
                                          height: "94px",
                                          width: "94px",
                                          float: "left",
                                          margin: "5px",
                                        }}
                                      ></img>
                                    ))}
                                </div>

                                <div class="card-body">
                                  <p
                                    class="card-title"
                                    style={{ textAlign: "justify" }}
                                  >
                                    Description: {item.Desc}
                                  </p>
                                  <h6 class="card-subtitle mb-2 text-muted">
                                    {item.AttributeName1} :
                                    {pictureList[0] ? (
                                      pictureList[0].AttributeType1.map(
                                        (item, index) => {
                                          return (
                                            <p class="h-1 mt-4">
                                              <li key={index}>{item}</li>
                                            </p>
                                          );
                                        }
                                      )
                                    ) : (
                                      <div></div>
                                    )}
                                  </h6>

                                  <br />
                                  <h6 class="card-subtitle mb-2 text-muted">
                                    {item.AttributeName2} :{" "}
                                    {pictureList[0] ? (
                                      pictureList[0].AttributeType2.map(
                                        (item, index) => {
                                          return (
                                            <p class="h-1 mt-4">
                                              <li key={index}>{item}</li>
                                            </p>
                                          );
                                        }
                                      )
                                    ) : (
                                      <div></div>
                                    )}
                                  </h6>
                                  <p class="card-text">
                                    Min.Price: ${item.MinPrice} &nbsp; &nbsp;
                                    Max.Price: ${item.MaxPrice}
                                  </p>

                                  <p class="card-text">Price: ${item.Price}</p>

                                  <h6 class="card-subtitle mb-2 text-muted">
                                    Available Store
                                    {pictureList[0] ? (
                                      pictureList[0].StoreName.map(
                                        (item, index) => {
                                          return (
                                            <p class="h-1 mt-4">
                                              <li key={index}>{item}</li>
                                            </p>
                                          );
                                        }
                                      )
                                    ) : (
                                      <div></div>
                                    )}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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

export default Product;
