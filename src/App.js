import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";

function App() {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "my first note",
    date: "9/12/2023"
  },
  {
    id: nanoid(),
    text: "my second note",
    date: "9/12/2023"
  },
  {
    id: nanoid(),
    text: "my third note",
    date: "9/12/2023"
  },
  {
    id: nanoid(),
    text: "my forth note",
    date: "9/12/2023"
  }
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    // const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    const savedNotes = localStorage.getItem('react-notes-app-data');
    
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
      
    }
  },[]);

  // useEffect(() => {
  //   console.log('notes before saving',notes)
  //   localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  // }, [notes])



  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
    localStorage.setItem('react-notes-app-data', JSON.stringify(newNotes))
  }


  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem('react-notes-app-data', JSON.stringify(newNotes))
  }

  return (

    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setdarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
