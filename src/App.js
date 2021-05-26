import "./App.css";
import Header from "./Header";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import sampleData from "./sampleData";
import Notes from "./Notes";
import Folders from "./Folders";
import Folder from "./Folder";

// function App() {
//   return (
//     <div className="App">
// <Header/>
//     </div>
//   );
// }

class App extends Component {
  // set empty arrarys for notes and folders
  state = {
    notes: sampleData.notes,
    folders: sampleData.folders,
  };
  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <div>
        <p>render nav routes</p>
      </div>
    );
  }

  notesInFolder() {}

  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <Header />
        <Folders folderList={this.state.folders} />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path="/folder/:id"
            // this render is needed to pass the props.match.params from the url
            render={(props) => (
              <Folder {...props} notesList={this.state.notes} />
            )}
          />
          {/* <Route
            path="/folder/:id"
            render={(props) => (
              <Notes {...props} notesList={this.state.notes} />
            )}
          /> */}

          {/* <Route path="/note">
            <About />
          </Route> */}
          <Route path="/">
            <Notes notesList={this.state.notes} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
