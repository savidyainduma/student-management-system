const Student = require('../Student');

module.exports.getAllStudents = async () => {
  return await Student.findAll();
};

module.exports.addStudent = async (studentData) => {
  return await Student.create(studentData);
};

module.exports.deleteStudent = async (id) => {
  return await Student.destroy({ where: { id } });
};

module.exports.editStudent = async (id, studentData) => {
  return await Student.update(studentData, { where: { id } });
};
