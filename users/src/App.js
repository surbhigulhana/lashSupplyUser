import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Component/AdminDashboard/AdminLogin";
import Sidebar from "./Component/AdminDashboard/Sidebar";
import ShowUser from "./Component/AdminDashboard/ShowUser";
import BlockUser from "./Component/AdminDashboard/BlockUser";
import Category from "./Component/AdminDashboard/Category";
import AddCategory from "./Component/AdminDashboard/AddCategory";
import AttributeName from "./Component/AdminDashboard/AttributeName";
import AttributeType from "./Component/AdminDashboard/AttributeType";
import AddAttributeName from "./Component/AdminDashboard/AddAttributeName";
import AddAttributeType from "./Component/AdminDashboard/AddAttributeType";
import Product from "./Component/AdminDashboard/Product";
import AddProduct from "./Component/AdminDashboard/AddProduct";
import ProductName from "./Component/AdminDashboard/ProductName";
import AddProductName from "./Component/AdminDashboard/AddProductName";
// import DiscountCoupon from "./Component/AdminDashboard/DiscountCoupon";
import AddDiscountCoupon from "./Component/AdminDashboard/AddDiscountCoupon";
import Inquiry from "./Component/AdminDashboard/Inquiry";
import Ticket from "./Component/AdminDashboard/Ticket";
import Order from "./Component/AdminDashboard/Order";
import OrderDetails from "./Component/AdminDashboard/OrderDetails";
import Payment from "./Component/AdminDashboard/Payment";
import PendingOrder from "./Component/AdminDashboard/PendingOrder";
import CompleteOrder from "./Component/AdminDashboard/CompleteOrder";
import Webcam from "./Component/Webcam";
import Webcam1 from "./Component/Webcam";
import DummpyPrdo from "./Component/AdminDashboard/DummpyPrdo";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<AdminLogin />}></Route>
          <Route exact path="/Sidebar" element={<Sidebar />}></Route>
          <Route exact path="/ShowUser" element={<ShowUser />}></Route>
          <Route exact path="/BlockUser" element={<BlockUser />}></Route>
          <Route exact path="/Category" element={<Category />}></Route>
          <Route exact path="/AddCategory" element={<AddCategory />}></Route>
          <Route
            exact
            path="/AttributeName"
            element={<AttributeName />}
          ></Route>
          <Route
            exact
            path="/AttributeType"
            element={<AttributeType />}
          ></Route>
          <Route
            exact
            path="/AddAttributeName"
            element={<AddAttributeName />}
          ></Route>
          <Route
            exact
            path="/AddAttributeType"
            element={<AddAttributeType />}
          ></Route>
          <Route exact path="/Product" element={<Product />}></Route>
          <Route exact path="/AddProduct" element={<AddProduct />}></Route>
          <Route exact path="/ProductName" element={<ProductName />}></Route>
          <Route
            exact
            path="/AddProductName"
            element={<AddProductName />}
          ></Route>
          {/* <Route
            exact
            path="/Discount"
            element={<DiscountCoupon />}
          ></Route>{" "}
          <Route
            exact
            path="/AddDiscount"
            element={<AddDiscountCoupon/>}
          ></Route>{" "} */}
          <Route
            exact
            path="/Inquiry"
            element={<Inquiry />}
          ></Route>
            <Route exact path="/Ticket" element={<Ticket/>}></Route>
            <Route exact path="/Order" element={<Order/>}></Route>
            <Route exact path="/OrderDetails" element={<OrderDetails/>}></Route>
            <Route exact path="/Payment" element={<Payment/>}></Route>
            <Route exact path="/Orderp" element={<PendingOrder/>}></Route> 
            <Route exact path="/Orderc" element={<CompleteOrder/>}></Route>
            <Route exact path="/dummy" element={<DummpyPrdo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
