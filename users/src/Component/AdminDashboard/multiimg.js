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
const MultiImg = () => {
  const [picture, setPicture] = useState({ fileName: "", bytes: "" });

  const handleSubmit = async () => {
    var formData = new FormData();

    // formData.append("imgCollection", picture);

    Object.keys(picture).forEach((imgCollection) => {
      formData.append("imgCollection", picture[imgCollection]);
    });

    try {
      const response = await fetch("http://localhost:4003/upload-images", {
        method: "POST",
        mode: "cors",
        body: formData,
      });
      const result = await response.json();
      console.log(result);

      fetch("http://localhost:4003/getimg").then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4003/getimg").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log(picture);
  return (
    <div>
      <body id="page-top">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Sidebar --> */}

          <div id="content-wrapper" class="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              <br />
              <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div class="row">
                  <div class="col-md-2">Upload Images </div>
                  <div class="col-md-10">
                    <div class="input-group mb-3">
                      <div class="custom-file">
                        <input
                          accept="image/*"
                          // onChange={handlePicture}

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
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                    <br />
                    <button
                      type="button"
                      class="btn btn-success ab1"
                      style={{
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
                          <td data-label="firstName">
                           

                            {item &&
                              item.imgCollection.map((file, index) => (
                                // <tr key={file._id}>
                                //   <td>
                                    <img
                                      src={file}
                                      style={{
                                        height: "100px",
                                        width: "100px",
                                      }}
                                    ></img>
                                //   </td>
                                // </tr>
                              ))}
                          </td>

                          <td data-label="Action">&nbsp; &nbsp;</td>
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
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </body>
    </div>
  );
};

export default MultiImg;
