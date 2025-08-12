package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Doctor;
import com.example.demo.Patient;

public interface PatientRepo extends JpaRepository<Patient	, Integer> {
	Patient findByEmail(String email);

}
