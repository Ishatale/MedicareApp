package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Doctor;
import com.example.demo.Repo.DoctorRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DoctorService {
	@Autowired
	private  DoctorRepo doctorRepository;
	
	public Doctor postDoctor(Doctor doctor) {
		return doctorRepository.save(doctor);
	}
	
	public List<Doctor> getAllDoctors(){
		return doctorRepository.findAll();
	}
	
	public Doctor getDoctorByEmail(String email) {
		return doctorRepository.findByEmail(email);
	}
}
