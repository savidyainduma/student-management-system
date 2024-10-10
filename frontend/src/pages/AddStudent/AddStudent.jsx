import React, { useRef, useState } from "react";
import "./AddStudent.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import Validation from "../../Validation";

const AddStudent = ({ setShowAdd, handleCloseAdd }) => {
  const [name, setName] = useState("");
  const [bdate, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [parent, setParent] = useState("");
  const [errors, setErrors] = useState({});

  const birthDateRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const values = {
      FullName: name,
      BirthDate: bdate,
      Gender: gender,
      ContactNumber: number,
      Address: address,
      ParentContact: parent,
    };

    const validateErrors = Validation(values);

    if (Object.keys(validateErrors).length === 0) {
      await axios
        .post("http://localhost:3001/api/students/addStudent", values)
        .then((res) => {
          console.log(res);
          handleCloseAdd();
        })
        .catch((err) => console.log(err));
    } else {
      setErrors(validateErrors);
    }
  }

  return (
    <div className="add-student">
      <form onSubmit={handleSubmit} className="add-student-container">
        <div className="form-title">
          <h2>Add a new student</h2>
          <img
            src={assets.cross_icon}
            onClick={() => {
              setShowAdd(false);
            }}
          />
        </div>
        <div className="add-student-input">
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            ref={birthDateRef}
            type="text"
            placeholder="Birth Date"
            onFocus={() => {
              birthDateRef.current.type = "date";
            }}
            onBlur={(e) => {
              birthDateRef.current.type = "text";
            }}
            onChange={(e) => setBdate(e.target.value)}
          />
          <div className="gender-buttons">
            <input
              type="radio"
              name="gender"
              value="Male"
              required
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              required
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Female
          </div>
          <div className="number" >
          <input
            type="text"
            placeholder='Phone number' 
            style={errors.number ? { borderColor: "red", color:"red" } : null}
            required
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && <p style={errors.number ? {color:"red", marginBottom: "1px"} : null}>{errors.number}</p>}
          </div>
          
          <input
            type="text"
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="parent">
          <input
            type="text"
            placeholder="Parent`s Phone"
            style={errors.parent ? { borderColor: "red", color:"red"} : null}
            required
            onChange={(e) => setParent(e.target.value)}
          />
          {errors.parent && <p style={errors.parent ? {color:"red", marginBottom: "1px" } : null}>{errors.parent}</p>}
          </div>
         
        </div>
        <button>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
