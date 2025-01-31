import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] =useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    setActiveNote(notes[0].id);
  }, []);

  const onAddNote = () => {
    console.log("Add a new note");
    const newNote = {
      id: uuid(),
      title: "new note",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === updateNote.id) {
        return updateNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  };

  return (
    <>
    <div style={{ display: 'flex' }}>
    <Sidebar 
    onAddNote={onAddNote} 
    notes={notes} 
    onDeleteNote={onDeleteNote}
    setActiveNote={setActiveNote} 
    />
    <Main activeNote = {getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
    </>
  )
}

export default App
