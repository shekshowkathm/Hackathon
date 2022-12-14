package com.thinklogic.thinklogic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thinklogic.thinklogic.model.Candidate;
import com.thinklogic.thinklogic.service.ICandidateService;

@RestController
@CrossOrigin
@RequestMapping("/Candidate")
public class CandidateController {
	@Autowired
	ICandidateService candidateService;
	@PostMapping("/addCandidate")
	public String addCandidate(@RequestBody Candidate candidate) {
		candidateService.saveCandidate(candidate);
		return "NEW CANDIDATE ADDED";
		
	}
	@GetMapping("/getAllCandidate")
	public List<Candidate> getCandidate(){
		List<Candidate> list=candidateService.getAllCandidate();
		return list;
	}
}
