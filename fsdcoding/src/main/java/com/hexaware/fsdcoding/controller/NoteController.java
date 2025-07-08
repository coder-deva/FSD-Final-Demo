package com.hexaware.fsdcoding.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.fsdcoding.model.Note;
import com.hexaware.fsdcoding.service.NoteService;



@RestController
public class NoteController {
    
    @Autowired
    private NoteService noteService;

    @PostMapping("/addPost")
    public ResponseEntity<?> addNote(@RequestBody Note note){
        return ResponseEntity.status(HttpStatus.CREATED).body(noteService.addNote(note));
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllNotes(){
        List<Note> notes=noteService.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(notes);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editNote(@PathVariable int id,@RequestBody Note note){
        return ResponseEntity.status(HttpStatus.OK).body(noteService.edit(id,note));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteNote(@PathVariable int id){
        noteService.delete(id);
    }
}