import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header className="App__header">
        <h1>
          <Link to="/">Noteful</Link>
        </h1>
        <ul>
          {/* <li>
            <Link to="/">Noteful</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
