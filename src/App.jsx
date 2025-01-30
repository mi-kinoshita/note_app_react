import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] =useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    console.log("Add a new note");
    const newNote = {
      id: uuid(),
      title: "new note",
      content: "its a new note content",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  return (
    <>
    <div style={{ display: 'flex' }}>
    <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} setActiveNote={setActiveNote} />
    <Main />
    </div>
    </>
  )
}

export default App
