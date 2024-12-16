import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import AddStudent from "./pages/AddStudent/AddStudent";
import ViewStudents from "./pages/ViewStudents/ViewStudents";
import EditStudent from "./pages/EditStudent/EditStudent";
import axios, { Axios } from "axios";
import Swal from "sweetalert2";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
axios.defaults.baseURL = 'http://localhost:3001/api/students';
//axios.defaults.withCredentials = true;

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState();
  const [studentList, setStudentList] = useState([]);

  const getAllStudents = async () => {
    await axios
      .get("")
      .then((res) => setStudentList(res.data))
      .catch((err) => {
        alert(err.data.message);
        console.error(err)
      });
  };

  const handleDelete = async (id) => {
    console.log("Deleted record with id: "+id);
    await axios
      .delete("/" + id)
      .then((res) => getAllStudents())
      .catch((err) => console.log(err));
  };

  const handleEdit = (data) => {
    setStudentToEdit(data);
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setStudentToEdit();
    setShowEdit(false);
    getAllStudents();

    Swal.fire({
      icon: "success",
      width: '90%',
      title: "Record updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleCloseAdd = () => {
    setShowAdd(false);
    getAllStudents();
    Swal.fire({
      width: '90%',
      icon: "success",
      title: "Your record has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };


  return (
    <>
      {showAdd ? (
        <AddStudent setShowAdd={setShowAdd} handleCloseAdd={handleCloseAdd} />
      ) : (
        <></>
      )}
      {showEdit ? (
        <EditStudent
          selectedStudent={studentToEdit}
          handleCloseEdit={handleCloseEdit}
          setShowEdit={setShowEdit}
        />
      ) : (
        <></>
      )}
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home setShowAdd={setShowAdd} />}></Route>
            <Route
              path="/allstudents"
              element={
                <ViewStudents
                  handleEdit={handleEdit}
                  students={studentList}
                  getAllStudents={getAllStudents}
                  handleDelete={handleDelete}
                  setShowAdd={setShowAdd}
                />
                
              }
            ></Route>
           <Route path="/login" element= {<Login/>}></Route>
            <Route path="/signup" element= {<Signup/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
