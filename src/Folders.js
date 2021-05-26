import React from "react";
import { Route, Link } from "react-router-dom";

const Folders = ({ folderList }) => {
  return (
    <ul>
      {folderList &&
        folderList.length > 0 &&
        folderList.map((folder) => (
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Folders;
