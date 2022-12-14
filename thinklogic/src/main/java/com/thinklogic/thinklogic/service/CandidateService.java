package com.thinklogic.thinklogic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thinklogic.thinklogic.model.Candidate;
import com.thinklogic.thinklogic.repository.ICandidateRepository;

@Service
public class CandidateService implements ICandidateService {
	@Autowired
	ICandidateRepository candidateRepository;
	@Override
	public void saveCandidate(Candidate candidate) {
		// TODO Auto-generated method stub
		candidateRepository.save(candidate); 
	}

	@Override
	public List<Candidate> getAllCandidate() {
		// TODO Auto-generated method stub
		List<Candidate> list=candidateRepository.findAll();
		return list;
	}

}
