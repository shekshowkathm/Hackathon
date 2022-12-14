import "./Register.css";
import React, { useState, useEffect } from "react";

function Register() {
  const [reg, setReg] = useState({
    name: "",
    sex: "",
    location: "",
    education: "",
    resume: "",
    marksheet: "",
    city: "",
    number: "",
    email: "",
  });
  const [students, setStudent] = useState([]);
  const [error, setError] = useState("");

  const [sexError, setSexError] = useState("");

  const [locationError, setLocationError] = useState("");

  const [educationError, setEducationError] = useState("");

  const [resumeError, setResumeError] = useState("");

  const [marksheetError, setMarksheetError] = useState("");

  const [cityError, setCityError] = useState("");

  const [numError, setNumError] = useState("");

  const [mailError, setMailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReg((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const clear = () => {
    setError("");
    setCityError("");
    setEducationError("");
    setLocationError("");
    setMailError("");
    setMarksheetError("");
    setNumError("");
    setResumeError("");
    setSexError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (reg.name == "" && "^[A-Za-zs]{1,}[.]{0,1}[A-Za-zs]{0,}$") {
      setError("Invalid Username");
    } else {
      setError("");
    }

    if (
      reg.number == " " &&
      /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
    ) {
      setNumError("Invalid Password");
    } else {
      setNumError("");
    }

    if (reg.email == "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) {
      setMailError("Invalid Email");
    } else {
      setMailError("");
    }

    if (reg.sex == " ") {
      setSexError("Field is empty");
    } else {
      setSexError("");
    }

    if (reg.location == " ") {
      setLocationError("Location field is empty");
    } else {
      setLocationError("");
    }

    if (reg.education == " ") {
      setEducationError("Education field is empty");
    } else {
      setEducationError("");
    }

    if (reg.resume == " ") {
      setResumeError("Resume field is empty");
    } else {
      setResumeError("");
    }

    if (reg.marksheet == " ") {
      setMarksheetError("Marksheet field is empty");
    } else {
      setMarksheetError("");
    }

    if (reg.city == " ") {
      setCityError("City field is empty");
    } else {
      setCityError("");
    }

    // if (
    //   password == " " &&
    //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
    // ) {
    //   setPasswordError("Password is empty");
    // } else {
    //   setPasswordError("");
    // }
    if (reg.length >= 1) {
      clear();
      fetch("http://localhost:8080/Candidate/addCandidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reg),
      }).then(() => {
        console.log("new candidate added");
      });
    }
  };
  useEffect(() => {
    fetch("http://localhost:8080/Candidate/getAllCandidate")
      .then((res) => res.json())
      .then((result) => {
        setStudent(result);
      });
  }, []);

  return (
    <>
      <center>
        <div className="formReg">
          <div className="reg">
            <h1>THINK LOGICS FORM</h1>
            <table>
              <tbody>
                <tr>
                  <td>
                    NAME
                    <span>*</span>
                  </td>

                  <td>
                    <input
                      type="text"
                      name="name"
                      value={reg.name}
                      onChange={handleChange}
                    />
                    <small>{error}</small>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    NUMBER
                    <span>*</span>
                  </td>

                  <td>
                    <input
                      type="number"
                      name="number"
                      value={reg.value}
                      onChange={handleChange}
                    />
                    <small>{numError}</small>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    E-MAIL
                    <span>*</span>
                  </td>

                  <td>
                    <input
                      type="email"
                      name="email"
                      value={reg.email}
                      onChange={handleChange}
                    />
                    <small>{mailError}</small>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>SEX</td>
                  <td>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                    onChange={handleChange}
                  </td>
                  <small>{sexError}</small>
                </tr>
                <br />
                <tr>
                  <td>
                    PREFERED LOCATION<span>*</span>
                  </td>
                  <td>
                    <select name="preferedLocation" onChange={handleChange}>
                      <option>Select</option>
                      <option>Chennai</option>
                      <option>Coimbatore</option>
                    </select>
                  </td>
                  <small>{locationError}</small>
                </tr>
                <br />
                <tr>
                  <td>
                    EDUCATION<span>*</span>
                  </td>
                  <td>
                    <select name="education" onChange={handleChange}>
                      <option>Select</option>
                      <option>MASTER OF COMPUTER APPLICATION (M.C.A)</option>
                      <option>BACHELOR OF COMPUTER APPILCATION (B.C.A)</option>
                      <option>BACHELOR OF ENGINEERING (B.E)</option>
                      <option>MASTER OF ENGINEERING (M.E)</option>
                      <option>
                        BACHELOR OF SCIENCE IN COMPUTER SCIENCE (B.Sc CS)
                      </option>
                      <option>
                        MASTER OF SCIENCE IN COMPUTER SCIENCE (M.Sc CS)
                      </option>
                    </select>
                  </td>
                  <small>{educationError}</small>
                </tr>
                <br />
                <tr>
                  <td>RESUME PDF</td>
                  <td>
                    <input type="file" name="resume" onChange={handleChange} />
                    <small>{resumeError}</small>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>10th MARKSHEET </td>
                  <td>
                    <input type="file" name="resume" onChange={handleChange} />
                    <small>{marksheetError}</small>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    CITY<span>*</span>
                  </td>
                  <br />
                  <td>
                    <select
                      id="location"
                      name="location"
                      onChange={handleChange}
                    >
                      <option>Select</option>
                      <option>Ariyalur</option>
                      <option>Chengalpattu</option>
                      <option>Chennai</option>
                      <option>Coimbatore</option>
                      <option>Cuddalore</option>
                      <option>Dharmapuri</option>
                      <option>Dindigul</option>
                      <option>Erode</option>
                      <option>Kallakurichi</option>
                      <option>Kancheepuram</option>
                      <option>Karur</option>
                      <option>Krishnagiri</option>
                      <option>Madurai</option>
                      <option>Mayiladuthurai</option>
                      <option>Nagapattinam</option>
                      <option>Kanyakumari</option>
                      <option>Nagercoil</option>

                      <option>Namakkal</option>
                      <option>Perambalur</option>
                      <option>Pudukkottai</option>

                      <option>Ramanathapuram</option>
                      <option>Ranipet</option>

                      <option>Sivagangai</option>
                      <option>Tenkasi</option>
                      <option>Thanjavur</option>
                      <option>Theni</option>
                      <option>Thiruvallur</option>
                      <option>Thiruvarur</option>
                      <option>Tuticorin</option>

                      <option>Tiruchirappalli</option>
                      <option>Thirunelveli</option>
                      <option>Tirupathur</option>
                      <option>Tiruppur</option>
                      <option>Tiruvannamalai</option>
                      <option>Nilgiris</option>
                      <option>Vellore</option>
                      <option>Viluppuram</option>
                      <option>Virudhunagar</option>
                    </select>
                    <small>{cityError}</small>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <button onSubmit={handleSubmit}>SUBMIT</button>
          </div>
        </div>
      </center>
      <div className="displayarea">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>

              <th>MOBILE</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stud) => (
              <tr>
                <td>{stud.id}</td>
                <td>{stud.names}</td>
                <td>{stud.email}</td>
                <td>{stud.password}</td>

                <td>{stud.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* ID:{stud.id}
          <br></br>
          Name:{stud.names}
          <br></br>
          Email:{stud.email}
          <br></br>
          PASSWORD:{stud.password}
          <br></br>
          conformpassword:{stud.conformpassword}
          <br></br>
          MOBILE:{stud.mobile}
          <br></br> */}
      </div>
    </>
  );
}
export default Register;
