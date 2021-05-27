import React from "react";
import { Route, Link } from "react-router-dom";

const Folders = ({ folderList }) => {
  return (
    <ul style={sidebar}>
      {folderList &&
        folderList.length > 0 &&
        folderList.map((folder) => (
          <li style={sidebarLink} key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Folders;

const sidebarLink = {
  padding: "10px 0px 10px 10px",
  display: "block",
};

const sidebar = {
  height: "100%",
  margin: "50px 0px 500px 0px",
  padding: "5%",
  display: "in-block",
  // display: "block",
  float: "left",
  // maxwidth: "25%",
  width: "25%",
};
