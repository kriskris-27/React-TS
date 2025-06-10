import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {Note} from "../types/note"
import NotesTabs from '../components/NotesTabs';
import NotesEditor from '../components/NotesEditor';

const Notesmain = () => {
    const [notes,setNotes] = useLocalStorage<Note[]>("notes",[])

    const [activenoteId,setActivenoteId]=useState<string | null>(notes.length > 0? notes[0].id :null

    )

    const addNote = () =>{
        const newNote:Note={
            id:crypto.randomUUID(),
            title: "Untitled",
            content:"",
        };
        const updated = [...notes,newNote];
        setNotes(updated);
        setActivenoteId(newNote.id)
    }

    const deleteNote = (id:string)=>{
        const filtered = notes.filter((note)=> note.id!==id);
        setNotes(filtered);

        if(id === activenoteId){
            setActivenoteId(filtered.length >0 ? filtered[0].id : null);
        }
    }

    const updateNote = (updatedNote:Note) =>{
        const updated = notes.map((note)=>note.id === updatedNote.id ? updatedNote : note)
        setNotes(updated)
    } 

    const activeNote = notes.find((note)=> note.id === activenoteId) || null;
    
    return (
        <main className="max-w-2xl mx-auto p-4 min-h-screen bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">🗒️ Notes App</h1>
      
        <NotesTabs
          notes={notes}
          activeNoteId={activenoteId}
          onSwitch={setActivenoteId}
          onAdd={addNote}
          onDelete={deleteNote}
        />
      
        {activeNote && (
          <NotesEditor note={activeNote} onUpdate={updateNote} />
        )}
      </main>
      
    );
};

export default Notesmain;