import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/all.min.css";
import "../css/nunito.css";
import "../css/sb-admin-2.min.css";
import "../css/dataTables.bootstrap4.min.css";
import logo  from '../img/logo.png'
import img1 from '../img/ser9.jpg'

const AddDiscountCoupon = () => {
  const [data, setData] = useState([]);
  // ---------------------------category Post------------------

  const [CouponName, setname] = useState("");
  const[CouponType,setType]=useState("");
  const [DiscountPercent, setDiscountPer] = useState("");
  const [DiscountAmt, setDiscountAmt] = useState("");
  const [CartValue1, setCartValue] = useState("");
let CartValue =DiscountAmt*DiscountPercent
  const handleSubmit = async () => {
    var formData = new FormData();
    formData.append("CouponName", CouponName);
    formData.append("CouponType", CouponType);
    formData.append("DiscountPercent", DiscountPercent);
    formData.append("DiscountAmt", DiscountAmt);
    formData.append("CartValue", CartValue);

    try {
      const response = await fetch("http://3.114.92.202:4003/api/discount", {
        method: "POST",
        mode: "cors",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      setname("");
      setCartValue("");
      setDiscountAmt("");
      setDiscountPer("");
      setCartValue("");
      fetch("http://3.114.92.202:4003/discount").then((result) => {
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

<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">Add Discount Offers</h1>
  
</div>
<form>
<div class="row">
<div class="col-md-2" style={{marginTop:"6px;"}}>Coupon Name </div>


<div class="col-md-10">
<input type="text"  class="form-control" name="coupon"  placeholder="Coupon Name" style={{marginBottom:"16px;"}}  value={CouponName} onChange={(e)=>{setname(e.target.value)}} required/>
</div>

</div>
<br/>
<div class="row">
<div class="col-md-2" style={{marginTop:"7px;"}}>Coupon Type </div>
<div class="col-md-10"><div class="input-group mb-3">

<select class="custom-select" id="inputGroupSelect01"  value={CouponType} onChange={(e)=>{setType(e.target.value)}} >
<option selected>Select Coupon Type </option>
<option value="Fixed" >Fixed</option>
<option value="Percentage">Percentage</option>


</select>
</div></div>
</div>
<div class="row">
<div class="col-md-2" style={{marginTop:"6px;"}}>Coupon Discount % </div>


<div class="col-md-10">
<input type="text"  class="form-control" name="discount"  placeholder="Coupon Discount %" style={{marginBottom:"16px;"}} required  value={DiscountPercent} onChange={(e)=>{setDiscountPer(e.target.value)}} />
</div>

</div>
<br/>
<div class="row">
<div class="col-md-2" style={{marginTop:"6px;"}}>Coupon Discount Amount </div>


<div class="col-md-10">
<input type="text"  class="form-control" name="discount amount"  placeholder="Coupon Discount Amount" style={{marginBottom:"16px;"}} required   value={DiscountAmt} onChange={(e)=>{setDiscountAmt(e.target.value)}}  />
</div>

</div>
<div class="row">
<div class="col-md-2" style={{marginTop:"6px;"}}>Cart Value </div>


<div class="col-md-10">
<input type="text"  class="form-control" name="cart"  placeholder="Cart Value" style={{marginBottom:"16px;"}} required  value={CartValue} onChange={(e)=>{setCartValue(e.target.value)}} />
</div>

</div>





<div class="row">
<div class="col-md-2"></div>
<div class="col-md-10">
  <br/><button type="button" class="btn btn-success ab1" style={{marginBottom:"20px",backgroundColor:"#DD3333"}} onClick={handleSubmit}>Submit</button></div>
</div>
</form>


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
  )
}

export default AddDiscountCoupon
