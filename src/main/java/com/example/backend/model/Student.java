package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty("FullName")
    private String fullName;

    @Column(name = "BirthDate", nullable = false)
    @JsonProperty("BirthDate")
    private Date birthDate;

    @Column(name = "Gender", nullable = false)
    @JsonProperty("Gender")
    private String gender;

    @Column(name = "ContactNumber", nullable = false)
    @JsonProperty("ContactNumber")
    private int contactNumber;

    @Column(name = "Address", nullable = false)
    @JsonProperty("Address")
    private String address;

    @Column(name = "ParentContact", nullable = false)
    @JsonProperty("ParentContact")
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
