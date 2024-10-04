const express = require("express");
router = express.Router();

const service = require("../services/student.services");

router.get("/", async (req, res) => {
  const students = await service.getAllStudents();
  res.send(students);
});

router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteStudent(req.params.id);
  console.log(affectedRows);
  if (affectedRows === 0)
    res.status(404).json("no record with given id:" + req.params.id);
  else res.send("deleted successfully");
});

router.post("/addstudent", async (req, res) => {
  try {
    const requestBody = req.body;
    const result = await service.addStudent(requestBody);

    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "An Error occured", error: error.message });
  }
});

router.put("/editStudent/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const studentData = req.body;
    const result = await service.editStudent(id, studentData);
    if (result > 0) {
      res.status(200).json({ message: "Student updated." });
    } else {
      res.status(404).json({ message: "Student not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "An Error occured", error: error.message });
  }
});

module.exports = router;
