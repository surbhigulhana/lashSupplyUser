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

const AddProduct = () => {
  const [Name, setname] = useState("");
  const [Desc, setdesc] = useState("");
  const [AttributeName, setAttributename] = useState("");
  const [Type, setType] = useState('');
  const [AttributeName2, setAttributename2] = useState("");
  const [Type2, setType2] = useState('');
  const [CateName, setCatename] = useState("");
  const [MinPrice, setMinPrice] = useState("");
  const [MaxPrice, setMaxPrice] = useState("");
  const [Price, setPrice] = useState("");
  const [picture, setPicture] = useState({ fileName: "", bytes: "" });
  const [SkuNo, setSku] = useState("");
  // const [Inventory, setInventory] = useState("");
  const [AllProductdata, setAllProduct] = useState([]);
  const handlePicture = (event) => {
    setPicture({
      fileName: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };

  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append("Name", Name);
    formData.append("Desc", Desc);
    formData.append("AttributeName1", AttributeName);
    // formData.append("AttributeType1", Type);

    // Type.split("").forEach((item1) => formData.append("AttributeType1[]", item1))
    // console.log(formData.getAll("AttributeType1[]"))
    
    // Type2.split("").forEach((item2) => formData.append("AttributeType2[]", item2))
    // console.log(formData.getAll("AttributeType2[]"))


    Object.keys(Type).forEach(AttributeType1 => {
      formData.append('AttributeType1', Type[AttributeType1]);
    })



    formData.append("AttributeName2", AttributeName2);
    Object.keys(Type2).forEach(AttributeType2 => {
      console.log(AttributeType2, Type2[AttributeType2]);
      formData.append('AttributeType2', Type2[AttributeType2]);
    })
    

    formData.append("MinPrice", MinPrice);
    formData.append("MaxPrice", MaxPrice);
    formData.append("Price", Price);
    // formData.append("Inventory", Inventory);
    formData.append("SkuNo", SkuNo);
    formData.append("CateName", CateName);
    formData.append("filename", picture.bytes);
   

    try {
      const response = await fetch("http://3.114.92.202:4003/api/productData", {
        method: "POST",
        mode: "cors",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      setname("");
      setdesc("");
      setAttributename("");
      setCatename("");
      setType([]);
      setType1([]);
      setMinPrice("");
      setMaxPrice("");
      // setInventory("");
      setSku("");
      setPrice("");
      fetch("http://3.114.92.202:4003/productData").then((result) => {
        result.json().then((resp) => {
          setAllProduct(resp);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const getpji = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setType([...Type, value]);
      console.log("type",Type)
    } else {
      setType(Type.filter((e) => e !== value));
    }
  };
  const getpji2 = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setType2([...Type2, value[0]]);
    } else {
      setType2(Type2.filter((e) => e !== value));
    }
  };

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
    // setAttributename(data)
    console.log(Type1);
  }

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
    console.log(Type22);
  }

  //----------------------------------------------------------------------

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
                  <h1 class="h3 mb-0 text-gray-800">Add Product</h1>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-2" style={{ marginTop: "7px;" }}>
                      Select Product
                    </div>
                    <div class="col-md-10">
                      <div class="input-group mb-3">
                        <select
                          class="custom-select"
                          id="inputGroupSelect01"
                          value={Name}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        >
                          <option selected>Select Product </option>
                          {Pdata.map((item) => (
                            <option value={item.Name}>{item.Name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">Product Description</div>

                    <div class="col-md-10">
                      <input
                        type="description"
                        class="form-control"
                        placeholder="Product Description"
                        style={{ height: "100px" }}
                        value={Desc}
                        onChange={(e) => {
                          setdesc(e.target.value);
                        }}
                      />
                      <br />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2" style={{ marginTop: "7px;" }}>
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
                          <option selected>Select Category </option>
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
                    <div class="col-md-2" style={{ marginTop: "6px;" }}>
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
                    <div class="col-md-2" style={{ marginTop: "6px;" }}>
                      Max. price{" "}
                    </div>

                    <div class="col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        name="price1"
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
                    <div class="col-md-2" style={{ marginTop: "6px;" }}>
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
                    <div class="col-md-2" style={{ marginTop: "7px;" }}>
                      Select Attributes 1{" "}
                    </div>
                    <div class="col-md-10">
                      <div class="input-group mb-3">
                        <div class="multiselect">
                          <div class="selectBox" onclick="showCheckboxes()">
                            <select
                              onChange={(e) => {
                                filter(e.target.value);
                                setAttributename(e.target.value);
                              }}
                              class="form-control"
                              style={{width:"580%"}}
                            >
                              <option>Select Attribute 1</option>
                              {Attributedata.map((item, index) => (
                                <option key={index} value={item.AttributeName}>
                                  {item.AttributeName}&nbsp;
                                </option> 
                              ))}
                            </select>
                            <div class="overSelect"></div>
                          </div>
                          <br/>
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
                                />&nbsp;
                                {item.AttributeType}&nbsp;&nbsp;&nbsp;
                              </label>
                            ))}
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2" style={{ marginTop: "7px;" }}>
                      Select Attributes 2{" "}
                    </div>
                    <div class="col-md-10">
                      <div class="input-group mb-3">
                        <div class="multiselect">
                          <div class="selectBox" onclick="showCheckboxes()">
                            <select
                              onChange={(e) => {
                                filter2(e.target.value);
                                setAttributename2(e.target.value);
                              }}
                              class="form-control"
                              style={{width:"580%"}}
                            >
                              <option>Select Attribute 2</option>
                              
                              {Attributedata2.map((item, index) => (
                                
                                <option key={index} value={item.AttributeName}>
                                  {item.AttributeName}
                                </option>
                              ))}
                            </select>
                            <div class="overSelect"></div>
                          </div><br/>
                          <div
                            id="checkboxes"
                            value={Type2}
                            onChange={(e) => {
                              getpji2(e);
                            }}
                          >
                            {Type22.map((item) => (
                              <label for="one">&nbsp;
                                <input
                                  type="checkbox"
                                  id="one"
                                  value={item.AttributeType}
                                />&nbsp;
                                {item.AttributeType}&nbsp;&nbsp;&nbsp;
                              </label>
                            ))}
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-2" style={{ marginTop: "6px;" }}>
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
                          setInventory(e.target.value);
                        }}
                      />
                      <br />
                    </div>
                  </div> */}
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

export default AddProduct;











// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../css/bootstrap.css";
// import "../css/style.css";
// import "../css/all.min.css";
// import "../css/nunito.css";
// import "../css/sb-admin-2.min.css";
// import "../css/dataTables.bootstrap4.min.css";
// import logo from "../img/logo.png";
// import img1 from "../img/ser9.jpg";

// const AddProduct = () => {
//   const [Name, setname] = useState("");
//   const [Desc, setdesc] = useState("");
//   const [AttributeName1, setAttributename1] = useState("");
//   const [AttributeType1, setAType1] = useState("");
//   const [AttributeName2, setAttributename2] = useState("");
//   const [AttributeType2, setAType2] = useState("");
  
//   const [CateName, setCatename] = useState("");
//   const [MinPrice, setMinPrice] = useState("");
//   const [MaxPrice, setMaxPrice] = useState("");
//   const [Price, setPrice] = useState("");
//   const [picture, setPicture] = useState({ fileName: "", bytes: "" });
//   const [SkuNo, setSku] = useState("");
//   const [Inventory, setInventory] = useState("");
//   const [AllProductdata, setAllProduct] = useState([]);
//   const handlePicture = (event) => {
//     setPicture({
//       fileName: URL.createObjectURL(event.target.files[0]),
//       bytes: event.target.files[0],
//     });
//   };
//   const handleSubmit = async () => {
//     var formData = new FormData();
//     formData.append("Name", Name);
//     formData.append("Desc", Desc);
//     formData.append("AttributeName1", AttributeName1);
//     formData.append("AttributeType1", AttributeType1);
//     formData.append("AttributeName2", AttributeName2);
//     formData.append("AttributeType2", AttributeType2);
//     formData.append("MinPrice", MinPrice);
//     formData.append("MaxPrice", MaxPrice);
//     formData.append("Price", Price);
//     formData.append("Inventory", Inventory);
//     formData.append("SkuNo",SkuNo)
//     formData.append("CateName", CateName);
//     formData.append("filename", picture.bytes);
//     try {
//       const response = await fetch("http://3.114.92.202:4003/api/productData", {
//         method: "POST",
//         mode: "cors",
//         body: formData,
//       });
//       const result = await response.json();
//       console.log(result);
//       setname("");
//       setdesc("");
//       setAttributename1("");
//       setAttributename2("");
//       setCatename("");
//       setAType1("");
//       setAType2("");
//       setMinPrice("");
//       setMaxPrice("");
//       setInventory("");
//       setSku("");
//       setPrice("");
//       fetch("http://3.114.92.202:4003/productData").then((result) => {
//         result.json().then((resp) => {
//           setAllProduct(resp);
//         });
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const [Pdata, setPData] = useState([]);
//   useEffect(() => {
//     fetch("http://3.114.92.202:4003/product").then((result) => {
//       result.json().then((resp) => {
//         setPData(resp);
//       });
//     });
//   }, []);
//   // ---------------------------------------------------------------------------
//   const [Catedata, setCData] = useState([]);

//   useEffect(() => {
//     fetch("http://3.114.92.202:4003/category").then((result) => {
//       result.json().then((resp) => {
//         setCData(resp);
//       });
//     });
//   }, []);
//   // -------------------------------------------------------------
//   const [Attributedata1, setAttributeData] = useState([]);
//   useEffect(() => {
//     fetch("http://3.114.92.202:4003/attribute").then((result) => {
//       result.json().then((resp) => {
//         setAttributeData(resp);
//       });
//     });
//   }, []);
//   const [Attributedata2, setAttributeData1] = useState([]);
//   useEffect(() => {
//     fetch("http://3.114.92.202:4003/attribute").then((result) => {
//       result.json().then((resp) => {
//         setAttributeData1(resp);
//       });
//     });
//   }, []);

//   const[Type1,setType1]=useState([])
//   async function filter(id){
//     let result = await fetch(`http://3.114.92.202:4003/display/${id}`)
//     let data = await result.json();
//     setType1(data);
//     // setAttributename(data)
//     console.log(Type1);
//   }
//   console.log("jii",AttributeName1)

//   const[Type2,setType2]=useState([])
//   async function filter1(id){
//     let result = await fetch(`http://3.114.92.202:4003/display/${id}`)
//     let data = await result.json();
//     setType2(data);
//     // setAttributename(data)
//     console.log(Type2);
//   }
//   console.log("jii",AttributeName2)

//   //----------------------------------------------------------------------
 

//   return (
//     <div>
//       <body id="page-top">
//         {/* <!-- Page Wrapper --> */}
//         <div id="wrapper">
//           {/* <!-- Sidebar --> */}
//           <ul
//             class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
//             id="accordionSidebar"
//           >
//             {/* <!-- Sidebar - Brand --> */}
//             <a
//               class="sidebar-brand d-flex align-items-center justify-content-center"
//               href="/Sidebar"
//             >
//               <div class="sidebar-brand-icon ">
//                 <img src={logo} />
//               </div>
//             </a>

//             {/* <!-- Divider --> */}
//             <hr class="sidebar-divider my-0" />

//             {/* <!-- Nav Item - Dashboard --> */}

//             {/* <!-- Divider --> */}
//             <hr class="sidebar-divider" />

//             {/* <!-- Heading --> */}

//             {/* <!-- Nav Item - Pages Collapse Menu --> */}
//             <li class="nav-item">
//               <a class="nav-link" href="/Sidebar">
//                 <i class="fa fa-cog"></i>
//                 <span>Dashboard </span>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 class="nav-link collapsed"
//                 href="users.html"
//                 data-toggle="collapse"
//                 data-target="#collapseTwo"
//                 aria-expanded="true"
//                 aria-controls="collapseTwo"
//               >
//                 <i class="fa fa-cog"></i>
//                 <span>Users</span>
//               </a>
//               <div
//                 id="collapseTwo"
//                 class="collapse"
//                 aria-labelledby="headingTwo"
//                 data-parent="#accordionSidebar"
//               >
//                 <div class="bg-white py-2 collapse-inner rounded">
//                   <a class="collapse-item" href="/ShowUser">
//                     Registered Users
//                   </a>
//                   <a class="collapse-item" href="/BlockUser">
//                     Restricted Users
//                   </a>
//                 </div>
//               </div>
//             </li>

//             <li class="nav-item">
//               <a class="nav-link" href="/Category">
//                 <i class="fa fa-cog"></i>
//                 <span>Categories</span>
//               </a>
//             </li>

//             <li class="nav-item">
//               <a
//                 class="nav-link collapsed"
//                 href="#"
//                 data-toggle="collapse"
//                 data-target="#collapseThree"
//                 aria-expanded="true"
//                 aria-controls="collapseThree"
//               >
//                 <i class="fa fa-cog"></i>
//                 <span>Attributes</span>
//               </a>
//               <div
//                 id="collapseThree"
//                 class="collapse"
//                 aria-labelledby="headingThree"
//                 data-parent="#accordionSidebar"
//               >
//                 <div class="bg-white py-2 collapse-inner rounded">
//                   <a class="collapse-item" href="/AttributeName">
//                     Attribute Name
//                   </a>
//                   <a class="collapse-item" href="/AttributeType">
//                     Attribute Type
//                   </a>
//                 </div>
//               </div>
//             </li>
//             <li class="nav-item">
//               <a
//                 class="nav-link collapsed"
//                 href="#"
//                 data-toggle="collapse"
//                 data-target="#collapsefour"
//                 aria-expanded="true"
//                 aria-controls="collapseThree"
//               >
//                 <i class="fa fa-cog"></i>
//                 <span>Product</span>
//               </a>
//               <div
//                 id="collapsefour"
//                 class="collapse"
//                 aria-labelledby="headingThree"
//                 data-parent="#accordionSidebar"
//               >
//                 <div class="bg-white py-2 collapse-inner rounded">
//                   <a class="collapse-item" href="/ProductName">
//                     Product Name
//                   </a>
//                   <a class="collapse-item" href="/Product">
//                   Product Details
//                   </a>
//                 </div>
//               </div>
//             </li>
          

//             <li class="nav-item">
//               <a
//                 class="nav-link collapsed"
//                 href="users.html"
//                 data-toggle="collapse"
//                 data-target="#collapseTwo1"
//                 aria-expanded="true"
//                 aria-controls="collapseTwo"
//               >
//                 <i class="fa fa-cog"></i>
//                 <span>Order</span>
//               </a>
//               <div
//                 id="collapseTwo1"
//                 class="collapse"
//                 aria-labelledby="headingTwo"
//                 data-parent="#accordionSidebar"
//               >
//                 <div class="bg-white py-2 collapse-inner rounded">
//                   <a class="collapse-item" href="/Order">
//                   Order
//                   </a>
//                   <a class="collapse-item" href="/Payment">
//                     Payment OverView
//                   </a>
//                 </div>
//               </div>
//             </li>
            
           
            
//             <li class="nav-item">
//               <a class="nav-link" href="/Inquiry">
//                 <i class="fa fa-cog"></i>
//                 <span>Inquiry</span>
//               </a>
//             </li>
            
//             <li class="nav-item">
//               <a class="nav-link" href="/Ticket">
//                 <i class="fa fa-cog"></i>
//                 <span>Ticket</span>
//               </a>
//             </li>
//             {/* <!-- Sidebar Toggler (Sidebar) --> */}
//             <div class="text-center d-none d-md-inline">
//               <button
//                 class="rounded-circle border-0"
//                 id="sidebarToggle"
//               ></button>
//             </div>
//           </ul>
//           {/* <!-- End of Sidebar --> */}

//           {/* <!-- Content Wrapper --> */}
//           <div id="content-wrapper" class="d-flex flex-column">
//             {/* <!-- Main Content --> */}
//             <div id="content">
//               {/* <!-- Topbar --> */}
//               <header>
//                 <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
//                   {/* <!-- Sidebar Toggle (Topbar) --> */}
//                   <button
//                     id="sidebarToggleTop"
//                     class="btn btn-link d-md-none rounded-circle mr-3"
//                   >
//                     <i class="fa fa-bars"></i>
//                   </button>

//                   {/* <!-- Topbar Search --> */}
//                   <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
//                     <div class="input-group">
//                       <input
//                         type="text"
//                         class="form-control bg-light border-0 small"
//                         placeholder="Search for..."
//                         aria-label="Search"
//                         aria-describedby="basic-addon2"
//                       />
//                       <div class="input-group-append">
//                         <button class="btn btn-primary an" type="button">
//                           <i class="fa fa-search"></i>
//                         </button>
//                       </div>
//                     </div>
//                   </form>

//                   {/* <!-- Topbar Navbar --> */}
//                   <ul class="navbar-nav ml-auto">
//                     {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
//                     <li class="nav-item dropdown no-arrow d-sm-none">
//                       <a
//                         class="nav-link dropdown-toggle"
//                         href="#"
//                         id="searchDropdown"
//                         role="button"
//                         data-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                       >
//                         <i class="fas fa-search fa-fw"></i>
//                       </a>
//                       {/* <!-- Dropdown - Messages --> */}
//                       <div
//                         class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
//                         aria-labelledby="searchDropdown"
//                       >
//                         <form class="form-inline mr-auto w-100 navbar-search">
//                           <div class="input-group">
//                             <input
//                               type="text"
//                               class="form-control bg-light border-0 small"
//                               placeholder="Search for..."
//                               aria-label="Search"
//                               aria-describedby="basic-addon2"
//                             />
//                             <div class="input-group-append">
//                               <button class="btn btn-primary an" type="button">
//                                 <i class="fas fa-search fa-sm"></i>
//                               </button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </li>

//                     {/* <!-- Nav Item - Alerts --> */}

//                     {/* <!-- Nav Item - Messages --> */}

//                     {/* <!-- Nav Item - User Information --> */}
//                     <li class="nav-item dropdown no-arrow">
//                       <a
//                         class="nav-link dropdown-toggle"
//                         href="#"
//                         id="userDropdown"
//                         role="button"
//                         data-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                       >
//                         <span class="mr-2 d-none d-lg-inline text-gray-600 small am">
//                           Anil Singh
//                         </span>
//                         <img class="img-profile rounded-circle" src={img1} />
//                         {/* &nbsp; &nbsp; */}
//                         <button type="button" class="btn btn-primary an1">
//                           Logout
//                         </button>
//                       </a>
//                       {/* <!-- Dropdown - User Information --> */}
//                       <div
//                         class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
//                         aria-labelledby="userDropdown"
//                       >
//                         <div class="dropdown-divider"></div>
//                         <a
//                           class="dropdown-item"
//                           href="#"
//                           data-toggle="modal"
//                           data-target="#logoutModal"
//                         >
//                           <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//                           Logout
//                         </a>
//                       </div>
//                     </li>
//                   </ul>
//                 </nav>
//               </header>
//               {/* <!-- End of Topbar --> */}

//               {/* <!-- Begin Page Content --> */}
//               <div class="container-fluid">
//                 {/* <!-- Page Heading --> */}
//                 <div class="d-sm-flex align-items-center justify-content-between mb-4">
//                   <h1 class="h3 mb-0 text-gray-800">Add Product</h1>
//                 </div>
//                 <form>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "7px;" }}>
//                       Select Product
//                     </div>
//                     <div class="col-md-10">
//                       <div class="input-group mb-3">
//                         <select
//                           class="custom-select"
//                           id="inputGroupSelect01"
//                           value={Name}
//                           onChange={(e) => {
//                             setname(e.target.value);
//                           }}
//                         >
//                           <option selected>Select Product </option>
//                           {Pdata.map((item) => (
//                             <option value={item.Name}>{item.Name}</option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2">Product Description</div>

//                     <div class="col-md-10">
//                       <input
//                         type="description"
//                         class="form-control"
//                         placeholder="Product Description"
//                         style={{ height: "100px" }}
//                         value={Desc}
//                         onChange={(e) => {
//                           setdesc(e.target.value);
//                         }}
//                       />
//                       <br />
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "7px;" }}>
//                       Select Category{" "}
//                     </div>
//                     <div class="col-md-10">
//                       <div class="input-group mb-3">
//                         <select
//                           class="custom-select"
//                           id="inputGroupSelect01"
//                           value={CateName}
//                           onChange={(e) => {
//                             setCatename(e.target.value);
//                           }}
//                         >
//                           <option selected>Select Category </option>
//                           {Catedata.map((item) => (
//                             <option value={item.CateName}>
//                               {item.CateName}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "6px;" }}>
//                       Min. price{" "}
//                     </div>

//                     <div class="col-md-10">
//                       <input
//                         type="text"
//                         class="form-control"
//                         name="price"
//                         placeholder="Min. price"
//                         style={{ marginBottom: "16px;" }}
//                         required
//                         value={MinPrice}
//                         onChange={(e) => {
//                           setMinPrice(e.target.value);
//                         }}
//                       />
//                       <br />
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "6px;" }}>
//                       Max. price{" "}
//                     </div>

//                     <div class="col-md-10">
//                       <input
//                         type="text"
//                         class="form-control"
//                         name="price1"
//                         placeholder="Max. price"
//                         style={{ marginBottom: "16px;" }}
//                         required
//                         value={MaxPrice}
//                         onChange={(e) => {
//                           setMaxPrice(e.target.value);
//                         }}
//                       />
//                       <br />
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "6px;" }}>
//                       SKU Number{" "}
//                     </div>

//                     <div class="col-md-10">
//                       <input
//                         type="text"
//                         class="form-control"
//                         name="sku"
//                         placeholder="SKU Number"
//                         style={{ marginBottom: "16px;" }}
//                         required
//                         value={SkuNo}
//                         onChange={(e) => {
//                           setSku(e.target.value);
//                         }}
//                       />
//                       <br />
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "7px;" }}>
//                       Select Attributes 1{" "}
//                     </div>
//                     <div class="col-md-10">
//                       <div class="input-group mb-3">
//                       <select
//                           class="custom-select"
//                           id="inputGroupSelect01"
//                          onChange={(e)=>{filter(e.target.value);setAttributename1(e.target.value)}}
//                         >


//                           <option selected>Select Attribute </option>
//                           {Attributedata1.map((item,index) => (
//                             <option key={index} value={item.AttributeName}>{item.AttributeName}</option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "7px;" }}>
//                       Select Attributes Type 1{" "}
//                     </div>
//                     <div class="col-md-10">
//                       <div class="input-group mb-3">
//                         <select class="custom-select" id="inputGroupSelect01"  value={AttributeType1}
//                           onChange={(e) => {
//                             setAType1(e.target.value)
//                           }}>
//                           <option selected>Select Type </option>
//                           {Type1.map((item) => (
//                             <option value={item.AttributeType}>{item.AttributeType}</option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
                  

//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "7px;" }}>
//                       Select Attributes 2{" "}
//                     </div>
//                     <div class="col-md-10">
//                       <div class="input-group mb-3">
//                       <select
//                           class="custom-select"
//                           id="inputGroupSelect01"
//                          onChange={(e)=>{filter1(e.target.value);setAttributename2(e.target.value)}}
//                         >


//                           <option selected>Select Attribute </option>
//                           {Attributedata2.map((item,index) => (
//                             <option key={index} value={item.AttributeName}>{item.AttributeName}</option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "7px;" }}>
//                       Select Attributes Type 2{" "}
//                     </div>
//                     <div class="col-md-10">
//                       <div class="input-group mb-3">
//                         <select class="custom-select" id="inputGroupSelect01"  value={AttributeType2}
//                           onChange={(e) => {
//                             setAType2(e.target.value)
//                           }}>
//                           <option selected>Select Type </option>
//                           {Type2.map((item) => (
//                             <option value={item.AttributeType}>{item.AttributeType}</option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "6px;" }}>
//                       Price{" "}
//                     </div>

//                     <div class="col-md-10">
//                       <input
//                         type="text"
//                         class="form-control"
//                         name="price"
//                         placeholder="Price"
//                         style={{ marginBottom: "16px;" }}
//                         required
//                         value={Price}
//                           onChange={(e) => {
//                             setPrice(e.target.value)
//                           }}
//                       />
//                       <br />
//                     </div>
//                   </div>

//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "6px;" }}>
//                       Upload Images{" "}
//                     </div>
//                     <div class="col-md-10">
//                       <div class="input-group mb-3">
//                         <div class="custom-file">
//                           <input
                        
//                            accept="image/*"
                     
                          
//                            onChange={handlePicture}
//                             type="file"
//                             class="custom-file-input"
//                             name="image"
//                             id="inputGroupFile01"
//                             required
//                           />
//                           <label
//                             class="custom-file-label"
//                             for="inputGroupFile01"
//                           >
//                             Choose file
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2" style={{ marginTop: "6px;" }}>
//                       Product Inventory
//                     </div>

//                     <div class="col-md-10">
//                       <input
//                         type="text"
//                         class="form-control"
//                         name="price"
//                         placeholder="Inventory"
//                         style={{ marginBottom: "16px;" }}
//                         required
//                         value={Inventory}
//                           onChange={(e) => {
//                             setInventory(e.target.value)
//                           }}
//                       />
//                       <br />
//                     </div>
//                   </div>
//                   <div class="row">
//                     <div class="col-md-2"></div>
//                     <div class="col-md-10">
//                       <button
//                         type="button"
//                         class="btn btn-success ab1"
//                         style={{
//                           marginBottom: "20px;",
//                           backgroundColor: "#DD3333",
//                           border: "1px solid #DD3333",
//                         }} onClick={() => {handleSubmit();}}
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//               <br />
//               {/* <!-- /.container-fluid --> */}
//             </div>
//             {/* <!-- End of Main Content --> */}

//             {/* <!-- Footer --> */}
//             <footer class="sticky-footer bg-white">
//               <div class="container my-auto">
//                 <div class="copyright text-center my-auto">
//                   <span>&copy; The Lash Supply @ All right reserved</span>
//                 </div>
//               </div>
//             </footer>
//             {/* <!-- End of Footer --> */}
//           </div>
//           {/* <!-- End of Content Wrapper --> */}
//         </div>
//         {/* <!-- End of Page Wrapper --> */}

//         {/* <!-- Scroll to Top Button--> */}
//         <a class="scroll-to-top rounded" href="#page-top">
//           <i class="fas fa-angle-up"></i>
//         </a>
//       </body>
//     </div>
//   );
// };

// export default AddProduct;
