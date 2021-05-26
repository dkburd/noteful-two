import React from "react";

const Notes = ({ notesList }) => {
  return (
    <div>
      {notesList &&
        notesList.length > 0 &&
        notesList.map((note) => (
          <p key={note.id}>
            {note.name} ({note.modified})
          </p>
        ))}
    </div>
  );
};

export default Notes;
