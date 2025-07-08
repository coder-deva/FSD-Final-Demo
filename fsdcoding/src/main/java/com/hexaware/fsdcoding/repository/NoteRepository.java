package com.hexaware.fsdcoding.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.fsdcoding.model.Note;


public interface NoteRepository extends JpaRepository<Note, Integer>{
    
}