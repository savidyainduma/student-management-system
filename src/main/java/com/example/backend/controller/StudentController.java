package com.example.backend.controller;


import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentRepository.save(student);
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
}
