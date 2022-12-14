package com.thinklogic.thinklogic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thinklogic.thinklogic.model.Candidate;

@Repository
public interface ICandidateRepository extends JpaRepository<Candidate, Integer> {

}
