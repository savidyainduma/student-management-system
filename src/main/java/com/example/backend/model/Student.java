package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "students")

public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "FullName", nullable = false)
    private String fullName;

    @Column(name = "BirthDate", nullable = false)
    private Date birthDate;

    @Column(name = "Gender", nullable = false)
    private String gender;

    @Column(name = "ContactNumber", nullable = false)
    private int contactNumber;

    @Column(name = "Address", nullable = false)
    private String address;

    @Column(name = "ParentContact", nullable = false)
    private int parentContact;

    public Student(String fullName, Date birthDate, String gender, int contactNumber, String address, int parentContact) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.contactNumber = contactNumber;
        this.address = address;
        this.parentContact = parentContact;
    }
}
