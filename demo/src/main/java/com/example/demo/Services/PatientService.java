package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Patient;
import com.example.demo.Repo.PatientRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PatientService {
	@Autowired
	private  PatientRepo patientRepository;
	
	public Patient postPatient(Patient patient) {
		return patientRepository.save(patient);
	}
	
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}
	

	public Patient getPatientByEmail(String email) {
		return patientRepository.findByEmail(email);
	}
}
