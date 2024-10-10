import React, { useEffect, useState } from "react";
import "./EditStudent.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import Validation from "../../Validation";

const EditStudent = ({ selectedStudent, handleCloseEdit, setShowEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [bdate, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [parent, setParent] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.FullName);
      const date = selectedStudent.BirthDate.substring(0, 10);
      setBdate(date);
      setGender(selectedStudent.Gender);
      setNumber(selectedStudent.ContactNumber);
      setAddress(selectedStudent.Address);
      setParent(selectedStudent.ParentContact);
      setId(selectedStudent.id);
    }
  }, []);

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
        .put("http://localhost:3001/api/students/editStudent/" + id, values)
        .then((res) => {
          console.log(res);
          handleCloseEdit();
        })
        .catch((err) => console.log(err));
    } else {
      setErrors(validateErrors);
    }
  }

  return (
    <div className="edit-student">
      <form onSubmit={handleSubmit} className="edit-student-container">
        <div className="form-title">
          <h2>Edit student details</h2>
          <img
            src={assets.cross_icon}
            onClick={() => {
              setShowEdit(false);
            }}
          />
        </div>
        <div className="edit-student-input">
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="date"
            value={bdate}
            placeholder="Date of Birth"
            onChange={(e) => setBdate(e.target.value)}
          />
          <div className="gender-buttons">
            <input
              type="radio"
              name="gender"
              value="Male"
              required
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "Male"}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              required
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "Female"}
            />{" "}
            Female
          </div>
          <div className="number" >
          <input
            type="text"
            value={number}
            placeholder='Phone number' 
            style={errors.number ? { borderColor: "red", color:"red" } : null}
            required
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && <p style={errors.number ? {color:"red", marginBottom: "1px"} : null}>{errors.number}</p>}
          </div>
          
          <input
            type="text"
            value={address}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="parent">
          <input
            type="text"
            value={parent}
            placeholder="Parent`s Phone"
            style={errors.parent ? { borderColor: "red", color:"red"} : null}
            required
            onChange={(e) => setParent(e.target.value)}
          />
          {errors.parent && <p style={errors.parent ? {color:"red", marginBottom: "1px" } : null}>{errors.parent}</p>}
          </div>

        </div>
        <button>Save Details</button>
      </form>
    </div>
  );
};

export default EditStudent;
