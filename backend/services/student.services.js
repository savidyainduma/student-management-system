const db = require("../db");

module.exports.getAllStudents = async () => {
  const [records] = await db.query("SELECT * FROM student");
  return records;
};

module.exports.deleteStudent = async (id) => {
  const [record] = await db.query("DELETE FROM student WHERE id = ?", [id]);
  return record.affectedRows;
};

module.exports.addStudent = async (studentData) => {
  const sql =
    "INSERT INTO student (FullName,BirthDate,Gender,ContactNumber,Address, ParentContact) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    studentData.FullName,
    studentData.BirthDate,
    studentData.Gender,
    studentData.ContactNumber,
    studentData.Address,
    studentData.ParentContact,
  ];

  const [record] = await db.query(sql, values);

  return record.affectedRows;
};

module.exports.editStudent = async (id, studentData) => {
  const sql =
    "UPDATE student set FullName =?, BirthDate =?, Gender =?,ContactNumber =?,Address =?, ParentContact =?  WHERE id = ?";
  const values = [
    studentData.FullName,
    studentData.BirthDate,
    studentData.Gender,
    studentData.ContactNumber,
    studentData.Address,
    studentData.ParentContact,
    id,
  ];

  const [record] = await db.query(sql, values);

  return record.affectedRows;
};
