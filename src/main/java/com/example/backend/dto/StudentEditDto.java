package com.example.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentEditDto {
    @Column(name = "FullName", nullable = false)
    @JsonProperty("FullName")
    @NotBlank(message = "Full name is required")
    private String fullName;


    @JsonProperty("BirthDate")
    @NotNull(message = "Bith date is required")
    private Date birthDate;


    @JsonProperty("Gender")
    @NotNull(message = "Gender is required")
    @Pattern(regexp = "Male|Female", message = "Gender must be Male or Female")
    private String gender;


    @JsonProperty("ContactNumber")
    @NotNull(message = "Phone number is required")
    @Pattern(regexp = "^\\+?\\d{10,15}$", message = "Contact number must be a valid phone number")

    private String contactNumber;


    @JsonProperty("Address")
    @NotNull(message = "Address is required")
    private String address;


    @JsonProperty("ParentContact")
    @NotNull(message = "Parent contact is required")
    @Pattern(regexp = "^\\+?\\d{10,15}$", message = "Contact number must be a valid phone number")
    private String parentContact;
}
