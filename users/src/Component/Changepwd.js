// -------------------------------------forget pwd before login-----------------------

import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import './css/chngpwd.css'

export default function ChangePassword() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useNavigate();
  const location = useLocation();

  useEffect(
    function () {
      const userEmail = location.pathname.split("/")[2];
      setEmail(userEmail);
    },
    [location.pathname]
  );

  const handleChangePassword = async () => {
    const body = {
      email,
      Password,
    };

    if (Password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        // title: 'Password Changed',
        text: "Password and Confirm Password are not matching",
      });
    } else {
      try {
        const response = await fetch(
          "http://localhost:4003/api/changePassword",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(body),
          }
        );
        const result = await response.json();
        if (result.success) {
          Swal.fire({
            icon: "success",
            // title: 'Password Changed',
            text: "Password successfully updated",
          }).then(function () {
            // history("/");
          });
        } else {
          Swal.fire({
            icon: "error",
            // title: 'Password Changed',
            text: result.err,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Recover Password </h2>

          <div className="fadeIn first">
            <img
              src="/loginIcon.png"
              style={{ width: 90 }}
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="Password"
              id="Password"
              className="fadeIn second"
              name="Password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
            />
            <input
              type="Password"
              id="confirm Password"
              className="fadeIn third"
              name="confirm Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm Password"
              required
            />
            <input
              type="button"
              onClick={handleChangePassword}
              className="fadeIn fourth"
              value="Change"
              style={{ height: "40px" }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
