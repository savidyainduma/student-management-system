package com.example.backend.service;

import com.example.backend.model.Student;

import java.util.List;

public interface StudentService {
    void addStudent(Student student);

    List<Student> getAllStudents();

    void updateStudent(int id, Student student);

    void deleteStudent(int id);
}
