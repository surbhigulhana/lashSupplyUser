import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/all.min.css";
import "../css/nunito.css";
import "../css/sb-admin-2.min.css";
import "../css/dataTables.bootstrap4.min.css";
import logo  from '../img/logo.png'
import img1 from '../img/ser9.jpg'
import { Table, Modal, Button } from "react-bootstrap";


const Payment = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const getUser = async () => {
    let result = await fetch("http://54.177.55.202:4003/payment");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getUser();
  }, []);

  //-----------------------------------------------------------------------
  const [id, setId] = useState("");

  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  const handleShow = () => setEditShow(true);
  const [status, setUsstatus] = useState("");
  function editDataDisplay(uid, id) {
    console.log("loop", id);
    const filterData = data.filter((item) => {
      return item._id === id;
    });
    console.log(filterData);
    setUsstatus(filterData[0].Status);
    setId(filterData[0]._id);
  }
  async function editData() {
    // console.log("loop", id);
    let databody = {
      Status: status,
    };

    let result = await fetch(`http://54.177.55.202:4003/payment/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(databody),
    });
    let data = await result.json();
    console.log(data);
    getUser();
    setUsstatus("");
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
             <a class="nav-link" href="/Discount">
               <i class="fa fa-cog"></i>
               <span>Discount Coupon List</span>
             </a>
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
  <h1 class="h3 mb-0 text-gray-800">Payment Overview</h1>
  <div class="row">

<div class="col-md-12"></div>
</div>
</div>
<Table id="example"  striped
                  bordered
                  hover style={{width:"100%"}}>
<thead>



  <tr> 
  <th class="bl5" width="15%">#</th> 
  <th class="bl5" width="15%">Product name</th>
      <th class="bl5" width="20%">User name</th>
      <th class="bl5" width="14%">Purchase date</th>
        <th class="bl5" width="10%">Total price</th>
          <th class="bl5" width="13%">Status</th>
          <th class="bl5" width="13%">Mode of Payment</th>
           <th class="bl5" width="15%">Change Status</th>
     
     
     
  </tr>
</thead>
<tbody>
                    {data &&
                      data
                        .filter((val) => {
                          if (search == "") {
                            return val;
                          } else if (
                            val.Pname.toLowerCase().includes(
                              search.toLowerCase()
                            )
                          ) {
                            return val;
                          } else if (
                            val.UserEmail.toLowerCase().includes(
                              search.toLowerCase()
                            )
                          ) {
                            return val;
                          }
                        })
                        .map((item, index) => (
                          <tr key={item._id}>
                            <td data-label="User Id">{index + 1}</td>
                            <td data-label="firstName">{item.Pname}</td>
                            <td data-label="LastName">{item.UserEmail}</td>
                            <td data-label="Phone">{item.PurchaseDate}</td>
                            <td data-label="Email">{item.TotalAmt}</td>
                            <td data-label="Email">{item.Status}</td>
                            <td data-label="Email">{item.Mode}</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-primary ab1"
                                onClick={() => {
                                  editDataDisplay(item.uid, item._id);
                                  handleShow();
                                }}
                              >
                                Change
                              </button>
                            </td>
                           
                            <Modal show={editShow} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Change Status </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <select
                                  id=" "
                                  defaultValue={status}
                                  onChange={(e) => setUsstatus(e.target.value)}
                                >
                                  <option value="Pending">Pending</option>
                                  <option value="Completed">Completed</option>
                                </select>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                  style={{ width: "20%" }}
                                >
                                  Close
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={() => {
                                    editData(item.uid, item._id);
                                    handleClose();
                                  }}
                                >
                                  Change
                                </Button>
                              </Modal.Footer>
                            </Modal>
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

export default Payment
