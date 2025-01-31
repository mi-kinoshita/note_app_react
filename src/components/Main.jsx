import React from 'react'
import "./Main.css"
import Markdown from 'react-markdown'

const Main = ({ activeNote, onUpdateNote }) => {
console.log(onUpdateNote);
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now()
    })

  }

  if (!activeNote) {
    return <div className='no-active-note'>note is none</div>
  }
  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input id='title' type='text' value={activeNote.title} onChange={(e) => onEditNote("title", e.target.value)} />
        <textarea id="content" placeholder='add a content' value={activeNote.content} onChange={(e) => onEditNote("content", e.target.value)}></textarea>
      </div>
      <div className='app-main-note-preview'>
        <h1 className='preview-title'>{activeNote.title}</h1>
        <Markdown className='markdown-preview'>{activeNote.content}</Markdown>
      </div>
    </div>
  );
};

export default Main