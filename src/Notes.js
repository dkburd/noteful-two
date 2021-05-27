import React from "react";
import { Route, Link } from "react-router-dom";

const Notes = ({ notesList }) => {
  return (
    <div style={notescontainer}>
      <ul>
        {notesList &&
          notesList.length > 0 &&
          notesList.map((note) => (
            <li style={noteStyle} key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name} ({note.modified})
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Notes;

const notescontainer = {
  marginLeft: "25%",
};

const noteStyle = {
  padding: "6px",
  // textDecoration: "none",
  listStyleType: "none",
};
