import { firestore } from './firebaseConfig';

// Firestore function to create a note
export const createNote = (content) => {
  return firestore.collection("notes").add({
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
