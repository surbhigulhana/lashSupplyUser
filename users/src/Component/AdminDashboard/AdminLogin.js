import React, { useState } from "react";

import Sidebar from "./Sidebar";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState(" ");
  const [active, setActive] = useState("");
  async function submit() {
    if (email === "admin@gmail.com") {
      if (pass === "123") setActive("Admin");
    }
  }

  return (
    <>
      {active === "Admin" && <Sidebar />}
      {active === "" && (
        <body style={{ background: "#F7F7F7" }}>
          <div class="container-fluid bl" style={{ paddingBottom: "90px" }}>
            <div class="row ">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="bl1" style={{ background: "#fff" }}>
                  <div class="bl3"> Admin Login</div>
                  <div class="bl4">Login to your Account</div>
                  <form>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control bxyz"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name="Adminid"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        Well never share your email with anyone else.
                      </small>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control bxyz"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="pwd"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>
                  
                    <button
                      type="submit"
                      class="btn btn-secondary bl2"
                      style={{
                        padding: "5px 110px",
                        fontSize: "26px",
                        marginTop: "25px;",
                      }}
                      onClick={() => {
                        submit();
                      }}
                    >
                      LOGIN
                    </button>
                  </form>
                </div>
              </div>

              <div class="col-md-4"></div>
            </div>
          </div>

          <script src="js/jquery.min.js"></script>
          <script src="js/bootstrap.bundle.min.js"></script>

          <script src="js/jquery.easing.min.js"></script>

          <script src="js/sb-admin-2.min.js"></script>

          <script src="js/Chart.min.js"></script>

          <script src="js/demo/chart-area-demo.js"></script>
          <script src="js/demo/chart-pie-demo.js"></script>
        </body>
      )}
    </>
  );
};

export default AdminLogin;
