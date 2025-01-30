import React from 'react'
import "./Sidebar.css"

const Sidebar = ({ onAddNote, notes, onDeleteNote, activeNote, setActiveNote }) => {
  return (
    <div className='app-sidebar'>
        <div className='app-sidebar-header'>
            <h1>note</h1>
            <button onClick={onAddNote}>add</button>
        </div>
        <div className='app-sidebar-notes'>
            {notes.map((note) => (
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
                <div className='sidebar-note-title'>
                    <strong>{note.title}</strong>
                    <button onClick={() => onDeleteNote(note.id)}>delete</button>
                </div>
                <p>{note.content}</p>
                <small>{new Date(note.modDate).toLocaleDateString("ja-JP", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}</small>
                </div>
            ))}
        
        </div>
    </div>
  );
};

export default Sidebar;