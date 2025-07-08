package com.hexaware.fsdcoding.service;



import java.util.List;

import org.springframework.stereotype.Service;

import com.hexaware.fsdcoding.model.Note;
import com.hexaware.fsdcoding.repository.NoteRepository;



@Service
public class NoteService {
    
    private NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> getAll() {
        return noteRepository.findAll();
    }

    public Object addNote(Note note) {
        return noteRepository.save(note);
    }

    public Note edit(int id, Note note) {
        Note notes=noteRepository.findById(id).orElseThrow(()->new RuntimeException());
        notes.setDescription(note.getDescription());
        notes.setTitle(note.getTitle());
        return noteRepository.save(notes);
    }

    public void delete(int id) {
        noteRepository.deleteById(id);
    }

    
}
