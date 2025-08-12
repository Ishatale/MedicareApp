package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor, Integer>{
	Doctor findByEmail(String email);
}
