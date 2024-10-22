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



    }
}
