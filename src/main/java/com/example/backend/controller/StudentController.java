package com.example.backend.controller;


import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final Logger log = LoggerFactory.getLogger(StudentController.class);
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        log.info("{},{}",student.getBirthDate(),student.getFullName());
        Student newStudent = new Student();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        newStudent.setFullName(student.getFullName());
        newStudent.setBirthDate(student.getBirthDate());
        newStudent.setGender(student.getGender());
        newStudent.setContactNumber(student.getContactNumber());
        newStudent.setAddress(student.getAddress());
        newStudent.setParentContact(student.getParentContact());


        return studentRepository.save(newStudent);
    }

    @PutMapping("{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id, @RequestBody Student studentDetails) {
        Student updatedStudent = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found for this id :: " + id));


        updatedStudent.setFullName(studentDetails.getFullName());
        updatedStudent.setBirthDate(studentDetails.getBirthDate());
        updatedStudent.setGender(studentDetails.getGender());
        updatedStudent.setContactNumber(studentDetails.getContactNumber());
        updatedStudent.setAddress(studentDetails.getAddress());
        updatedStudent.setParentContact(studentDetails.getParentContact());

        studentRepository.save(updatedStudent);
        return ResponseEntity.ok(updatedStudent);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable int id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found for this id :: " + id));
        studentRepository.delete(student);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
