import React, { useState } from 'react';
import { firestore } from './firebaseConfig';  // Import Firestore from Firebase

const App = () => {
  const [noteContent, setNoteContent] = useState('');  // Store the note input from the user

  // Firestore function to create a note
  const createNote = (content) => {
    firestore.collection("notes").add({
      content: content,
      timestamp: new Date(),
    })
    .then(() => {
      console.log("Note successfully created!");
    })
    .catch((error) => {
      console.error("Error creating note:", error);
    });
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form behavior (refreshing page)
    createNote(noteContent);  // Call the createNote function
  };

  return (
    <div>
      <h2>Create a Note</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={noteContent} 
          onChange={(e) => setNoteContent(e.target.value)} 
          placeholder="Write your note" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
