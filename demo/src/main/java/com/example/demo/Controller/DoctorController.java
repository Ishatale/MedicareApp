package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Doctor;
import com.example.demo.Repo.DoctorRepo;
import com.example.demo.Services.DoctorService;
import com.example.demo.dto.LoginRequest;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class DoctorController {
	
	@Autowired
	private  DoctorService docservice;
	
	@Autowired
    private DoctorRepo doctorRepository;
	
	 @PostMapping("/register/doctor")
	    public Doctor postDoctor(@RequestBody Doctor doctor) {
	        return docservice.postDoctor(doctor);
	    }
	 @GetMapping("/getdoctor")
	 // /auth/getdoctor
	 public List<Doctor> getAllDoctors(){
		 return docservice.getAllDoctors();
		 
	 }
	 @PostMapping("/login/doctor")
	    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
	        Doctor doctor = doctorRepository.findByEmail(loginRequest.getEmail());

	        if (doctor == null || !doctor.getPassword().equals(loginRequest.getPassword())) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	        }
//	        System.out.println("Password from DB: " + doctor.getPassword());
//	        System.out.println("Password from user: " + loginRequest.getPassword());

	        if (!doctor.getPassword().equals(loginRequest.getPassword())) {
//	            System.out.println("Passwords do not match");
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	        }
	        return ResponseEntity.ok(doctor); 
	    }
	 

	    

}
