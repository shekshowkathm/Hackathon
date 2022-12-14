package com.thinklogic.thinklogic.service;

import java.util.List;

import com.thinklogic.thinklogic.model.Candidate;

public interface ICandidateService {
	public void saveCandidate(Candidate candidate);
	public List<Candidate> getAllCandidate();
}
