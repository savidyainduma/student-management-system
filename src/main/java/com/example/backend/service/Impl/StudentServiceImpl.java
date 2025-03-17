package com.example.backend.service.Impl;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import com.example.backend.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    private final StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public void addStudent(Student student) {
        studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        List<Student> all = studentRepository.findAll();

        if(!all.isEmpty()){
            return all;

        }
        else {
            throw new ResourceNotFoundException("Database is Empty");
        }

    }

    @Override
    public void updateStudent(int id, Student student){
        studentRepository
                .findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));

        student.setId(id);
        studentRepository.save(student);
    }

    @Override
    public void deleteStudent(int id) {
        studentRepository
                .findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));

        studentRepository.deleteById(id);


    }


}
