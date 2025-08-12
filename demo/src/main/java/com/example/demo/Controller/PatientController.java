package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Doctor;
import com.example.demo.Patient;
import com.example.demo.Repo.DoctorRepo;
import com.example.demo.Repo.PatientRepo;
import com.example.demo.Services.DoctorService;
import com.example.demo.Services.PatientService;
import com.example.demo.dto.LoginRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")

public class PatientController {

	@Autowired
	private  PatientService patientService;
	
	@Autowired
    private PatientRepo patientRepository;
	
	 @PostMapping("/register/patient")
	    public Patient postDoctor(@RequestBody Patient patient) {
	        return patientService.postPatient(patient);
	    }
	 @GetMapping("/getpatient")
	 // /auth/getpatient
	 public List<Patient> getAllPatients(){
		 return patientService.getAllPatients();
	 }

	 @PostMapping("/login/patient")
	    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
	        Patient patient = patientRepository.findByEmail(loginRequest.getEmail());

	        if (patient == null || !patient.getPassword().equals(loginRequest.getPassword())) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	        }
	        if (!patient.getPassword().equals(loginRequest.getPassword())) {
//	            System.out.println("Passwords do not match");
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	        }

	        return ResponseEntity.ok(patient); 
	    }

}

