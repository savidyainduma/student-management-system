package com.example.backend.controller;


import com.example.backend.model.Student;
import com.example.backend.service.StudentService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController

@RequestMapping("/api/students")

public class StudentController {
    @Autowired
    StudentService studentService;
    private final Logger log = LoggerFactory.getLogger(StudentController.class);


    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        log.info("{},{}", student.getBirthDate(), student.getFullName());
        studentService.addStudent(student);
        return student;
    }

    @PutMapping("{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable("id") int id, @RequestBody Student studentDetails) {
        studentService.updateStudent(id, studentDetails);
        return new ResponseEntity<Student>(studentDetails, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.OK);
    }


}

