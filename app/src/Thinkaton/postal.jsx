import React from "react";
import { useState } from "react";
import "./postal.css";
import Data from "./db.json";
import { useEffect } from "react";
function Postal() {
  const [postal, setPostal] = useState({
    name: "",
    pincode: "",
  });

  const [pincode, setPincode] = useState({});

  const handleChange = (e) => {
    const name1 = e.target.name;
    const value1 = e.target.value;
    setPostal((prevalue) => ({ ...prevalue, [name1]: value1 }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("qwe");
    fetch(`http://api.postalpincode.in/pincode/${postal.pincode}`)
      .then((Data) => Data.json())

      .then((result) => {
        // alert(result);
        setPincode(result);
      });
  };
  console.log(pincode);
  return (
    <>
      <div className="postalform">
        <h1>POSTAL API</h1>
      </div>
      <center>
        <div className="form1">
          <table>
            <tbody>
              <tr>
                <td>ENTER THE NAME</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={postal.name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>ENTER THE PINCODE</td>
                <td>
                  <input
                    type="text"
                    name="pincode"
                    value={postal.pincode}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onSubmit={handleSubmit}>SUBMIT</button>
        </div>
      </center>
      {/* {Data.map((Data) => {
        return (
          <div className="record" key={Data.id}>
            <div>{Data.id}</div>
            <div>{Data.town}</div>
            <div>{Data.taluk}</div>
            <div>{Data.district}</div>
            <div>{Data.state}</div>
          </div>
        );
      })} */}
      {}
    </>
  );
}
export default Postal;
