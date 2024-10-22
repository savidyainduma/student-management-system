package com.example.backend;

import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@SpringBootApplication
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BackendApplication implements CommandLineRunner {

    private final  StudentRepository studentRepository;



    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }





    @Override
    public void run(String... args) throws Exception {

        Student student = new Student();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date BirthDate = sdf.parse("2024/02/23");

        
//        Student student1 = new Student();
//        student.setFullName("Savidya Induma");
//        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy/MM/dd");
//        Date BirthDate1 = sdf.parse("2024/02/23");
//
//        student.setGender("Male");
//        student.setContactNumber(1234567890);
//        student.setAddress("adwda awdawdw");
//        student.setParentContact(654686813);

    }
}
