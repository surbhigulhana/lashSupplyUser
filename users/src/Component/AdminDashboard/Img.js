// export default Webcam1
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/all.min.css";
import "../css/nunito.css";
import "../css/sb-admin-2.min.css";
import "../css/dataTables.bootstrap4.min.css";

import { Table } from "react-bootstrap";

const Img = () => {
  // all data show
  const [data, setData] = useState([]);
  const getUser = async () => {
    let result = await fetch("http://3.114.92.202:4003/productData");
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getUser();
  }, []);
  //  more data
  const [pictureList, setPictureList] = useState([]);
  const handleClick = async (item) => {
    const response = await fetch(
      "http://3.114.92.202:4003/MoreData/" + item.Name
    );
    const data1 = await response.json();
    setPictureList(data1);
  };
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const handleShowView = () => setEditShowView(true);
  const [editShowView, setEditShowView] = useState(false);
  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);
  const [editShow, setEditShow] = useState(false);
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  async function deleteData(imgCollection) {
    let result = await fetch(`http://3.114.92.202:4003/product/${imgCollection}`, {
      method: "delete",
    });
    let data = await result.json();

    fetch("http://3.114.92.202:4003/ProductData").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }

  return (
    <div>
      <body id="page-top">
        <Table id="example" striped bordered hover style={{ width: "100%" }}>
          <thead>
            <tr>
              <th class="bl5">#</th>
              <th class="bl5">SKU number</th>
              <th class="bl5">Product name</th>
              <th class="bl5">Category</th>
              <th class="bl5">View Details</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
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
                  </td>

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
                                        item.imgCollection.map(
                                          (file, index) => (
                                            <tr>
                                              <td>{index}</td>
                                              <img
                                                src={file}
                                                style={{
                                                  height: "94px",
                                                  width: "94px",
                                                  float: "left",
                                                  margin: "5px",
                                                }}
                                              ></img>
                                              <td>
                                                {" "}
                                                <button
                                                  type="button"
                                                  class="btn btn-primary ab1"
                                                  onClick={() =>
                                                    deleteData(item._id)
                                                  }
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
                                          )
                                        )}
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
                </tr>
              ))}
          </tbody>
        </Table>
      </body>
    </div>
  );
};

export default Img;
