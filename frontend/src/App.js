import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useState } from "react";
import AddStudent from "./pages/AddStudent/AddStudent";
import ViewStudents from "./pages/ViewStudents/ViewStudents";
import EditStudent from "./pages/EditStudent/EditStudent";
import axios from "axios";
import Swal from "sweetalert2";
axios.defaults.baseURL = 'http://localhost:3001/api/students'

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState();
  const [studentList, setStudentList] = useState([]);

  const getAllStudents = async () => {
    await axios
      .get("/")
      .then((res) => setStudentList(res.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    console.log(id);
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
      title: "Record updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleCloseAdd = () => {
    setShowAdd(false);
    getAllStudents();
    Swal.fire({
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
